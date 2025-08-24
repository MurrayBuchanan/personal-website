<script lang="ts">
    import { useAnimate } from './animation/animation';
    import Container from '../lib/components/layout/Container.svelte';
    import Heading from '../lib/components/sections/Heading.svelte';
    import Project from '../lib/components/sections/ListItem.svelte';
    import Footer from '../lib/components/layout/Footer.svelte';
    import { slide, fade } from 'svelte/transition';

    let showAll = false;

    let projects = [
        {
            title: "J.P. Morgan Chase",
            subDesc: "2024-Now · Software Engineer, Full-Stack, Global Research",
            icon: "assets/icons/JPMorganChase.svg",
            url: "/jpmorganchase",
            favourite: true,
        },
        {
            title: "Set Piece",
            subDesc: "2024-2025 · Team Training, App Dev, Data Analysis",
            icon: "assets/icons/SetPiece.svg",
            url: "/setpiece",
            favourite: true,
        },
        {
            title: "Camp Lindenmere",
            subDesc: "2024 · Teaching, Counsellor, Spirit Leader",
            icon: "assets/icons/CampLindenmere.svg",
            url: "/camp-lindenmere",
            favourite: true,
        },
        {
            title: "University of Strathclyde",
            subDesc: "2022-Now · Education, Undergraduate, Computer Science",
            icon: "assets/icons/UniversityOfStrathclyde.svg",
            url: "/university-of-strathclyde",
            favourite: true,
        },
        {
            title: "Direct Distribution",
            subDesc: "2022-2024 · Events, Marketing, Distribution",
            icon: "assets/icons/DirectDistribution.svg",
            url: "/direct-distribution",
        },
        {
            title: "Chibb",
            subDesc: "2021-2023 · Game Design, Procedural Generation, iOS Dev",
            icon: "assets/icons/Chibb.svg",
            url: "/chibb",
            favourite: true,
        },
        {
            title: "Minecraft",
            subDesc: "2017-2019 · Community Building, Server Hosting, Plugin Dev",
            icon: "assets/icons/Minecraft.svg",
            url: "/minecraft",
        },
        {
            title: "Jordanhill School",
            subDesc: "2009-2022 · Education, Computer Science, Volunteering",
            icon: "assets/icons/JordanhillSchool.svg",
            url: "/jordanhill-school",
        },
        {
            title: "Honourable Mentions",
            subDesc: "Additional archived or scrapped projects",
            icon: "assets/icons/HonourableMentions.svg",
            url: "/honourable-mentions",
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

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Murray Buchanan"
            desc="Developer"
            links={[
                { url: "/about", newPage: false, title: "About" },
                { url: "mailto:hello@murrayb.com", newPage: false, title: "Connect" }
            ]}
            newPage={false}
        />

        
            {#each (showAll ? projects : favourites) as { title, subDesc, icon, url } (title)}
            
                <div class="project" transition:slide|fade={{ duration: 300 }}>
                    <div class="animate">
                        <Project {title} {subDesc} {icon} {url} />
                    </div>
                </div>
            {/each}

            <div class="flex justify-center">
                <button on:click={toggleShowAll} class="animate px-4 py-1 my-4 inline-flex items-center justify-center bg-primary-light dark:bg-primary-dark rounded-lg text-sm font-normal text-tertiary-light hover:text-secondary-light dark:text-tertiary-dark hover:dark:text-secondary-dark transition-all duration-150 hover:scale-105 ease-out cursor-pointer">
                    <svg 
                        class="w-4 h-4 transition-transform duration-300 {showAll ? 'rotate-180' : 'rotate-0'}" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
        
        
        <Footer />
    </Container>
</body>