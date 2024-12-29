<script lang="ts">
    import Container from './../components/container.svelte';

    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from './../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';

</script>

<body class="bg-primary-light dark:bg-secondary-dark">
    <Container custom="pt-48">
        <SectionHeading
        title="JP Morgan Chase & Co"
        desc="2024 · Academia, signal processing, ML, UX"
        links={[
            { url: "https://example.com", title: "Example" },
            { url: "https://another.com", title: "Another Example" }
        ]}
        />

        <SectionPara
    paragraphs={["Following my final year dissertation, I continued working at the University of St Andrews alongside researchers to advance the project.", "In this role, I collaborated with academics working on three papers."]}/>

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
    
        <SectionMedia
            image="static/assets/placeholder.png"
            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />

        <SectionText
            title="Use Motion"
            desc="Keep your head still and take a photo of your eyes from below, now from above. That's the premise."
        />

        <SectionText 
            title="Transform"
            desc="Using head and phone position, we can transform these image matrices - better (more) training data."
        />

        <SectionText 
            title="Login"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />

        <SectionPara
        paragraphs={[
            "Following my final year dissertation, I continued working at the University of St Andrews alongside researchers to advance the project.",
            "In this role, I collaborated with academics working on three papers."
        ]}></SectionPara>

    </Container>

    <!-- Footer Component -->
    <Container custom="pt-20">
        <Footer />
    </Container>

</body>