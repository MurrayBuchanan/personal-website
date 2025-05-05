<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
    import Heading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Minecraft"
            desc="2017-2019 · Community Building, Server Hosting, Plugin Dev"
            newPage={true}
        />


        <Paragraphs paragraphs={[
            "I started my coding journey by building Minecraft plugins—creating custom commands and, more notably, custom enchantments. This hands-on experience fueled my passion for programming and taught me the fundamentals of turning ideas into interactive features.",
            "I had the opportunity to work with servers hosting 100-200, contributing to their development and enhancing the player experience. Eventually, I created my own server, which became profitable and was my first introduction to earning money on the internet. This experience taught me invaluable lessons in project management, community building, and entrepreneurship."
        ]}/>

        <Footer />
    </Container>

</body>