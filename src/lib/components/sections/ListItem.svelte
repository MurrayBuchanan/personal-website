<script lang="ts">
    import Badge from '$lib/components/ui/Badge.svelte';
    import InlineLink from '$lib/components/ui/InlineLink.svelte';
    import { isExternalUrl } from '$lib/utils/url';

    export let date = '';
    export let badges: string[] = [];
    export let role: string | null | undefined = '';
    export let company = '';
    export let location: string | null | undefined = '';
    export let url = '';
    export let externalUrl = '';
    export let subdued = false;

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
</article>
