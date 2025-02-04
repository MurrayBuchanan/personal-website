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
        <SectionHeading
        title="Google Developer Group"
        desc="23-25 · Community Engadgement, Presenting"
        newPage={true}
        links={[
            { url: "https://gdg.community.dev/", title: "Visit Website" }
        ]}
        />


        <SectionPara paragraphs={["Google Developer Groups, sponsored by Google, bring students together to learn tech skills, collaborate on projects, and solve real-world problems in a supportive community."]}/>

        <SectionMedia
            images={["/assets/banners/GoogleDeveloperGroup.jpg", "/assets/banners/GoogleDeveloperGroup.jpg", "/assets/banners/GoogleDeveloperGroup.jpg", "/assets/banners/GoogleDeveloperGroup.jpg"]}
            title="The Team"
            desc="Murray Buchanan, Sophie McCartney, Sofia Banya Ceregido, Akshay Srivats Venkataramana and Folaranmi Faboye"
        />

        <Footer />
    </Container>

</body>