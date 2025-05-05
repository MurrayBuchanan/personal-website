<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Heading from '../components/section-heading.svelte';
    import Paragraph from '../components/section-text.svelte';
    import Footer from '../components/footer.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Honourable Mentions"
            desc="Additional archived or scrapped projects"
            newPage={true}
        />

        <Paragraph title="This Website" desc="I have spent way too long developing this website."/>

        <Paragraph title="The Conquer Collective" desc="Originally started with my flatmates on High Street in Glasgow City Centre. It began simply as a way for us to get our hands on clothing we actually liked. Later, Jonathan Ewers and I continued to develop it further, challenging ourselves to see how profitable we could make the venture using limited resources."/>

        <Paragraph title="The Tale of Two" desc="Tale of Two was a project developed as a two-player shooter game. It served as a practical way for us to learn more about the complexities of developing 3D games. In the game, users could join randomly and be placed on a procedurally generated map to engage in egg-shooting combat. While we initially envisioned a far more detailed game, we ultimately decided to scale back and scrap the larger project due to its complexity and a desire to focus on other passion projects."/>

        <Paragraph title="Task Manager" desc="This project, the Task Manager app, was created with the primary goal of experimenting with a new art style. Functionally, it served as a to-do list integrated directly into a calendar interface. Developed using Flutter, the app became impressively complete for what was initially conceived as purely experimental, incorporating various APIs. The art style used during this project was later applied to 'Set Piece'." />

        <Paragraph title="Drone Controller" desc="As an experimental project, I built the underlying system to allow an iOS device to interface with and control a Raspberry Pi. This undertaking was key to exploring the capabilities of the Raspberry Pi and enhancing my programming skills in Swift. - Scrapped"/>

        <Paragraph title="Dringo" desc="In project queue"/>

        <Footer />
    </Container>
</body>