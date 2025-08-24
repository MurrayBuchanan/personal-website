<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../../lib/components/layout/Container.svelte';
    import Image from '../../lib/components/ui/Image.svelte';
    import Paragraph from '../../lib/components/ui/Text.svelte';
    import Footer from '../../lib/components/layout/Footer.svelte';
    import Heading from '../../lib/components/sections/Heading.svelte';


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
      
        <!-- <Image url="assets/images/jpmorganchase.jpg" 
            alt="J.P. Morgan Chase Logo" 
        /> -->

        <Paragraph 
            content={[{ title: "Away until September 2026", desc: "Full-Stack Software Engineer within Global Research, with a strong emphasis on cloud technologies and system architecture. " }]}
        />
        
        
        <Footer />
    </Container>
</body>