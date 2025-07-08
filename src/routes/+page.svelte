<script lang="ts">
    import { useAnimate } from './animation/animation';
    import Container from './components/container.svelte';
    import Heading from './components/section-heading.svelte';
    import Project from './components/section-subheading.svelte';
    import Footer from './components/footer.svelte';
    import { slide, fade } from 'svelte/transition';

    let showAll = false;

    let projects = [
        {
            title: "JPMorganChase",
            subDesc: "2024-Now · Fintech, Insight, Summer Analyst",
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
            subDesc: "2024 · Academia, Teaching, Counsellor",
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

<body class="mx10 bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Murray Buchanan"
            desc="Developer"
            links={[
                { url: "/about", newPage: false, title: "About" },
                { url: "mailto:hello@murrayb.com", newPage: false, title: "Contact" }
            ]}
        />

        <div class="body">
            {#each (showAll ? projects : favourites) as { title, subDesc, icon, url } (title)}
            
                <div class="project" transition:slide|fade={{ duration: 300 }}>
                    <div class="animate">
                        <Project {title} {subDesc} {icon} {url} />
                    </div>
                </div>
            {/each}

            <button on:click={toggleShowAll} class="animate px-4 py-1 my-4 inline-flex items-center bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light rounded-lg text-sm font-normal text-secondary-light hover:text-secondary-dark dark:text-secondary-dark hover:dark:text-secondary-light border border-tertiary-light hover:border-tertiary-dark dark:border-tertiary-dark hover:dark:border-tertiary-light transition-transform duration-150 hover:scale-105 ease-out cursor-pointer">
                {showAll ? 'View Less' : 'View More'}
            </button>
        </div>
        
        <Footer />
    </Container>
</body>