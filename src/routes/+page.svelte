<script lang="ts">
    import { onMount } from 'svelte';
    import { useAnimate } from './animation/animation';
    import Container from './components/container.svelte';
    import SectionHeading from './components/section-heading.svelte';
    import SectionSubheading from './components/section-subheading.svelte';
    import Footer from './components/footer.svelte';

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

    $: favourites = projects.filter(project => project.favourite);

    function toggleShowAll() {
    showAll = !showAll;
    // Reapply animation when showAll changes
    setTimeout(() => {
        const elements = document.body.querySelectorAll('.mx10');
        elements.forEach(element => {
            useAnimate(element as HTMLElement, 0.1);
        });
    }, 0); // Delay to ensure DOM updates
}

</script>

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

        <!-- All Animate should be reanimated when button is clicked -->
        <div class="body">
            {#each (showAll ? projects : favourites) as { title, subDesc, image, link }}
                <SectionSubheading {title} {subDesc} {image} {link} />
            {/each}
    

            <button on:click={toggleShowAll} class="animate inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mr-4" target="_blank">
            {showAll ? 'Show Less' : 'Show More'}
            <svg
            class="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
            </svg>
            </button>
        </div>
        
 
        <Footer />
    </Container>
</body>