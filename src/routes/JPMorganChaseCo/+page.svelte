<script lang="ts">
    import Container from './../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from './../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-secondary-dark">
    <Container custom="mt-48">
        <SectionHeading
        title="JP Morgan Chase & Co"
        desc="Now · Work, Analyst, Python",
        links={[
            { url: "https://www.jpmorganchase.com/", title: "Visit Website" }
        ]}
        />

        <SectionPara paragraphs={["Following my second year, I was invited to be a Summer Analyst for the 2025 Cohort. "]}/>

        <SectionMedia
            image="static/assets/banners/JPMorganChase.jpg"
            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />

        <SectionText
            title="Insight Program"
            desc="Keep your head still and take a photo of your eyes from below, now from above. That's the premise."
        />

        <SectionText 
            title="Internship Program"
            desc="Using head and phone position, we can transform these image matrices - better (more) training data."
        />

    </Container>

    <!-- Footer Component -->
    <Container custom="mt-24">
        <Footer />
    </Container>

</body>