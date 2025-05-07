<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Heading from '../components/section-heading.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading title="About" />

        <Paragraphs paragraphs={[
            "As you're visiting my website, you might already know me, but just in case... ",
            "Hey, my name is Murray. I'm originally from Glasgow, and yes, I'm the one with the orange hair! Currently, I'm focused on studying Computer Science.",
            "When I'm not studying, I spend most of my time enjoying various sports, catching up with friends and family, always looking to learn new things, and exploring different places through travel.",
            "While I prefer not to share too many personal details online, I'm very friendly and always happy to connect. So please, feel free to say Hi and get in touch – I hope to hear from you!"
        ]}/>

        <Footer />
    </Container>

</body>