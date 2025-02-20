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
            subDesc: "2024-Now · Fintech, Insight, Summer Analyst",
            icon: "assets/icons/JPMorganChaseCo.svg",
            url: "/JPMorganChaseCo",
            favourite: true,
        },
        {
            title: "Little Cheese",
            subDesc: "2025 · Data Processing, Open Framework",
            icon: "assets/icons/LittleCheese.svg",
            url: "/LittleCheese",
            favourite: true,
        },
        {
            title: "Camp Lindenmere",
            subDesc: "2024 · Academia, Teaching, Counsellor",
            icon: "assets/icons/CampLindenmere.svg",
            url: "/CampLindenmere",
            favourite: true,
        },
        {
            title: "Conquer",
            subDesc: "2023-2025 · Productivity, Cross-platform",
            icon: "assets/icons/Conquer.svg",
            url: "/Conquer",
        },
        {
            title: "University of Strathclyde",
            desc: "MEng, Computer Science",
            subDesc: "2022-Now · Education, MEng, Computer Science",
            icon: "assets/icons/UniversityOfStrathclyde.svg",
            url: "/UniversityOfStrathclyde",
            favourite: true,
        },
        {
            title: "Direct Distribution",
            subDesc: "2022-2024 · Events, Marketing, Distribution",
            icon: "assets/icons/DirectDistribution.svg",
            url: "/DirectDistribution",
        },
        {
            title: "Chibb",
            subDesc: "2021-2023 · Game Design, Procedural Generation, iOS Dev",
            icon: "assets/icons/Chibb.svg",
            url: "/Chibb",
            favourite: true,
        },
        {
            title: "Buchanan Barbers",
            subDesc: "2020-Now · Hairstyling, Web Dev",
            icon: "assets/icons/BuchananBarbers.svg",
            url: "/BuchananBarbers",
        },
        {
            title: "Minecraft",
            subDesc: "2015-2017 · Community Building, Server Hosting, Plugin Dev",
            icon: "assets/icons/Minecraft.svg",
            url: "/Minecraft",
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
        margin-bottom: 1rem;
    }
</style>

<body class="mx10 bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
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
            {#each (showAll ? projects : favourites) as { title, subDesc, icon, url } (title)}
            
                <div class="project" transition:slide|fade>
                    <div class="animate">
                    <SectionSubheading {title} {subDesc} {icon} {url} />
                </div>
                </div>
            {/each}

            <button on:click={toggleShowAll} class="px-4 py-1 my-4 inline-flex items-center bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light rounded-lg text-sm font-normal text-secondary-light hover:text-secondary-dark dark:text-secondary-dark hover:dark:text-secondary-light border border-tertiary-light hover:border-tertiary-dark dark:border-tertiary-dark hover:dark:border-tertiary-light transition-transform duration-150 hover:scale-105 ease-out cursor-pointer">
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </div>
        
        <Footer />
    </Container>
</body>