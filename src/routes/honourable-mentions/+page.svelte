<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
    import ListItem from '$lib/components/sections/ListItem.svelte';
    import Divider from '$lib/components/ui/Divider.svelte';

    const mentions = [
        {
            company: 'This Website',
            date: '2018-Present',
            desc: "I've spent far too long building this site — it's a personal playground and portfolio. SvelteKit and TypeScript, deployed on Cloudflare, with Tailwind and GitHub for CI/CD.",
        },
        {
            company: 'The Conquer Collective',
            date: '2022-2024',
            desc: 'Started with my flatmates on High Street in Glasgow as a way to get clothing we actually liked. Later a friend and I kept developing it, seeing how profitable we could make it with limited resources.',
        },
        {
            company: 'The Tale of Two',
            date: '2023',
            desc: 'A two-player shooter we built to learn 3D game development. Players joined a procedurally generated map for egg-shooting combat. We had a much bigger game in mind, then scaled it back and scrapped it to focus on other things.',
        },
        {
            company: 'Task Manager',
            date: '2024',
            desc: 'A Flutter to-do list built into a calendar, started as an experiment in a new art style. It ended up more complete than planned, including various APIs. That art style later went into Set Piece.',
        },
        {
            company: 'Drone Controller',
            date: '2024',
            desc: 'An experiment to let an iOS device control a Raspberry Pi — exploring the Pi and getting better at Swift. Scrapped.',
        },
        {
            company: 'Dringo',
            date: 'Coming 2028',
            desc: 'In the queue.',
        },
    ];
</script>

<ContentPage
    title="Honourable Mentions"
    desc="Archived • Scrapped • In queue"
    intro="A handful of things that didn't get their own page: experiments, scrapped builds, and one still in the queue."
    extraScrollPadding
>
    <Divider />

    <div class="flex min-w-0 flex-1 flex-col">
        <ul class="flex flex-col gap-4 sm:gap-5">
            {#each mentions as entry (entry.company)}
                <li class="animate min-w-0 list-none">
                    <ListItem
                        company={entry.company}
                        date={entry.date}
                        desc={entry.desc}
                    />
                </li>
            {/each}
        </ul>
    </div>
</ContentPage>
