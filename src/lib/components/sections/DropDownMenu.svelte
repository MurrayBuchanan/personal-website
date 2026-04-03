<script lang="ts">
    import { SLIDE_UP_DURATION_MS } from '$lib/animation/constants';
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    /** Opacity only — avoids layout/hit-test issues with vertical motion inside the accordion. */
    const panelFly = {
        duration: SLIDE_UP_DURATION_MS,
        easing: quintOut,
        opacity: 0,
    };

    interface ModuleItem {
        moduleName: string;
        project?: {
            title: string;
            code?: string;
            desc?: string;
            url?: string;
        };
    }

    export let title: string;
    export let classes: ModuleItem[] = [];
    /** Open by default so module lists are visible without an extra click. */
    export let defaultOpen = true;

    let isExpanded = defaultOpen;

    function toggleExpand() {
        isExpanded = !isExpanded;
    }
</script>

<div class="border border-tertiary-light dark:border-tertiary-dark mb-4 overflow-hidden rounded-xl">
    {#if title}
        <div
            class="px-4 py-3 text-secondary-light dark:text-secondary-dark cursor-pointer flex justify-between items-center"
            on:click={toggleExpand}
            on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(); }}
            role="button"
            tabindex="0"
            aria-expanded={isExpanded}
        >
            <h3 class="text-base font-normal leading-snug tracking-tight sm:text-lg">{title}</h3>
            <svg class="w-5 h-5 transform transition-transform duration-100 ease-out" class:rotate-180={isExpanded} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
    {/if}

    {#if isExpanded && classes.length > 0}
        <div class="px-4 py-3" in:fly={panelFly} out:fly={panelFly}>
            <ul
                class="grid list-none grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2.5 lg:grid-cols-3"
                role="list"
            >
                {#each classes as klass (klass.moduleName)}
                    <li
                        class="min-w-0 rounded-lg border border-tertiary-light bg-primary-light/40 px-3 py-2.5 dark:border-tertiary-dark dark:bg-primary-dark/40 {klass.project
                            ? 'col-span-full sm:col-span-2 lg:col-span-3'
                            : ''}"
                    >
                        <h4 class="text-sm font-normal leading-snug tracking-normal text-secondary-light dark:text-secondary-dark sm:text-base">
                            {klass.moduleName}
                        </h4>

                        {#if klass.project}
                            <h5 class="mb-2 mt-2 text-xs font-normal tracking-normal text-secondary-light dark:text-secondary-dark sm:text-sm">
                                Project: {klass.project.title}
                            </h5>

                            {#if klass.project.desc}
                                <p class="font-serif mb-3 text-sm leading-relaxed tracking-normal text-secondary-light dark:text-secondary-dark">
                                    {klass.project.desc}
                                </p>
                            {/if}

                            {#if klass.project.code}
                                <a
                                    href={klass.project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="font-sans mr-4 cursor-pointer text-xs font-normal text-secondary-light transition-colors duration-100 ease-out hover:underline dark:text-secondary-dark sm:text-sm underline-offset-2"
                                >
                                    Repository
                                </a>
                            {/if}

                            {#if klass.project.url}
                                <a
                                    href={klass.project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="font-sans mr-4 cursor-pointer text-xs font-normal text-secondary-light transition-colors duration-100 ease-out hover:underline dark:text-secondary-dark sm:text-sm underline-offset-2"
                                >
                                    Preview
                                </a>
                            {/if}
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>
