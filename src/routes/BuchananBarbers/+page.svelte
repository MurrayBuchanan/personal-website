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
        title="Buchanan Barbers"
        desc="2020-Now · Hairstyling, Web Dev"
        newPage={true}
        links={[{ url: "/Booking", newPage: false, title: "Reservations" }]
        }
    
        />

        <SectionPara paragraphs={["Buchanan Barbers started during the pandemic in 2020 when I taught myself to cut hair. Since then, I’ve been hairdressing regularly and even had the chance to cut hair in countries all over the world. For my Advanced Higher Computer Science project, I built a booking site—combining what I thought was just a silly hobby with tech. It’s all about keeping things simple, meeting people, and helping others feel better. :)"]}/>

        <SectionPara paragraphs={["Booking functionality coming soon!"]}/>
        <Footer />
    </Container>

</body>