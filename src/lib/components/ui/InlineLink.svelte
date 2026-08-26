<script lang="ts">
    import { isExternalUrl } from '$lib/utils/url';
    import Icon from './Icon.svelte';

    export let href: string;
    export let label: string;
    export let newTab = false;
    export let className = '';

    $: external = isExternalUrl(href);
    $: openNewTab = newTab || external;

    const linkClass =
        'type-link group/link relative inline-flex w-fit max-w-full items-center py-0.5 -my-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:focus-visible:ring-accent-dark/40';
    const iconClass =
        'pointer-events-none absolute left-full top-1/2 ml-0.5 -translate-y-1/2 stroke-[1.75] text-tertiary-light opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 dark:text-tertiary-dark';

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
