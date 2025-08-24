<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../../lib/components/layout/Container.svelte';
    import Heading from '../../lib/components/sections/Heading.svelte';
    import Text from '../../lib/components/ui/Text.svelte';
    import Footer from '../../lib/components/layout/Footer.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Chibb"
            desc="2021-2023 · Game Design, Procedural Generation, iOS Dev"
            newPage={true}
        />
        <Text content={[
            { desc: "Chibb began as a deeply personal project, driven by a simple goal: to dive headfirst into mobile game development and acquire hands-on skills in the process. It quickly evolved into a single-player arcade game, heavily inspired by the classic fixed-shooter style of games like Space Invaders – a nod to the arcade cabinets I loved playing when I was younger." },
            { desc: "Starting out, the focus was on crafting a minimalist design with smooth animations, initially targeting both iOS and WatchOS. However, as my development skills grew each year, Chibb became a dynamic learning platform." },
            { desc: "Revisiting the project annually wasn't just about updates; it became an exciting opportunity to implement new techniques and architectural patterns I had learned. This continuous learning cycle also inspired me to explore a completely different art style with each major iteration, pushing my design capabilities alongside my coding skills." },
            { desc: "Looking back, Chibb stands as a tangible record of my journey in mobile development and design – a project built on passion and persistence." }
        ]}/>
        
        <Footer />
    </Container>

</body>