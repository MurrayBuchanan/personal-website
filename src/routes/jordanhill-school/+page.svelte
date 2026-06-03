<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
</script>

<ContentPage
    title="Jordanhill School"
    desc="Education • Computer Science • Volunteering"
    links={[{ url: 'https://www.jordanhill.glasgow.sch.uk/', title: 'Visit Website' }]}
    content={[
        {
            title: 'School Captain, Prefect and Charity Committee Lead',
            desc: 'Elected by the student body, staff, and administration in my final year, these significant leadership roles involved leading key initiatives, successfully hosting events, and developing public speaking skills through frequent presentations to large groups. As Charity Committee Lead, I led fundraising efforts that raised over £10,000 for ‘Refuweegee’. My contributions were recognised with the Schools Leadership Award.',
        },
        {
            title: 'Computer Science Teaching Assistant',
            desc: 'Supported National 5 Computer Science students, providing practical programming assistance in JavaScript and Python. This foundational teaching experience directly led to subsequent tutoring roles throughout university and a Computer Science teaching position in Pennsylvania, US.',
        },
        {
            title: 'Buchanan Barbers',
            desc: "Developed as my Advanced Higher Computer Science project, 'Buchanan Barbers' is a haircut booking website. The concept was born from learning to cut hair during the 2020 pandemic, a skill I've taken around the world. The project focused on creating a practical and efficient online booking system.",
        },
    ]}
/>
