<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
</script>

<ContentPage
    title="Jordanhill School"
    desc="School Captain • Academic Honours • Computer Science"
    links={[{ url: 'https://www.jordanhill.glasgow.sch.uk/', title: 'jordanhill.glasgow.sch.uk' }]}
    textSplit
    content={[
        {
            desc: 'I was at Jordanhill from 2009 to 2022, leaving with academic honours. The later years were as much about leading, teaching, and building things as they were about the coursework.',
            split: false,
        },
        {
            title: 'My involvement',
            desc: [
                'In my final year I was elected School Captain and Prefect by the student body, staff, and administration. The role meant running events, speaking to large groups, and getting involved in how the school actually operated.',
                'As Charity Committee Lead I coordinated fundraising for Refuweegee, raising over £10,000 — recognised with the Schools Leadership Prize and a SCQF qualification in Leadership.',
            ],
        },
        {
            title: 'Teaching Assistant',
            desc: 'I supported National 5 Computer Science students with practical programming in JavaScript and Python. That was the start of teaching for me — it led to tutoring through university, and later to teaching in the US and around Asia.',
        },
        {
            title: 'Final Project',
            desc: "Buchanan Barbers was my Advanced Higher Computer Science project: a haircut booking website. The idea came from learning to cut hair during the 2020 pandemic — a skill I've taken around the world. The project was about making a booking system that was actually usable.",
        },
    ]}
/>
