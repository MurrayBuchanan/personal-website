<script lang="ts">
    import Title from './components/title.svelte';
    import Footer from './components/footer.svelte';
    import Container from './components/container.svelte';
    import SectionTitle from './components/section-subTitle.svelte';

        // State to track visibility for each timeline content
        let timelines = [
        {
            title: "JPMorgan Chase & Co",
            subDesc: "UI, UX, Data Processing, Charity",
            image: "static/assets/experience-icons/jpmc.png",
            link: "/JPMorganChaseCo",
        },
        {
            title: "Camp Lindenmere",
            subDesc: "Academia, Teaching, CS",
            image: "static/assets/experience-icons/lindenmere.png",
            link: "/CampLindenmere",
        },
        {
            title: "Direct Distribution",
            subDesc: "Marketing, Sales",
            image: "static/assets/experience-icons/distribution.png",
            link: "/DirectDistribution",
        },
        {
            title: "Google Developer Group",
            subDesc: "Community, GDG, Google",
            image: "static/assets/experience-icons/google.png",
            link: "/GoogleDeveloperGroup",
        },
        {
            title: "University of Strathclyde",
            desc: "MEng, Computer Science",
            subDesc: "Education, Computer Science, GDG, H&S",
            image: "static/assets/experience-icons/strathclyde.png",
            link: "/UniversityOfStrathclyde",
        },
        {
            title: "Chibb",
            subDesc: "2024 · Signal processing, ML, UX",
            image: "static/assets/banners/chibb.png",
            link: "/Chibb",
        },
        {
            title: "Jordanhill School",
            subDesc: "Education, CS, SCQF, Charity",
            image: "static/assets/experience-icons/jordanhill.png",
            link: "/JordanhillSchool",
        }
    ];

</script>

<body class="mx10 bg-primary-light dark:bg-secondary-dark">

    <!-- Main Title Component -->
    <Title />

    <!-- Project Titles -->
    <Container>
        <h2 class="text-3xl py-2 font-semibold text-gray-900 dark:text-white">Experience</h2>
    
        <span>
            {#each timelines as { title, desc, subDesc, image, link}}
                <SectionTitle {title} {desc} {subDesc} {image} {link} />
            {/each}
        </span>
    </Container>

    <!-- Footer Component -->
     <Container>
        <Footer />
    </Container>

</body>