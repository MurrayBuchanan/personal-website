<script lang="ts">
    import Divider from '$lib/components/ui/Divider.svelte';
    import type { ExperienceCategory, ExperienceEntry } from '$lib/types';
    import ListItem from './ListItem.svelte';

    export let sectionOrder: ExperienceCategory[] = [];
    export let sectionLabels: Record<ExperienceCategory, string> = {
        work: 'Work',
        education: 'Education',
        projects: 'Projects',
        community: 'Community',
    };
    export let items: ExperienceEntry[] = [];
</script>

<div class="animate flex flex-col">
    {#each sectionOrder as category, sectionIndex (category)}
        {@const rows = items.filter((item) => item.category === category)}
        {#if rows.length > 0}
            {#if sectionIndex > 0}
                <Divider spacing="section" columns />
            {/if}

            <section class="flex flex-col" aria-labelledby="section-{category}">
                <p
                    id="section-{category}"
                    class="type-section animate px-0 pb-3 {sectionIndex === 0
                        ? 'pt-0'
                        : 'pt-4 sm:pt-5'}"
                >
                    {sectionLabels[category]}
                </p>

                <ul class="flex flex-col gap-4 sm:gap-5">
                    {#each rows as entry (entry.company)}
                        <li class="animate min-w-0 list-none">
                            <ListItem
                                role={entry.role}
                                company={entry.company}
                                location={entry.location}
                                locationLinks={entry.locationLinks ?? []}
                                date={entry.date}
                                badges={entry.badges ?? []}
                                url={entry.url ?? ''}
                                externalUrl={entry.externalUrl ?? ''}
                                subdued={entry.subdued === true}
                                positions={entry.positions ?? []}
                            />
                        </li>
                    {/each}
                </ul>
            </section>
        {/if}
    {/each}
</div>
