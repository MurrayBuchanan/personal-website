<script lang="ts">
    import Badge from '$lib/components/ui/Badge.svelte';
    import InlineLink from '$lib/components/ui/InlineLink.svelte';
    import { isExternalUrl } from '$lib/utils/url';
    import type { ExperiencePosition } from '$lib/types';

    export let date = '';
    export let badges: string[] = [];
    export let role: string | null | undefined = '';
    export let company = '';
    export let location: string | null | undefined = '';
    export let desc = '';
    export let url = '';
    export let externalUrl = '';
    export let subdued = false;
    export let positions: ExperiencePosition[] = [];

    $: linkHref = externalUrl || url;
    $: openInNewTab = isExternalUrl(linkHref);

    const dateColGrid =
        'grid-cols-[6.5rem_minmax(0,1fr)] sm:grid-cols-[11rem_minmax(0,1fr)]';
</script>

<article class={subdued ? 'opacity-[0.78] dark:opacity-[0.82]' : ''}>
    <div class="grid min-w-0 {dateColGrid} items-start gap-x-6 sm:gap-x-8">
        <div
            class="flex min-w-0 flex-col items-start gap-2 text-left sm:flex-row sm:flex-wrap sm:items-center"
        >
            {#if date}
                <time class="type-meta shrink-0 whitespace-nowrap tabular-nums">
                    {date}
                </time>
            {/if}
        </div>

        <div class="flex min-w-0 flex-col {desc ? 'gap-2' : 'gap-1'} text-left">
            {#if company}
                {#if role}
                    {#if linkHref}
                        <InlineLink href={linkHref} label={company} newTab={openInNewTab} />
                    {:else}
                        <p class="type-lead !max-w-none">
                            {company}
                        </p>
                    {/if}
                {:else}
                    <div class="flex flex-wrap items-center gap-2">
                        {#if linkHref}
                            <InlineLink href={linkHref} label={company} newTab={openInNewTab} />
                        {:else}
                            <p class="type-lead !max-w-none">
                                {company}
                            </p>
                        {/if}
                        {#each badges as badge (badge)}
                            <Badge text={badge} />
                        {/each}
                    </div>
                {/if}
            {/if}
            {#if role}
                <div class="flex flex-wrap items-center gap-2">
                    <p class="type-lead !max-w-none">
                        {role}
                    </p>
                    {#each badges as badge (badge)}
                        <Badge text={badge} />
                    {/each}
                </div>
            {/if}
            {#if location}
                <p class="type-meta !max-w-none">
                    {location}
                </p>
            {/if}
            {#if desc}
                <p class="type-body !max-w-none">
                    {desc}
                </p>
            {/if}
        </div>
    </div>

    {#if positions.length > 0}
        <ul class="mt-3 flex min-w-0 flex-col">
            {#each positions as position, i (position.role)}
                <li class="grid min-w-0 {dateColGrid} items-start gap-x-6 list-none sm:gap-x-8">
                    <div class=""></div>

                    <div class="flex min-w-0 gap-3 pb-4 last:pb-0">
                        <div class="flex w-1.5 shrink-0 flex-col items-center">
                            <span
                                class="my-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
                                aria-hidden="true"
                            />
                            {#if i < positions.length - 1}
                                <span
                                    class="w-px flex-1 bg-neutral-900/[0.08] dark:bg-white/[0.1]"
                                    aria-hidden="true"
                                />
                            {/if}
                        </div>

                        <div class="flex min-w-0 flex-col gap-1 text-left">
                            <div class="flex flex-wrap items-center gap-2">
                                <p class="type-lead !max-w-none">
                                    {position.role}
                                </p>
                                {#each position.badges ?? [] as badge (badge)}
                                    <Badge text={badge} />
                                {/each}
                            </div>
                            {#if position.location}
                                <p class="type-meta !max-w-none">
                                    {position.location}
                                </p>
                            {/if}
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</article>
