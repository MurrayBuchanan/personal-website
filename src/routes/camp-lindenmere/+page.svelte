<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
    import image1 from './image1.jpg';
    import image2 from './image2.jpg';
    import image3 from './image3.jpg';
    import image4 from './image4.jpg';
    import image5 from './image5.jpg';
</script>

<ContentPage
    title="Camp Lindenmere"
    desc="Teaching • Counsellor • Spirit Leader"
    links={[{ url: 'https://camplindenmere.com/', title: 'camplindenmere.com' }]}
    textSplit
    content={[
        {
            desc: 'During the summer between my second and third year at University, I had the unforgettable opportunity to work at a summer camp in Pennsylvania for three months. It was an incredible experience, working alongside some truly amazing people.',
            split: false,
            imagesTitle: 'Camp Lindenmere',
            imagesEmphasis: 2,
            images: [
                {
                    src: image1,
                    alt: 'Camp staff on a cabin sofa, dressed as Inside Out emotions',
                    objectPosition: 'center 45%',
                },
                {
                    src: image2,
                    alt: 'Friends stacking hands together in a car',
                    objectPosition: 'center',
                },
                {
                    src: image3,
                    alt: 'Camp Lindenmere team outdoors in matching staff shirts',
                    objectPosition: 'center 32%',
                },
                {
                    src: image4,
                    alt: 'Making the Lindenmere L with a camper on the baseball field',
                    objectPosition: 'center 28%',
                },
                {
                    src: image5,
                    alt: 'A quiet moment on the cabin stairs at the end of the day',
                    objectPosition: 'center 40%',
                },
            ],
        },
        {
            title: 'What did I do?',
            desc: [
                'My primary role was as a Computer Science Instructor, teaching groups of children aged 10 to 17 the foundations of programming.',
                'I also served as a Counsellor, responsible for the day-to-day well-being of the children in my group.',
                'Towards the end of the summer I was voted Spirit Leader by the camp directors and division leaders. That was a recognition of the season: leading activities and events, and fostering enthusiasm and teamwork across the community.',
            ],
        },
    ]}
/>
