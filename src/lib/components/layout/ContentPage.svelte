<script lang="ts">
    import Heading from '$lib/components/sections/Heading.svelte';
    import Divider from '$lib/components/ui/Divider.svelte';
    import Text from '$lib/components/ui/Text.svelte';
    import type { ContentItem, PageLink } from '$lib/types';
    import PageLayout from './PageLayout.svelte';

    export let title = '';
    export let desc = '';
    export let intro = '';
    export let links: PageLink[] = [];
    export let content: ContentItem[] | undefined = undefined;
    export let textCustom = '';
    export let textColumns = false;
    export let extraScrollPadding = false;
</script>

<PageLayout {extraScrollPadding}>
    <Heading {title} {desc} {intro} {links} />
    {#if content}
        {#if textColumns}
            <Divider columns />
        {/if}
        <Text {content} custom={textCustom} columns={textColumns} />
    {/if}
    <slot />
</PageLayout>
