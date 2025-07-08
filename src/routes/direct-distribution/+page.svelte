<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Heading from '../components/section-heading.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="Direct Distribution"
            desc="2022-2024 · Events, Marketing, Distribution"
            newPage={true}
            links={[
                { url: "https://www.directdistribution.co.uk/", title: "Visit Website" }
            ]}
        />

        <Paragraphs paragraphs={[
            "Direct Distribution is a logistics and marketing support company based in Scotland that provides distribution and event support services. The company specialises in print distribution and event logistics for clients across Scotland, particularly in the culture, tourism, leisure, and communication sectors.",
            "At Direct Distribution, I actively supported a range of operations and live events across Scotland. This involved managing print distribution, logistics, and ensuring efficient stock flow. I also played a role in large-scale warehouse activities and provided technical and logistical support for diverse events and marketing efforts throughout the country, including both major events like the UCI Championship, World Pipe Band Championships, and city events like, Mela and Charity Runs, applying technical skills and collaborating effectively across varied and fast-paced settings."]}/>
        <Footer />
    </Container>

</body>