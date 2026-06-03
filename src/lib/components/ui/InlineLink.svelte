<script lang="ts">
    import { isExternalUrl } from '$lib/utils/url';
    import Icon from './Icon.svelte';

    export let href: string;
    export let label: string;
    export let newTab = false;
    export let className = '';

    $: openNewTab = newTab || isExternalUrl(href);

    const linkClass =
        'type-link group inline-flex w-fit max-w-full self-start items-center gap-1 py-0.5 -my-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-light/30 dark:focus-visible:ring-secondary-dark/40';
    const iconClass =
        'shrink-0 stroke-[1.75] text-tertiary-light group-hover:text-tertiary-light dark:text-tertiary-dark dark:group-hover:text-tertiary-dark';

    $: classes = className ? `${linkClass} ${className}` : linkClass;
</script>

<a
    {href}
    class={classes}
    target={openNewTab ? '_blank' : undefined}
    rel={openNewTab ? 'noopener noreferrer' : undefined}
>
    <span class="type-link-text">{label}</span>
    <Icon name="arrow-up-right" size="sm" className={iconClass} />
</a>
