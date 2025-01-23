<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from './../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from './../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-secondary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading
        title="JP Morgan Chase & Co"
        desc="Now · Work, Analyst, Python"
        newPage={true}
        links={[
            { url: "https://www.jpmorganchase.com/", title: "Visit Website" }
        ]}
        />


        <SectionPara paragraphs={["I was part of the 2024 Spring into Tech class, where we were guests at the brand-new Tech Center, which is where I met some incredible people and got a real insight into J.P. Morgan by listening to some amazing speakers and attending various workshops and presentations. "]}/>

        <SectionMedia
            image="/assets/banners/JPMorganChase.jpg"
            title="First Day"
            desc="Photo of 2024 Spring into Tech Cohort."
        />

        <SectionText
            title="Insight Program"
            desc="Keep your head still and take a photo of your eyes from below, now from above. That's the premise."
        />

        <SectionText 
            title="Code for Good"
            desc="We developed an interactive learning platform for a charity named Deafblind Scotland. The purpose was to create an easy way to learn the Deafblind Manual. We recieved the 1st place prize in this challenge for our efforts."
        />

        <SectionText 
            title="Summer Analyst"
            desc="Using head and phone position, we can transform these image matrices - better (more) training data."
        />

        <Footer />
    </Container>

</body>