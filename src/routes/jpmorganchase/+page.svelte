<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
</script>

<ContentPage
    title="JPMorgan Chase & Co."
    desc="Software Engineer • Full-Stack • Global Research"
    links={[{ url: 'https://www.jpmorganchase.com/', title: 'Visit Website' }]}
    textSplit
    content={[
        {
            desc: [
                'I’m a full-stack engineer working on infrastructure for platforms within Global Research. Given the sensitive nature of the work, I’ll keep the detail here high-level.',
                'My work spans three areas: building tools that get market data to research and trading teams in a usable form, strengthening access control and auditing around that data, and building internal tooling to remove manual work from day-to-day processes.',
            ],
            split: false,
        },
    ]}
/>