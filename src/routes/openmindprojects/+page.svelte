<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
    import volunteerPoster from './omp_volunteer_poster.jpg?url';
</script>

<ContentPage
    title="OpenmindProjects Foundation"
    desc="Board of Advisors • Technology • Education"
    links={[
        { url: 'https://openmindprojects.org/', title: 'openmindprojects.org' },
        { url: 'https://openskills.dev/', title: 'openskills.dev' },
    ]}
    textSplit
    content={[
        {
            desc: 'The OpenmindProjects Foundation trains disadvantaged young people in English, technology, and job skills, connecting international volunteers with local students. Based in Nong Khai, that meant looking at programmes for local students and the volunteers who work alongside them, and at how technology supports teaching and operations. The aim is programmes that work for the people they’re meant to serve, not ones that look good on paper.',
            split: false,
            video: 'https://www.youtube.com/watch?v=8rw7RpxMILE',
            videoPoster: volunteerPoster,
            videoTitle: 'The Openmind Projects Story',
            videoCaption: 'Our Story · 2015',
        },
        {
            title: 'What did I do?',
            desc: [
                'I started building courses and lessons for the foundation during university, then spent time around Southeast Asia working directly with students, including those with disabilities and young people in juvenile detention.',
                'Alongside that, I helped the founders build out the organisation: rebuilt the website, built a volunteer and project management system, and worked on OpenSkills.',
                'I now sit on the Board of Advisors, helping steer technology, education, and growth.',
            ],
        },
        {
            title: 'How you can get involved',
            desc: 'Many volunteering roles can end up damaging local communities as free labour can put local people out of work. OMP focuses on those with little other support: children and adults with disabilities, monks without access to formal education, and young people in the juvenile justice system.',
            links: [
                { url: 'https://openmindprojects.org/volunteer-application-form/', title: 'Apply' },
                { url: 'https://openmindprojects.org/restart/', title: 'Donate' },
            ],
        },
    ]}
/>