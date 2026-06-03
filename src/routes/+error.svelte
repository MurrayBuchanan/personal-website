<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';

    export let error;
</script>

<svelte:head>
    <title>Murray Buchanan | Not Found</title>
</svelte:head>

<ContentPage
    title={error?.message || 'Page not found'}
    desc="The page you're looking for doesn't exist."
>
    <div class="animate flex justify-center py-4 sm:py-6">
        <DotLottieSvelte src="/assets/animations/animation.lottie" loop autoplay />
    </div>
</ContentPage>
