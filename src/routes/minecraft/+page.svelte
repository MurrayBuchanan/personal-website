<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../../lib/components/layout/Container.svelte';
    import Paragraphs from '../../lib/components/ui/Text.svelte';
    import Footer from '../../lib/components/layout/Footer.svelte';
    import Heading from '../../lib/components/sections/Heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Minecraft"
            desc="2017-2019 · Community Building, Server Hosting, Plugin Dev"
            newPage={true}
        />

        <Paragraphs content={[
            { desc: "I started my coding journey by working on Minecraft servers — mainly configuring plugins, developing custom Buycraft web stores, and experimenting with a custom enchantments plugin. This hands-on experience sparked my passion for programming and taught me the fundamentals of turning ideas into interactive features." },
            { desc: "I had the opportunity to support servers that averaged 100 regular players, contributing to their setup and improving the player experience through my development work. Eventually, I co-founded a server that became profitable, marking my first experience earning money online. This taught me invaluable lessons in project management, community building, and entrepreneurship." }
        ]}/>
        <Footer />
    </Container>

</body>