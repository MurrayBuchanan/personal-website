<script lang="ts">
    import type { IconName } from '$lib/types';

    export let name: IconName;
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let className = '';

    const sizes: Record<typeof size, string> = {
        sm: 'h-4 w-4',
        md: 'h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5',
        lg: 'h-6 w-6',
    };

    $: svgClass = [
        'shrink-0 stroke-current transition-[stroke-width] duration-100 ease-out [vector-effect:non-scaling-stroke]',
        sizes[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={svgClass}
    aria-hidden="true"
>
    {#if name === 'home'}
        <path
            d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            class="fill-primary-light stroke-current dark:fill-primary-dark"
        />
    {:else if name === 'mail'}
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    {:else if name === 'linkedin'}
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    {:else if name === 'github'}
        <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
    {:else if name === 'instagram'}
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    {:else if name === 'sun'}
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    {:else if name === 'moon'}
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    {:else if name === 'monitor'}
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
    {:else if name === 'external'}
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    {:else if name === 'arrow-up-right'}
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
    {:else if name === 'arrow-right'}
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
    {:else if name === 'chevron-down'}
        <path d="m6 9 6 6 6-6" />
    {/if}
</svg>
