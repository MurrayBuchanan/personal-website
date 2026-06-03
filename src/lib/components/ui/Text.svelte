<script lang="ts">
    import type { ContentItem } from '$lib/types';

    export let content: ContentItem[] = [];
    export let custom = '';
    export let columns = false;

    const listGrid = 'grid min-w-0 grid-cols-3 items-start gap-x-6 sm:gap-x-8';
</script>

<div
    class="flex flex-col {columns
        ? 'gap-4 sm:gap-5'
        : 'gap-7 sm:gap-9'} {custom}"
>
    {#each content as item, index (index)}
        {#if columns}
            <article class="animate min-w-0">
                <div class={listGrid}>
                    <div class="col-span-1 min-w-0 text-left">
                        {#if item.title}
                            <p class="type-lead !max-w-none">
                                {item.title}
                            </p>
                        {/if}
                    </div>

                    <div class="col-span-2 flex min-w-0 flex-col gap-3 sm:gap-3.5 text-left">
                        {#if typeof item.desc === 'string' && item.desc}
                            <p class="type-body !max-w-none">
                                {item.desc}
                            </p>
                        {:else if Array.isArray(item.desc)}
                            {#each item.desc as paragraph, paragraphIndex (paragraphIndex)}
                                {#if paragraph}
                                    <p class="type-body !max-w-none">
                                        {paragraph}
                                    </p>
                                {/if}
                            {/each}
                        {/if}
                    </div>
                </div>
            </article>
        {:else}
            <section class="animate flex flex-col gap-3 sm:gap-3.5">
                {#if item.title}
                    <h3 class="type-section">
                        {item.title}
                    </h3>
                {/if}

                {#if typeof item.desc === 'string' && item.desc}
                    <p class="type-body">
                        {item.desc}
                    </p>
                {:else if Array.isArray(item.desc)}
                    <div class="flex max-w-prose flex-col gap-3.5 sm:gap-4">
                        {#each item.desc as paragraph, paragraphIndex (paragraphIndex)}
                            {#if paragraph}
                                <p class="type-body">
                                    {paragraph}
                                </p>
                            {/if}
                        {/each}
                    </div>
                {/if}
            </section>
        {/if}
    {/each}
</div>
