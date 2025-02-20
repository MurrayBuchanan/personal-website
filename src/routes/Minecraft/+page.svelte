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
        title="Minecraft"
        desc="2015-2017 · Community Building, Server Hosting, Plugin Dev"
        newPage={true}
        />


        <SectionPara paragraphs={["I started my coding journey by building Minecraft plugins—creating custom commands and, more notably, custom enchantments. This hands-on experience fueled my passion for programming and taught me the fundamentals of turning ideas into interactive features."]}/>
        <SectionPara paragraphs={["I had the opportunity to work with servers hosting 100-250 users, contributing to their development and enhancing the player experience. Eventually, I created my own server, which became profitable and was my first introduction to earning money on the internet. This experience taught me invaluable lessons in project management, community building, and entrepreneurship."]}/>

        <Footer />
    </Container>

</body>