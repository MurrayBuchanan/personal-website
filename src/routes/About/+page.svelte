<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-secondary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading title="About" />

        <SectionPara paragraphs={["Hi I’m Murray, currently in my penultimate year studying Computer Science at the University of Strathclyde. My main CS activity’s at the moment are working with Swift and Svelte. "]}/>

        <SectionPara paragraphs={["I would assume because your here you might know me or something...? If you don't here are a couple things about me... "]}/>

        <SectionPara paragraphs={["Website is currently underdevelopment."]}/>

        <Footer />
    </Container>

</body>