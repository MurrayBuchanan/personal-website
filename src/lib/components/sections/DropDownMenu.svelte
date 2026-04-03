<script lang="ts">
    import { fly } from 'svelte/transition';
    import { collapseFly } from '$lib/collapseFly';

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

    let isExpanded = false;

    function toggleExpand() {
        isExpanded = !isExpanded;
    }
</script>

<div class="border border-tertiary-light dark:border-tertiary-dark rounded-xl mb-4 overflow-hidden animate">
    {#if title}
        <div
            class="px-4 py-3 text-secondary-light dark:text-secondary-dark cursor-pointer flex justify-between items-center"
            on:click={toggleExpand}
            on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(); }}
            role="button"
            tabindex="0"
            aria-expanded={isExpanded}
        >
            <h3 class="text-base font-normal leading-snug tracking-[-0.02em] sm:text-lg">{title}</h3>
            <svg class="w-5 h-5 transform transition-transform duration-100 ease-out" class:rotate-180={isExpanded} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
    {/if}

    {#if isExpanded && classes.length > 0}
        <div class="px-4 py-3" in:fly={collapseFly} out:fly={collapseFly}>
            {#each classes as klass (klass.moduleName)}
                <div class="mb-3 pb-3 border-b border-tertiary-light dark:border-tertiary-dark last:border-b-0 last:mb-0 last:pb-0">
                    <h4 class="text-sm font-normal leading-snug tracking-normal text-secondary-light dark:text-secondary-dark sm:text-base">{klass.moduleName}</h4>

                    {#if klass.project}

                            <h5 class="mb-2 text-xs font-normal tracking-normal text-secondary-light dark:text-secondary-dark sm:text-sm">Project: {klass.project.title}</h5>


                            {#if klass.project.desc}
                                <p class="font-serif mb-3 text-sm leading-[1.65] tracking-normal text-secondary-light dark:text-secondary-dark sm:text-[0.9375rem]">{klass.project.desc}</p>
                            {/if}

                            {#if klass.project.code}
                                <a href={klass.project.code} target="_blank" rel="noopener noreferrer" class="font-sans mr-4 text-xs font-normal text-secondary-light dark:text-secondary-dark hover:underline underline-offset-2 transition-colors duration-100 ease-out sm:text-sm cursor-pointer">
                                    Repository
                                </a>
                            {/if}

                            {#if klass.project.url}
                                <a href={klass.project.url} target="_blank" rel="noopener noreferrer" class="font-sans mr-4 text-xs font-normal text-secondary-light dark:text-secondary-dark hover:underline underline-offset-2 transition-colors duration-100 ease-out sm:text-sm cursor-pointer">
                                    Preview
                                </a>
                            {/if}
                    {/if}
                </div>
            {/each}
        </div>
    {/if}
</div>
