<script lang="ts">
    import type { ContentItem } from '$lib/types';

    export let content: ContentItem[] = [];
    export let custom = '';
</script>

<div class="flex flex-col gap-7 sm:gap-9 {custom}">
    {#each content as item, index (index)}
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
                    {#each item.desc as paragraph, index (index)}
                        {#if paragraph}
                            <p class="type-body">
                                {paragraph}
                            </p>
                        {/if}
                    {/each}
                </div>
            {/if}
        </section>
    {/each}
</div>
