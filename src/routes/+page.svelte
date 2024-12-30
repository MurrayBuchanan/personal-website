<script lang="ts">
    import Title from './components/title.svelte';
    import Footer from './components/footer.svelte';
    import Container from './components/container.svelte';
    import SectionTitle from './components/section-subTitle.svelte';

        // State to track visibility for each timeline content
        let timelines = [
        {
            title: "JPMorgan Chase & Co",
            subDesc: "Now · Work, Analyst, Python",
            image: "static/assets/experience-icons/jpmc.png",
            link: "/JPMorganChaseCo",
        },
        {
            title: "Camp Lindenmere",
            subDesc: "2024 · Academia, Teaching, Java, React, UI, UX",
            image: "static/assets/experience-icons/lindenmere.png",
            link: "/CampLindenmere",
        },
        {
            title: "Google Developer Group",
            subDesc: "2023 · Community, Google, Teaching, Competing",
            image: "static/assets/experience-icons/google.png",
            link: "/GoogleDeveloperGroup",
        },
        {
            title: "Direct Distribution",
            subDesc: "2022 · Marketing, Distribution, Logistics, IT",
            image: "static/assets/experience-icons/distribution.png",
            link: "/DirectDistribution",
        },
        {
            title: "University of Strathclyde",
            // desc: "MEng, Computer Science",
            subDesc: "2022 · Education, Computer Science, GDG, H&S",
            image: "static/assets/experience-icons/strathclyde.png",
            link: "/UniversityOfStrathclyde",
        },
        {
            title: "Chibb",
            subDesc: "2020 · Signal processing, ML, UX",
            image: "static/assets/banners/chibb.png",
            link: "/Chibb",
        },
        {
            title: "Minecraft",
            subDesc: "2015 · Leadership, Java",
            image: "static/assets/experience-icons/jordanhill.png",
            link: "/JordanhillSchool",
        },
        {
            title: "Unlisted Projects",
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