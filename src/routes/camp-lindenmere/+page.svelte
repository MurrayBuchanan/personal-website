<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Heading from '../components/section-heading.svelte';
    import Paragraph from '../components/section-text.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Camp Lindenmere"
            desc="2024 · Academia, Teaching, Counsellor"
            links={[
                { url: "https://camplindenmere.com/", title: "Visit Website" }
            ]}
        />
        <!-- Make a link to content, up to advanced higher computer science content -->
        
        <Paragraphs paragraphs={["During the summer between my second and third year at University, I had the unforgettable opportunity to work at a Summer Camp in Pennsylvania for three months. It was an incredible experience, working alongside some truly amazing people."]}/>
        <Paragraph title="Computer Science Instructor" desc="My primary role was as a Computer Science Instructor, where I had the chance to teach groups of children, aged 10 to 17, the foundations of programming."/>
        <Paragraph title="Counsellor" desc="In addition to instructing, I also served as a Counsellor, responsible for the day-to-day well-being of the children in my group."/>
        <Paragraph title="Spirit Leader" desc="Towards the end of the summer, I was honoured to be voted Spirit Leader by the camp directors and division leaders. This was a recognition of my contributions throughout the season, where I helped lead various activities and events, actively fostering enthusiasm and teamwork across the community."/>

        <Footer />
    </Container>
</body>