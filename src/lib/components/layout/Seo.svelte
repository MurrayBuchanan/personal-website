<script lang="ts">
    import {
        LOCALE,
        OG_IMAGE_ALT,
        OG_IMAGE_HEIGHT,
        OG_IMAGE_PATH,
        OG_IMAGE_WIDTH,
        PROFILE_LINKS,
        SITE_NAME,
        SITE_URL,
        canonicalUrl,
        jsonLdGraph,
        pageTitle,
        SITE_DESCRIPTION,
    } from '$lib/seo';

    export let title = '';
    export let description = '';
    export let pathname = '/';
    export let noindex = false;

    $: documentTitle = pageTitle(title);
    $: metaDescription = description.trim() || SITE_DESCRIPTION;
    $: canonical = canonicalUrl(pathname);
    $: image = `${SITE_URL}${OG_IMAGE_PATH}`;
    $: robots = noindex ? 'noindex, nofollow' : 'index, follow';
    $: ogType = pathname === '/' ? 'profile' : 'website';
    $: structuredData = jsonLdGraph({
        pathname,
        title: documentTitle,
        description: metaDescription,
    });
</script>

<svelte:head>
    <title>{documentTitle}</title>
    <meta name="description" content={metaDescription} />
    <meta name="author" content={SITE_NAME} />
    <meta name="robots" content={robots} />
    <meta name="googlebot" content={robots} />
    <link rel="canonical" href={canonical} />
    <link rel="author" href={`${SITE_URL}/about`} />
    <link rel="me" href={PROFILE_LINKS.linkedin} />
    <link rel="me" href={PROFILE_LINKS.github} />
    <link rel="me" href={PROFILE_LINKS.instagram} />

    <meta property="og:type" content={ogType} />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:locale" content={LOCALE} />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={documentTitle} />
    <meta property="og:description" content={metaDescription} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={OG_IMAGE_ALT} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
    <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
    {#if ogType === 'profile'}
        <meta property="profile:first_name" content="Murray" />
        <meta property="profile:last_name" content="Buchanan" />
    {/if}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={documentTitle} />
    <meta name="twitter:description" content={metaDescription} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

    {@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>
