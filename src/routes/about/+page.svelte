<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../../lib/components/layout/Container.svelte';
    import Heading from '../../lib/components/sections/Heading.svelte';
    import Text from '../../lib/components/ui/Text.svelte';
    import Footer from '../../lib/components/layout/Footer.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading title="About" />

        <Text content={[
            { desc: "This site is basically a tech portfolio - and since you’re here, there’s a good chance you already know me. But just in case..." },
            { desc: "Hi, I'm Murray, I study Computer Science, I like building things that work well, look good, and solve real problems. I’m competitive, curious, and driven by a challenge — whether that’s in code, sport, or everyday life. I care about quality, I learn fast, and I don’t do things by half." },
            { desc: "While I prefer not to share too many personal details online, I'm very friendly and always happy to connect. If you’re into good conversations, interesting ideas, or just curious about what I’m working on, feel free to reach out. I hope to hear from you!" }
        ]}/>

        <Footer />
    </Container>

</body>