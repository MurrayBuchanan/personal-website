<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../../lib/components/layout/Container.svelte';
    import Media from '../../lib/components/ui/Video.svelte';
    import Paragraph from '../../lib/components/ui/Text.svelte';
    import Footer from '../../lib/components/layout/Footer.svelte';
    import Heading from '../../lib/components/sections/Heading.svelte';

    // Image loading states
    let isLoading = true;
    let hasError = false;
    let imageLoaded = false;

    function handleImageLoad() {
        isLoading = false;
        imageLoaded = true;
        hasError = false;
    }

    function handleImageError() {
        isLoading = false;
        hasError = true;
        imageLoaded = false;
    }
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="J.P. Morgan Chase"
            desc="2024-Now · Software Engineer, Full-Stack, Global Research"
            newPage={true}
            links={[
                { url: "https://www.jpmorganchase.com/", title: "Visit Website" }
            ]}
        />
      
        <div class="animate w-full overflow-hidden pb-6 relative">
            <img 
                src="/assets/images/jpmorganchase.jpg" 
                alt="JPMorganChase" 
                class="w-full h-auto object-contain rounded-3xl {isLoading || hasError ? 'hidden' : ''}" 
                on:load={handleImageLoad}
                on:error={handleImageError}
                draggable="false"
                loading="lazy"
                aria-label="J.P. Morgan Chase"
            />
        </div>

        <Paragraph 
            content={[{ title: "Away until September 2026", desc: "Full-Stack Software Engineer within Global Research, with a strong emphasis on cloud technologies and system architecture. " }]}
        />
        
        
        <Footer />
    </Container>
</body>