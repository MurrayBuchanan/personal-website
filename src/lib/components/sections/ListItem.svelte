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
    export let url = '';
    export let externalUrl = '';
    export let subdued = false;
    export let positions: ExperiencePosition[] = [];

    $: linkHref = externalUrl || url;
    $: openInNewTab = isExternalUrl(linkHref);
</script>

<article class={subdued ? 'opacity-[0.78] dark:opacity-[0.82]' : ''}>
    <div class="grid min-w-0 grid-cols-3 items-start gap-x-6 sm:gap-x-8">
        <div
            class="col-span-1 flex min-w-0 flex-col items-start gap-2 text-left sm:flex-row sm:flex-wrap sm:items-center"
        >
            {#if date}
                <time class="type-meta shrink-0 tabular-nums">
                    {date}
                </time>
            {/if}
            {#if badges.length > 0}
                <div
                    class="flex w-full min-w-0 flex-wrap items-center justify-start gap-1.5"
                >
                    {#each badges as badge (badge)}
                        <Badge text={badge} />
                    {/each}
                </div>
            {/if}
        </div>

        <div class="col-span-2 flex min-w-0 flex-col gap-1 text-left">
            {#if role}
                <p class="type-lead !max-w-none">
                    {role}
                </p>
            {/if}
            {#if company}
                <InlineLink href={linkHref} label={company} newTab={openInNewTab} />
            {/if}
            {#if location}
                <p class="type-meta !max-w-none">
                    {location}
                </p>
            {/if}
        </div>
    </div>

    {#if positions.length > 0}
        <ul class="mt-3 flex min-w-0 flex-col">
            {#each positions as position, i (position.role)}
                <li class="grid min-w-0 grid-cols-3 items-start gap-x-6 list-none sm:gap-x-8">
                    <div class="col-span-1"></div>

                    <div class="col-span-2 flex min-w-0 gap-3 pb-4 last:pb-0">
                        <div class="flex w-1.5 shrink-0 flex-col items-center">
                            <span
                                class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600"
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
