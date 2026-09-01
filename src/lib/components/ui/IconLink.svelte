<script lang="ts">
    import type { IconName } from '$lib/types';
    import { isExternalUrl } from '$lib/utils/url';
    import Icon from './Icon.svelte';

    export let href: string;
    export let label: string;
    export let name: IconName;
    export let size: 'sm' | 'md' | 'lg' = 'md';

    const wrapClass =
        'group inline-flex w-fit shrink-0 text-secondary-light opacity-[0.62] transition-[color,opacity] duration-100 ease-out hover:text-secondary-light hover:opacity-100 dark:text-secondary-dark dark:opacity-[0.55] dark:hover:text-secondary-dark dark:hover:opacity-100';

    $: external = isExternalUrl(href);
</script>

<a
    {href}
    class={wrapClass}
    aria-label={label}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
>
    <Icon {name} {size} />
</a>
