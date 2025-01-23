<script lang="ts">
    import { onMount } from 'svelte';
    import { useAnimate } from './animation/animation';
    import Container from './components/container.svelte';
    import SectionHeading from './components/section-heading.svelte';
    import SectionSubheading from './components/section-subheading.svelte';
    import Footer from './components/footer.svelte';
    import { slide, fade } from 'svelte/transition';

    let showAll = false;

    let projects = [
        {
            title: "JPMorgan Chase & Co",
            subDesc: "Now · Work, Analyst, Python",
            image: "assets/experience-icons/jpmc.png",
            link: "/JPMorganChaseCo",
            favourite: true,
        },
        {
            title: "Camp Lindenmere",
            subDesc: "2024 · Academia, Teaching, Java, React, UI, UX",
            image: "assets/experience-icons/lindenmere.png",
            link: "/CampLindenmere",
            favourite: true,
        },
        {
            title: "Google Developer Group",
            subDesc: "2023 · Community, Google, Teaching, Competing",
            image: "../assets/experience-icons/google.png",
            link: "/GoogleDeveloperGroup",
        },
        {
            title: "Direct Distribution",
            subDesc: "2022 · Marketing, Distribution, Logistics, IT",
            image: "assets/experience-icons/distribution.png",
            link: "/DirectDistribution",
        },
        {
            title: "University of Strathclyde",
            desc: "MEng, Computer Science",
            subDesc: "2022 · Education, Computer Science, GDG, H&S",
            image: "assets/experience-icons/strathclyde.png",
            link: "/UniversityOfStrathclyde",
        },
        {
            title: "Chibb",
            subDesc: "2020 · Signal processing, ML, UX",
            image: "assets/banners/chibb.png",
            link: "/Chibb",
            favourite: true,
        },
        {
            title: "Minecraft",
            subDesc: "2015 · Leadership, Java",
            image: "assets/experience-icons/jordanhill.png",
            link: "/JordanhillSchool",
            favourite: true,
        }
    ];

    // Reactive statement for favorites
    $: favourites = projects.filter(project => project.favourite);

    function toggleShowAll() {
        showAll = !showAll;
        setTimeout(() => {
            const elements = document.body.querySelectorAll('.project');
            elements.forEach(element => {
                useAnimate(element as HTMLElement, 0.1);
            });
        }, 0); // Delay to ensure DOM updates
    }
</script>

<style>
    .project {
        overflow: hidden;
        margin-bottom: 1rem;
    }
</style>

<body class="mx10 bg-primary-light dark:bg-secondary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading
            title="Murray Buchanan"
            desc="Here are some of the projects I have worked on over the years."
            links={[
                { url: "/About", newPage: false, title: "About" },
                { url: "/Gallery", newPage: false, title: "Gallery" }
            ]}>
        </SectionHeading>

        <div class="body">
            <!-- Animate items and include transition -->
            {#each (showAll ? projects : favourites) as { title, subDesc, image, link } (title)}
                <div class="project" transition:slide|fade>
                    <SectionSubheading {title} {subDesc} {image} {link} />
                </div>
            {/each}
    
            <button on:click={toggleShowAll} class="animate inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mr-4">
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </div>
        
        <Footer />
    </Container>
</body>