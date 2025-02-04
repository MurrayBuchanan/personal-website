<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading
        title="Camp Lindenmere"
        desc="2024 · Academia, Teaching, Java, React, UI, UX"
        links={[
            { url: "https://example.com", title: "Visit Website" },
            { url: "https://another.com", title: "Materials" }
        ]}
        />


        <SectionMedia
            image="/assets/banners/CampLindenmere.jpg"
            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />


    <div class="grid grid-cols-2 gap-8 pb-32">
    <SectionMedia title="Updated" desc="Without depth sensor, we want to use eye saccades as a form of identification." />
        
        <SectionMedia
            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />
        <SectionMedia

            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />
        <SectionMedia

            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />
    </div>
    
    <Footer />
    </Container>

</body>