<script lang="ts">
    import { useAnimate } from './animation/animation';
    import Container from './components/container.svelte';
    import Footer from './components/footer.svelte';
    import Heading from './components/section-heading.svelte';
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

        <DotLottieSvelte src="../static/assets/Animation.json" loop autoplay />

        <Footer />

    </Container>
</body>