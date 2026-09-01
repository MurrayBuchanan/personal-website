<script lang="ts">
    export let spacing: 'default' | 'footer' | 'section' | 'between' | 'none' =
        'default';
    export let columns = false;
    export let split = false;

    const lineClass =
        'h-px shrink-0 rounded-full bg-black/[0.08] dark:bg-white/[0.08]';
    const listGrid = 'grid min-w-0 grid-cols-[11rem_1fr] gap-x-6 sm:gap-x-8';
    const splitGrid =
        'grid min-w-0 grid-cols-2 gap-x-10 xl:gap-x-12';

    const spacingClass: Record<typeof spacing, string> = {
        default: 'mt-1 mb-4 sm:mb-5',
        footer: 'mt-8 mb-4 sm:mt-10 sm:mb-5',
        section: 'mt-5 sm:mt-6 mb-0',
        between: 'my-5 sm:my-7 lg:my-8',
        none: 'my-0',
    };
</script>

{#if split}
    <div
        class="animate m-0 w-full {spacingClass[spacing]}"
        aria-hidden="true"
    >
        <div class="m-0 w-full lg:hidden {lineClass}" role="presentation" />
        <div class="m-0 hidden w-full lg:grid {splitGrid}">
            <div class="m-0 w-full {lineClass}" role="presentation" />
            <div class="m-0 w-full {lineClass}" role="presentation" />
        </div>
    </div>
{:else if columns}
    <div
        class="animate m-0 w-full {spacingClass[spacing]}"
        aria-hidden="true"
    >
        <div class="m-0 w-full sm:hidden {lineClass}" role="presentation" />
        <div class="m-0 hidden w-full sm:grid {listGrid}">
            <div class="m-0 w-full {lineClass}" role="presentation" />
            <div class="m-0 w-full {lineClass}" role="presentation" />
        </div>
    </div>
{:else}
    <div
        class="animate m-0 w-full {lineClass} {spacingClass[spacing]}"
        role="presentation"
        aria-hidden="true"
    />
{/if}
