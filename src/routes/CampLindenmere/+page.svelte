<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-secondary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading
        title="Camp Lindenmere"
        desc="2024 · Academia, Teaching, Java, React, UI, UX"
        links={[
            { url: "https://example.com", title: "Visit Website" },
            { url: "https://another.com", title: "Materials" }
        ]}
        />

        <SectionPara paragraphs={["During my time at University, I was invited to teach at a Summer Camp in Penneslavania. This was an unforgettable experience, where I got to stay for 3 months and work alongside like-minded individuals.", "In this role, I was able to do a lot of reading, where I spend approximately 250 hours reading about Rust and work with different statically typed languages."]}/>


        <SectionText
            title="Initial Program"
            desc="Keep your head still and take a photo of your eyes from below, now from above. That's the premise."
        />

        <SectionText 
            title="Updated Course"
            desc="Using head and phone position, we can transform these image matrices - better (more) training data."
        />

        <SectionText 
            title="Leadership"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />


        <SectionMedia
            image="static/assets/banners/CampLindenmere.jpg"
            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />


    <div class="grid grid-cols-2 gap-8 pb-32">
    <SectionMedia title="Updated" desc="Without depth sensor, we want to use eye saccades as a form of identification." />
        
                  <SectionMedia
            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />
        <SectionMedia

            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />
        <SectionMedia

            title="Updated"
            desc="Without depth sensor, we want to use eye saccades as a form of identification."
        />
    </div>
    
    <Footer />
    </Container>

</body>