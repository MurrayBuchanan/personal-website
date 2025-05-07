<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from './../components/container.svelte';
    import Media from '../components/section-media.svelte';
    import Footer from './../components/footer.svelte';
    import Heading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="JPMorganChase"
            desc="2024-Now · Fintech, Insight, Summer Analyst"
            newPage={true}
            links={[
                { url: "https://www.jpmorganchase.com/", title: "Visit Website" }
            ]}
        />

        <Media
            images={["/assets/banners/JPMorganChase.jpg"]}


        />
        <div class="grid grid-cols-2 gap-8">
            <Media 
                title="Insight Program" 
                desc="My first experience at JPMorgan Chase was a week long program that includes networking events, workshops, and presentations from current employees." 
            />
            
            <Media
                title="Summer Analyst"
                desc="I am happy to announce I have been invited back to JPMorganChase for a 10-week internship as a Summer Analyst, where I will work on various projects and gained experience in the Fintech industry."
            />
        </div>
        
        <Footer />
    </Container>
</body>