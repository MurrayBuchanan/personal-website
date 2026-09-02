<script lang="ts">
    import { page } from '$app/stores';
    import { useAnimate } from '$lib/animation/useAnimate';
    import type { ContentItem } from '$lib/types';
    import { descriptionFromPage } from '$lib/seo';
    import Container from './Container.svelte';
    import Footer from './Footer.svelte';
    import Seo from './Seo.svelte';

    export let extraScrollPadding = false;
    export let seoTitle = '';
    export let seoDescription = '';
    export let noindex = false;
    export let intro = '';
    export let desc = '';
    export let content: ContentItem[] | undefined = undefined;

    $: resolvedDescription =
        seoDescription ||
        descriptionFromPage({
            title: seoTitle,
            desc,
            intro,
            content,
        });
</script>

<Seo
    title={seoTitle}
    description={resolvedDescription}
    pathname={$page.url.pathname}
    {noindex}
/>

<div
    class="flex min-h-svh min-w-0 flex-col bg-primary-light dark:bg-primary-dark"
    use:useAnimate={{ observeMutations: true }}
>
    <Container custom="flex flex-1 flex-col">
        <slot />
        <Footer {extraScrollPadding} />
    </Container>
</div>
