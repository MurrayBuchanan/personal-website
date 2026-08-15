<script lang="ts">
    import {
        experienceEntries,
        experienceSectionLabels,
        experienceSectionOrder,
    } from '$lib/data/experience';
    import PageLayout from '$lib/components/layout/PageLayout.svelte';
    import Heading from '$lib/components/sections/Heading.svelte';
    import ExperienceList from '$lib/components/sections/ExperienceList.svelte';
    import Divider from '$lib/components/ui/Divider.svelte';
</script>

<PageLayout extraScrollPadding>
    <Heading
        title="Murray Buchanan"
        desc="Software Engineer"
        intro="I build full-stack products across research, apps, and community platforms."
    />

    <Divider />

    <div class="flex min-w-0 flex-1 flex-col">
        <ExperienceList
            sectionOrder={experienceSectionOrder}
            sectionLabels={experienceSectionLabels}
            items={experienceEntries}
        />
    </div>
</PageLayout>
