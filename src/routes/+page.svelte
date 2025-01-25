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
            subDesc: "Now · Fintech, Analyst",
            image: "assets/experience-icons/JPMorganChaseCo.png",
            link: "/JPMorganChaseCo",
            favourite: true,
        },
        {
            title: "Little Cheese",
            subDesc: "25 · Data Processing, Open Framework",
            image: "assets/experience-icons/LittleCheese.png",
            link: "/LittleCheese",
            favourite: true,
        },
        {
            title: "Camp Lindenmere",
            subDesc: "24 · Academia, Teaching",
            image: "assets/experience-icons/CampLindenmere.png",
            link: "/CampLindenmere",
            favourite: true,
        },
        {
            title: "The Good Calendar",
            subDesc: "24 · Productivity, Cross-platform",
            image: "assets/experience-icons/TheGoodCalendar.png",
            link: "/TheGoodCalendar",
        },
        {
            title: "Google Developer Group",
            subDesc: "23 · Community Engadgement, Presenting",
            image: "../assets/experience-icons/GoogleDeveloperGroup.png",
            link: "/GoogleDeveloperGroup",
        },
        {
            title: "University of Strathclyde",
            desc: "MEng, Computer Science",
            subDesc: "22 · Education, Computer Science",
            image: "assets/experience-icons/UniversityOfStrathclyde.png",
            link: "/UniversityOfStrathclyde",
            favourite: true,
        },
        {
            title: "Direct Distribution",
            subDesc: "22 · Marketing, Distribution",
            image: "assets/experience-icons/DirectDistribution.png",
            link: "/DirectDistribution",
        },
        {
            title: "Chibb",
            subDesc: "21 · Game Design, iOS Dev",
            image: "assets/experience-icons/Chibb.png",
            link: "/Chibb",
            favourite: true,
        },
        {
            title: "Buchanan Barbers",
            subDesc: "2020 · Hobby, Web Dev",
            image: "assets/banners/BuchananBarbers.png",
            link: "/BuchananBarbers",
        },
        {
            title: "Minecraft Plugins",
            subDesc: "2015 · Community Building, Hosting",
            image: "assets/experience-icons/MinecraftPlugins.png",
            link: "/MinecraftPlugins",
        }
    ];

    $: favourites = projects.filter(project => project.favourite);

    function toggleShowAll() {
        showAll = !showAll;
        setTimeout(() => {
            const elements = document.body.querySelectorAll('.project');
            elements.forEach(element => {
                useAnimate(element as HTMLElement, 0.1);
            });
        }, 0);
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
                { url: "/Contact", newPage: false, title: "Contact" }
            ]}>
        </SectionHeading>

        <div class="body">
            <!-- Animate items and include transition -->
            {#each (showAll ? projects : favourites) as { title, subDesc, image, link } (title)}
                <div class="project" transition:slide|fade>
                    <SectionSubheading {title} {subDesc} {image} {link} />
                </div>
            {/each}

            <button on:click={toggleShowAll} class="transition-transform duration-150 hover:scale-105 ease-out inline-flex items-center px-4 py-1 my-4 text-sm font-medium rounded-lg border bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black cursor-pointer">
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </div>
        
        <Footer />
    </Container>
</body>