<script lang="ts">
    import { page } from '$app/stores';
    import type { PageLink } from '$lib/types';
    import IconLink from '$lib/components/ui/IconLink.svelte';
    import PageLinks from '$lib/components/ui/PageLinks.svelte';

    export let title = '';
    export let desc = '';
    export let intro = '';
    export let links: PageLink[] = [];

    const heroSlot =
        'mb-4 w-full min-h-[2.75rem] sm:mb-5 sm:min-h-[3rem] md:min-h-[3.25rem] lg:min-h-[3.5rem]';

    $: isHomepage = $page.url.pathname === '/';
    $: linksSpacing = intro ? 'pb-3 sm:pb-3.5' : 'pb-5 sm:pb-6';
</script>

<main class="animate mt-0 pt-[env(safe-area-inset-top,0px)]">
    <div class="animate flex flex-col items-start justify-end {heroSlot}">
        {#if !isHomepage}
            <IconLink href="../" label="Home" name="home" size="lg" />
        {/if}
    </div>

    <h2 class="type-display animate {!desc ? 'mb-6' : ''}">
        {title}
    </h2>

    {#if desc}
        <p class="type-lead animate pb-1 pt-1">
            {desc}
        </p>
    {/if}

    <PageLinks
        {links}
        className="{desc ? 'mt-0.5' : ''} {linksSpacing}"
    />

    {#if intro}
        <p class="type-intro animate pb-3 pt-0 sm:pb-4">
            {intro}
        </p>
    {/if}
</main>
