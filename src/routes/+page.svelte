
<script lang="ts">
    import Footer from './components/footer.svelte';
    import { useAnimate } from './animation/animation';
    import Container from './components/container.svelte';
    import SectionSubtitle from './components/section-subtitle.svelte';
    import SectionHeading from './components/section-heading.svelte';

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
            desc: "MEng, Computer Science",
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

<style>
    .animate {
        opacity: 0;
    }
</style>

<body class="mx10 bg-primary-light dark:bg-secondary-dark">

    <div use:useAnimate={0.1}>
    <!-- Main Title Component -->
    <!-- <Title /> -->

    <Container>
    <SectionHeading
        title="Murray Buchanan"
        desc="Here are some of the projects I have worked on over the years.">
    </SectionHeading>


    <!-- Project Titles -->
 
        <!-- <h2 class="animate text-3xl font-semibold text-gray-900 dark:text-white">Experience</h2> -->
    
        {#each timelines as { title, desc, subDesc, image, link}}
            <SectionSubtitle {title} {desc} {subDesc} {image} {link} />
        {/each}

    </Container>

    <!-- Footer Component -->
     <Container>
        <Footer />
    </Container>
</div>
</body>