<script lang="ts">
    import { useAnimate } from './animation/animation';
    import Container from '../lib/components/layout/Container.svelte';
    import Footer from '../lib/components/layout/Footer.svelte';
    import Heading from '../lib/components/sections/Heading.svelte';
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';

    export let error;
</script>
  
<svelte:head>
    <title>Murray Buchanan | Not Found</title>
</svelte:head>
  


<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="{error?.message || 'Page not found'}"
            desc="The page you’re looking for doesn’t exist." 
        />       

        <DotLottieSvelte src="/assets/animations/animation.lottie" loop autoplay />

        <Footer />
    </Container>
</body>