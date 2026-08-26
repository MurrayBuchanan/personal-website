<script lang="ts">
    import type { PageLink } from '$lib/types';
    import InlineLink from './InlineLink.svelte';

    export let links: PageLink[] = [];
    export let label = 'Primary';
    export let className = '';
</script>

{#if links.length > 0}
    <nav class="animate {className}" aria-label={label}>
        <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
            {#each links as link (link.url)}
                <li class="min-w-0">
                    <InlineLink href={link.url} label={link.title} />
                </li>
            {/each}
        </ul>
    </nav>
{/if}
