<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
</script>

<ContentPage
    title="University of Strathclyde"
    desc="BSc (Hons) Computer Science • First-Class"
    links={[{ url: 'https://www.strath.ac.uk/', title: 'Visit Website' }]}
    textSplit
    content={[
        {
            desc: 'I graduated in 2026 with First-Class Honours in Computer Science. The four years were as much about the people and what I got involved in as they were about the work.',
            split: false,
        },
        {
            title: 'My involvement',
            desc: [
                'In my final year I served as class rep for Computer Science, acting as a link between students and staff to raise feedback and support departmental decisions.',
                'I was involved with the Google Developer Group throughout: Treasurer in my second year, then Competition Lead in my third and fourth — running events and encouraging students to take part in inter-university competitions.',
                'I was an active member of the Snow Sports, Volleyball, and Badminton societies, and tried to get involved in as many other sports as I could. Staying active and meeting people through those was a big part of the four years.',
            ],
        },
        {
            title: 'Teaching Assistant',
            desc: [
                'In my final year I worked with Dr Gennaro Imperatore as a Teaching Assistant on User and Data Modelling. The second-year class is about modelling users and the data that supports them — requirements, interface design, accessibility, and databases.',
                "I completed Strathclyde's Postgraduate Research Introduction to Teaching before taking the role, then spent the semester supporting the class alongside him.",
            ],
        },
        {
            title: 'Final Project',
            desc: 'This was my dissertation, supervised by Dr Kieren Egan and awarded a distinction. The question was how to use speech as a signal in dementia rehabilitation: not to diagnose, but to notice linguistic change over time and make that change visible to the people supporting someone living with dementia.',
            links: [
                {
                    url: '/dementia-linguistic-anomaly-detection',
                    title: 'View project',
                },
            ],
        },
    ]}
/>
