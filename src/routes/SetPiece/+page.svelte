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
        title="Set Piece"
        desc="2024-2025 · Team Training, App Dev, Data Analysis"
        newPage={true}
        />

        <!-- Talk about set piece investment -->
         <!-- Talk about origin of the water boarded laptop -->
        <SectionPara paragraphs={["This project centres on improving communication and clarity in team sports training. I'm developing an app designed to connect coaches and players efficiently. It allows coaches to assign specific training tasks directly to the team.",
                                "A key feature is enabling players to view and animate these tasks within the app, providing enhanced visual clarity and a deeper understanding of drills and assignments compared to traditional static methods.",
                                "Development of this app received valuable initial investment and support from Strath Inspire, which was instrumental in moving the concept forward.",
                                "The project is currently in active development, focusing on building out core features and refining the user experience. I'm excited about its potential to genuinely help teams train more effectively."]}/>
        <Footer />
    </Container>

</body>