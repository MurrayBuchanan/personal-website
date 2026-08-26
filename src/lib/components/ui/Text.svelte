<script lang="ts">
    import type { ContentItem } from '$lib/types';
    import Collage from './Collage.svelte';
    import PageLinks from './PageLinks.svelte';
    import Video from './Video.svelte';

    export let content: ContentItem[] = [];
    export let custom = '';
    export let columns = false;
    export let split = false;

    const listGrid = 'grid min-w-0 grid-cols-3 items-start gap-x-6 sm:gap-x-8';
</script>

<div
    class="flex flex-col {columns
        ? 'gap-4 sm:gap-5'
        : split
          ? 'gap-10 sm:gap-14 lg:gap-16'
          : 'gap-7 sm:gap-9'} {custom}"
>
    {#each content as item, index (index)}
        {@const twoCol = item.split ?? split}
        {@const descClass =
            item.heading || twoCol || item.title ? 'type-body' : 'type-lead'}
        {@const itemLinks = item.links ?? []}
        {@const hasMedia = Boolean(item.video) || Boolean(item.images?.length)}
        <div class="flex min-w-0 flex-col {hasMedia ? 'gap-5 sm:gap-6' : ''}">
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

                            <PageLinks
                                links={itemLinks}
                                label={item.title ?? 'Links'}
                            />
                        </div>
                    </div>
                </article>
            {:else if twoCol || item.heading || item.desc || itemLinks.length > 0}
                <article
                    class="animate grid min-w-0 grid-cols-1 items-start gap-5 {twoCol
                        ? 'lg:grid-cols-2 lg:gap-x-10 xl:gap-x-12'
                        : ''}"
                >
                    {#if item.title || twoCol}
                        <div class="min-w-0 text-left">
                            {#if item.title}
                                <h3 class="type-display">
                                    {item.title}
                                </h3>
                            {/if}
                        </div>
                    {/if}

                    <div class="flex min-w-0 flex-col text-left">
                        {#if item.heading}
                            <p class="type-lead !max-w-none {item.desc ? 'pb-5 sm:pb-6' : ''}">
                                {item.heading}
                            </p>
                        {/if}

                        {#if typeof item.desc === 'string' && item.desc}
                            <p class="{descClass} !max-w-none">
                                {item.desc}
                            </p>
                        {:else if Array.isArray(item.desc)}
                            <div class="flex flex-col gap-3.5 sm:gap-4">
                                {#each item.desc as paragraph, paragraphIndex (paragraphIndex)}
                                    {#if paragraph}
                                        <p class="{descClass} !max-w-none">
                                            {paragraph}
                                        </p>
                                    {/if}
                                {/each}
                            </div>
                        {/if}

                        <PageLinks
                            links={itemLinks}
                            label={item.title ?? 'Links'}
                            className={item.desc || item.heading ? 'mt-0.5 pt-1' : ''}
                        />
                    </div>
                </article>
            {:else}
                <section class="animate flex flex-col gap-3 sm:gap-3.5">
                    {#if item.title}
                        <h3 class="type-section">
                            {item.title}
                        </h3>
                    {/if}

                    <PageLinks links={itemLinks} label={item.title ?? 'Links'} />
                </section>
            {/if}

            {#if item.video}
                <Video
                    src={item.video}
                    poster={item.videoPoster}
                    title={item.videoTitle ?? item.title ?? 'Video'}
                    caption={item.videoCaption ?? ''}
                />
            {/if}

            {#if item.images && item.images.length > 0}
                <Collage
                    images={item.images}
                    title={item.imagesTitle ?? item.title ?? 'Photos'}
                    emphasis={item.imagesEmphasis ?? 2}
                />
            {/if}
        </div>
    {/each}
</div>
