<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
</script>

<ContentPage
    title="Camp Lindenmere"
    desc="Teaching • Counsellor • Spirit Leader"
    links={[{ url: 'https://camplindenmere.com/', title: 'Visit Website' }]}
    content={[
        {
            desc: 'During the summer between my second and third year at University, I had the unforgettable opportunity to work at a Summer Camp in Pennsylvania for three months. It was an incredible experience, working alongside some truly amazing people.',
        },
        {
            title: 'Computer Science Instructor',
            desc: 'My primary role was as a Computer Science Instructor, where I had the chance to teach groups of children, aged 10 to 17, the foundations of programming.',
        },
        {
            title: 'Counsellor',
            desc: 'In addition to my teaching role, I also served as a Counsellor, responsible for the day-to-day well-being of the children in my group.',
        },
        {
            title: 'Spirit Leader',
            desc: 'Towards the end of the summer, I was honoured to be voted Spirit Leader by the camp directors and division leaders. This was a recognition of my contributions throughout the season, where I helped lead various activities and events, actively fostering enthusiasm and teamwork across the community.',
        },
    ]}
/>
