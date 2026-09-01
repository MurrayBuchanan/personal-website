<script lang="ts">
    import { isExternalUrl } from '$lib/utils/url';
    import Icon from './Icon.svelte';

    export let href: string;
    export let label: string;
    export let newTab = false;
    export let className = '';
    export let size: 'body' | 'meta' = 'body';

    $: external = isExternalUrl(href);
    $: openNewTab = newTab || external;

    const bodyLinkClass =
        'type-link group/link relative inline-flex w-fit max-w-full items-center py-0.5 -my-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-light/40 dark:focus-visible:ring-secondary-dark/40';
    const metaLinkClass =
        'type-link type-link-meta group/link relative inline max-w-full align-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-light/40 dark:focus-visible:ring-secondary-dark/40';
    const iconClass =
        'absolute left-full top-1/2 ml-0.5 -translate-y-1/2 text-muted-light opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 dark:text-muted-dark';

    $: linkClass = size === 'meta' ? metaLinkClass : bodyLinkClass;
    $: classes = className ? `${linkClass} ${className}` : linkClass;
</script>

<a
    {href}
    class={classes}
    target={openNewTab ? '_blank' : undefined}
    rel={openNewTab ? 'noopener noreferrer' : undefined}
>
    <span class="type-link-text">{label}</span>
    <Icon name={external ? 'arrow-up-right' : 'arrow-right'} size="sm" className={iconClass} />
</a>
