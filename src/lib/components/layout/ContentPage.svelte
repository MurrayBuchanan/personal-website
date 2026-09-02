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
    export let textSplit = false;
    export let extraScrollPadding = false;
</script>

<PageLayout {extraScrollPadding} seoTitle={title} {desc} {intro} {content}>
    <Heading {title} {desc} {intro} {links} />
    {#if content}
        {#if textColumns}
            <Divider />
        {/if}
        <Text {content} custom={textCustom} columns={textColumns} split={textSplit} />
    {/if}
    <slot />
</PageLayout>
