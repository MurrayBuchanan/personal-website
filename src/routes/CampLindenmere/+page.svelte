<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import SectionText from '../components/section-text.svelte';
    import SectionMedia from '../components/section-media.svelte';
    import SectionPara from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading
        title="Camp Lindenmere"
        desc="2024 · Academia, Teaching, Counsellor"
        links={[
            { url: "https://camplindenmere.com/", title: "Visit Website" }
        ]}
        />
        <!-- Make a link to content, cover up to advanced higher computer science -->
        
        <SectionPara paragraphs={[
            "During the summer between my second and third year at University, I was invited to teach at a Summer Camp in Penneslavania. This was an unforgettable experience, where I got to stay for 3 months and work alongside some of the most incredible people."
            ]}/>

        <SectionMedia
            images={["/assets/banners/CampLindenmere.jpg"]}
            title="Computer Science Instructor"
            desc="My role was a as a Computer Science Instructor where I taught groups of children between the ages of 10 and 17 the foundations of programming."
        />

        <div class="grid grid-cols-2 gap-8">
            <SectionMedia 
                title="Councellor" 
                desc="I was also a counsellor, where I was responsible for the well-being of the children in my group." 
            />
            
            <SectionMedia
                title="Spirit Leader"
                desc="I was voted Spirit Leader by the camp directors and division leaders in recognition of my contributions throughout the summer. I led various activities and events, fostering enthusiasm and teamwork across the camp."
            />
        </div>
    
    <Footer />
    </Container>

</body>