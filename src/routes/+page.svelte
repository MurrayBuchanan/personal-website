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
            icon: "assets/experience-icons/JPMorganChaseCo.png",
            url: "/JPMorganChaseCo",
            banner: "assets/banners/banner.jpg",
            favourite: true,
        },
        {
            title: "Little Cheese",
            subDesc: "25 · Data Processing, Open Framework",
            icon: "assets/experience-icons/LittleCheese.png",
            url: "/LittleCheese",
            favourite: true,
        },
        {
            title: "Camp Lindenmere",
            subDesc: "24 · Academia, Teaching",
            icon: "assets/experience-icons/CampLindenmere.png",
            url: "/CampLindenmere",
            favourite: true,
        },
        {
            title: "The Good Calendar",
            subDesc: "24 · Productivity, Cross-platform",
            icon: "assets/experience-icons/TheGoodCalendar.png",
            url: "/TheGoodCalendar",
        },
        {
            title: "Google Developer Group",
            subDesc: "23 · Community Engadgement, Presenting",
            icon: "../assets/experience-icons/GoogleDeveloperGroup.png",
            url: "/GoogleDeveloperGroup",
        },
        {
            title: "University of Strathclyde",
            desc: "MEng, Computer Science",
            subDesc: "22 · Education, Computer Science",
            icon: "assets/experience-icons/UniversityOfStrathclyde.png",
            url: "/UniversityOfStrathclyde",
            favourite: true,
        },
        {
            title: "Direct Distribution",
            subDesc: "22 · Marketing, Distribution",
            icon: "assets/experience-icons/DirectDistribution.png",
            url: "/DirectDistribution",
        },
        {
            title: "Chibb",
            subDesc: "21 · Game Design, iOS Dev",
            icon: "assets/experience-icons/Chibb.png",
            url: "/Chibb",
            favourite: true,
        },
        {
            title: "Buchanan Barbers",
            subDesc: "2020 · Hobby, Web Dev",
            icon: "assets/banners/BuchananBarbers.png",
            url: "/BuchananBarbers",
        },
        {
            title: "Minecraft Plugins",
            subDesc: "2015 · Community Building, Hosting",
            icon: "assets/experience-icons/MinecraftPlugins.png",
            url: "/MinecraftPlugins",
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
            {#each (showAll ? projects : favourites) as { title, subDesc, icon, banner, url } (title)}
            
                <div class="project" transition:slide|fade>
                    <div class="animate">
                    <SectionSubheading {title} {subDesc} {banner} {icon} {url} />
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