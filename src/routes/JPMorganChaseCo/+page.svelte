<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from './../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from './../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading
        title="JPMorgan Chase & Co"
        desc="2024-Now · Fintech, Insight, Summer Analyst"
        newPage={true}
        links={[
            { url: "https://www.jpmorganchase.com/", title: "Visit Website" }
        ]}
        />

        <!-- <SectionPara paragraphs={["I was part of the 2024 Spring into Tech class, where we were guests at the brand-new Tech Center, which is where I met some incredible people and got a real insight into J.P. Morgan by listening to some amazing speakers and attending various workshops and presentations. "]}/> -->

        <SectionMedia
            images={["/assets/banners/JPMorganChase.jpg"]}
            title="Group photo of our Tech Cohort"

        />
        <div class="grid grid-cols-2 gap-8">
            <SectionMedia 
                title="Insight Program" 
                desc="My first experience at JPMorgan Chase was a week long program that includes networking events, workshops, and presentations from current employees." 
            />
            
            <SectionMedia
                title="Summer Analyst"
                desc="I was invited back to JPMorgan Chase for a 10-week internship as a Summer Analyst, where I will work on various projects and gained experience in the Fintech industry."
            />
        </div>
        
        
       
        
        <Footer />
    </Container>

</body>