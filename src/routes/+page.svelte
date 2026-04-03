<script lang="ts">
    import { useAnimate } from './animation/animation';
    import Container from '../lib/components/layout/Container.svelte';
    import Heading from '../lib/components/sections/Heading.svelte';
    import Project from '../lib/components/sections/ListItem.svelte';
    import Footer from '../lib/components/layout/Footer.svelte';
    import { tick } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    const listSwapDurationMs = 520;
    const listSwapY = 14;
    const collapseStaggerMs = 70;
    const collapseDurationMs = 360;

    type Category = 'work' | 'education' | 'projects';

    type ExpandedEntry =
        | { kind: 'label'; cat: Category; key: string }
        | { kind: 'row'; project: ProjectEntry; key: string };

    type ProjectEntry = {
        title: string;
        subDesc: string;
        icon: string;
        url: string;
        category: Category;
        featured?: boolean;
        featuredRank?: number;
        /** Softer when browsing full grouped list */
        subdued?: boolean;
    };

    const sectionOrder: Category[] = ['work', 'education', 'projects'];
    const sectionLabels: Record<Category, string> = {
        work: 'Work',
        education: 'Education',
        projects: 'Projects & community',
    };

    let showAll = false;

    let projects: ProjectEntry[] = [
        {
            title: 'J.P. Morgan Chase',
            subDesc: 'Software Engineer • Full-Stack • Global Research',
            icon: 'assets/icons/JPMorganChase.svg',
            url: '/jpmorganchase',
            category: 'work',
            featured: true,
            featuredRank: 0,
        },
        {
            title: 'Set Piece',
            subDesc: 'Team Training • App Dev • Data Analysis',
            icon: 'assets/icons/SetPiece.svg',
            url: '/setpiece',
            category: 'work',
            featured: true,
            featuredRank: 1,
        },
        {
            title: 'Camp Lindenmere',
            subDesc: 'Teaching • Counsellor • Spirit Leader',
            icon: 'assets/icons/CampLindenmere.svg',
            url: '/camp-lindenmere',
            category: 'work',
        },
        {
            title: 'Direct Distribution',
            subDesc: 'Events • Marketing • Distribution',
            icon: 'assets/icons/DirectDistribution.svg',
            url: '/direct-distribution',
            category: 'work',
            subdued: true,
        },
        {
            title: 'University of Strathclyde',
            subDesc: 'Education • Undergraduate • Computer Science',
            icon: 'assets/icons/UniversityOfStrathclyde.svg',
            url: '/university-of-strathclyde',
            category: 'education',
            featured: true,
            featuredRank: 2,
        },
        {
            title: 'Jordanhill School',
            subDesc: 'Education • Computer Science • Volunteering',
            icon: 'assets/icons/JordanhillSchool.svg',
            url: '/jordanhill-school',
            category: 'education',
            subdued: true,
        },
        {
            title: 'Chibb',
            subDesc: 'Game Design • Procedural Generation • iOS Dev',
            icon: 'assets/icons/Chibb.svg',
            url: '/chibb',
            category: 'projects',
        },
        {
            title: 'Minecraft',
            subDesc: 'Community Building • Server Hosting • Plugin Dev',
            icon: 'assets/icons/Minecraft.svg',
            url: '/minecraft',
            category: 'projects',
            subdued: true,
        },
        {
            title: 'Honourable Mentions',
            subDesc: 'Additional archived or scrapped projects',
            icon: 'assets/icons/HonourableMentions.svg',
            url: '/honourable-mentions',
            category: 'projects',
            subdued: true,
        },
    ];

    $: featuredProjects = projects
        .filter((p) => p.featured)
        .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));

    /** Full-list rows in DOM order (for reverse-stagger collapse). */
    $: expandedFlat = ((): ExpandedEntry[] => {
        const out: ExpandedEntry[] = [];
        for (const cat of sectionOrder) {
            const rows = projects.filter((p) => p.category === cat);
            if (!rows.length) continue;
            out.push({ kind: 'label', cat, key: `label-${cat}` });
            for (const project of rows) {
                out.push({ kind: 'row', project, key: `row-${project.title}` });
            }
        }
        return out;
    })();

    $: expandedCount = expandedFlat.length;

    $: reduceMotion =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    /** `quintOut` avoids `backOut`-style overshoot so the block doesn’t sit a few px high then settle. */
    $: listIntroFly = {
        duration: reduceMotion ? 0 : listSwapDurationMs,
        y: reduceMotion ? 0 : listSwapY,
        opacity: 0,
        easing: quintOut,
    };

    $: listOutroFly = {
        duration: reduceMotion ? 0 : listSwapDurationMs,
        y: reduceMotion ? 0 : -listSwapY,
        opacity: 0,
        easing: quintOut,
    };

    $: rowOutFly = (index: number) => ({
        duration: reduceMotion ? 0 : collapseDurationMs,
        delay: reduceMotion ? 0 : (expandedCount - 1 - index) * collapseStaggerMs,
        y: reduceMotion ? 0 : -10,
        opacity: 0,
        easing: quintOut,
    });

    function scrollPageToTop() {
        if (typeof window === 'undefined') return;
        if (reduceMotion) {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    async function toggleProjectList() {
        const wasExpanded = showAll;
        showAll = !showAll;
        if (!wasExpanded) return;
        await tick();
        scrollPageToTop();
    }
</script>

<div
    class="min-h-screen bg-primary-light dark:bg-primary-dark"
    use:useAnimate={{ delayIncrement: 0.1, observeMutations: true }}
>
    <Container custom="!pt-2 sm:!pt-3">
        <Heading
            title="Murray Buchanan"
            desc="Software Engineer"
            intro="I build full-stack products across research, apps, and community platforms."
            graphic="/assets/images/banner.svg"
            graphicAlt=""
            newPage={false}
        />

        <div role="list" class="-mt-1 grid w-full grid-cols-1 overflow-x-clip sm:-mt-0">
            {#if !showAll}
                <div
                    class="col-start-1 row-start-1 z-[1] flex min-w-0 flex-col gap-0.5 self-start justify-self-stretch"
                    in:fly={listIntroFly}
                    out:fly={listOutroFly}
                >
                    <p
                        class="animate mb-1.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400"
                    >
                        Featured
                    </p>
                    {#each featuredProjects as project (project.title)}
                        <div class="animate" role="listitem">
                            <Project
                                title={project.title}
                                subDesc={project.subDesc}
                                icon={project.icon}
                                url={project.url}
                            />
                        </div>
                    {/each}
                </div>
            {:else}
                <div
                    class="col-start-1 row-start-1 z-[1] flex min-w-0 flex-col gap-0.5 self-start justify-self-stretch"
                    in:fly={listIntroFly}
                    out:fly={listOutroFly}
                >
                    {#each expandedFlat as entry, i (entry.key)}
                        <!-- Single root per row so Svelte runs `out:fly` reliably (no nested #if root). -->
                        <div
                            class="min-w-0"
                            role={entry.kind === 'row' ? 'listitem' : undefined}
                            out:fly={rowOutFly(i)}
                        >
                            {#if entry.kind === 'label'}
                                <p
                                    class="animate mb-1.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 {i > 0
                                        ? 'mt-5 sm:mt-6'
                                        : ''}"
                                >
                                    {sectionLabels[entry.cat]}
                                </p>
                            {:else}
                                <div class="animate">
                                    <Project
                                        title={entry.project.title}
                                        subDesc={entry.project.subDesc}
                                        icon={entry.project.icon}
                                        url={entry.project.url}
                                        subdued={entry.project.subdued === true}
                                    />
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <div class="animate mt-3 w-full sm:mt-4">
            <div class="flex flex-col items-center gap-0.5">
                <button
                    type="button"
                    on:click={toggleProjectList}
                    class="font-sans inline-flex cursor-pointer items-center justify-center gap-2 border-0 bg-transparent px-0 py-0.5 text-xs font-normal text-neutral-500 no-underline transition-colors duration-100 ease-out hover:text-neutral-950 sm:text-sm dark:text-neutral-400 dark:hover:text-white"
                    aria-expanded={showAll}
                >
                    <span
                        >{showAll
                            ? 'Show featured only'
                            : 'Browse everything'}</span
                    >
                    <svg
                        class="h-4 w-4 transition-transform duration-200 ease-out {showAll ? 'rotate-180' : 'rotate-0'}"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
        <Footer />
    </Container>
</div>
