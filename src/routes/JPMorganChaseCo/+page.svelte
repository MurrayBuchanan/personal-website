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
        title="JPMorgan Chase & Co"
        desc="Now · Analyst, Fintech"
        newPage={true}
        links={[
            { url: "https://www.jpmorganchase.com/", title: "Visit Website" }
        ]}
        />

        <SectionPara paragraphs={["Text"]}/>

        <SectionMedia
            image="/assets/banners/JPMorganChase.jpg"
            title="First Day"
            desc="Photo of 2024 Spring into Tech Cohort."
        />
        
        <SectionPara paragraphs={["I was part of the 2024 Spring into Tech class, where we were guests at the brand-new Tech Center, which is where I met some incredible people and got a real insight into J.P. Morgan by listening to some amazing speakers and attending various workshops and presentations. "]}/>
       
        
        <Footer />
    </Container>

</body>