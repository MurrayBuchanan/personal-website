<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Media from '../components/section-media.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Paragraph from '../components/section-text.svelte';
    import Footer from '../components/footer.svelte';
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
            images={["/assets/banners/jpmorganchase.jpg"]}
        />

        <Paragraph 
            title="My Journey" 
            desc="I first joined JPMC through the Spring into Tech Insight Program - a week-long experience featuring networking events, technical workshops, presentations, and a hackathon, where my team took first place. The following year, I was invited back as a Software Engineering Intern within Research, contributing to a Cloud-focused team." 
        />
        
        
        <Footer />
    </Container>
</body>