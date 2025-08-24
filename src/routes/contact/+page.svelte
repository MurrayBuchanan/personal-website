<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../../lib/components/layout/Container.svelte';
    import Text from '../../lib/components/ui/Text.svelte';
    import Input from '../../lib/components/ui/TextField.svelte';
    import Footer from '../../lib/components/layout/Footer.svelte';
    import SectionHeading from '../../lib/components/sections/Heading.svelte';
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <SectionHeading title="Contact" />

        
        <Text desc={["If you want to get in touch, the best way is to email me at ", { url: "mailto:]}
        <Input placeholder="Hello" />


        <!-- <h2>Stay notified</h2>
        <p>100 others are subscribed to my spam emails.</p>
        <p>Emails are limited to once a month</p> -->

        <Footer />
    </Container>

</body>