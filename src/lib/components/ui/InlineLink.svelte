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
        'type-link group/link inline-flex w-fit max-w-full self-start items-center gap-1 py-0.5 -my-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-light/30 dark:focus-visible:ring-secondary-dark/40';
    const iconClass =
        'shrink-0 stroke-[1.75] text-tertiary-light dark:text-tertiary-dark opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100';

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
