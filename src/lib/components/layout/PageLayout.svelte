<script lang="ts">
    import { useAnimate } from '$lib/animation/useAnimate';
    import Container from './Container.svelte';
    import Footer from './Footer.svelte';

    export let extraScrollPadding = false;
</script>

<div
    class="flex min-h-svh min-w-0 flex-col bg-primary-light dark:bg-primary-dark"
    use:useAnimate={{ observeMutations: true }}
>
    <Container custom="flex flex-1 flex-col">
        <slot />
        <Footer {extraScrollPadding} />
    </Container>
</div>
