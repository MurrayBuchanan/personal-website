<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Text from '../components/section-para.svelte';
    import Input from '../components/input-field.svelte';
    import Footer from '../components/footer.svelte';
    import SectionHeading from '../components/section-heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading title="Contact" />

        <Text paragraphs={["Hey this is some placeholder text to say hello."]}/>
        <Input placeholder="Hello" altPlaceholder="Hello" />


        <!-- <h2>Stay notified</h2>
        <p>100 others are subscribed to my spam emails.</p>
        <p>Emails are limited to once a month</p> -->

        <Footer />
    </Container>

</body>