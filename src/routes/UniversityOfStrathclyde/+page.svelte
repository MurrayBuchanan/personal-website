<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="mx10 bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading
        title="University of Strathclyde"
        desc="2022-Now · Education, MEng, Computer Science"
        newPage={true}
        />
        <!-- I study Computer Science at the University of Strathclyde, where I actively engage in both academic and extracurricular activities. Alongside my studies, I work as a maths and computer science tutor. I am also an active member of various clubs and societies, most notably contributing to the Google Developer Group, as well as participating in the Badminton and Snowsports societies.

        Modules Taken:
        
        Year 3: Building Software Systems, Foundations of Artificial Intelligence, Web Application Development, Computer Systems and Concurrency, Functional Programming, Mobile App Development.
        Year 2: Advanced Programming, Logic and Algorithms, User and Data Modelling, Computer Systems and Architecture, Agile Software Development in Practice.
        Year 1: Internet of Things, Machines, Languages and Computation, Information and Information Systems, Programming Foundations, Computer Systems and Organisation, Introduction to Astronomy.
        
        Projects: -->
        <SectionPara paragraphs={["Content coming soon!"]}/>
        <Footer />
    </Container>

</body>