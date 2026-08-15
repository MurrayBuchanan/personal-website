<script lang="ts">
    export let spacing: 'default' | 'footer' | 'section' | 'none' = 'default';
    export let columns = false;

    const lineClass =
        'h-px shrink-0 rounded-full bg-neutral-900/[0.06] dark:bg-white/[0.08]';
    const listGrid = 'grid min-w-0 grid-cols-[11rem_1fr] gap-x-6 sm:gap-x-8';

    const spacingClass: Record<typeof spacing, string> = {
        default: 'mt-1 mb-4 sm:mb-5',
        footer: 'mt-8 mb-4 sm:mt-10 sm:mb-5',
        section: 'mt-5 sm:mt-6 mb-0',
        none: 'my-0',
    };
</script>

{#if columns}
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
