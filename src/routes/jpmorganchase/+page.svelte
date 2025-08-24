<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../../lib/components/layout/Container.svelte';
    import Paragraph from '../../lib/components/ui/Text.svelte';
    import Footer from '../../lib/components/layout/Footer.svelte';
    import Heading from '../../lib/components/sections/Heading.svelte';

    let hasError = false;

  function handleError() {
    hasError = true;
  }
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="J.P. Morgan Chase"
            desc="2024-Now · Software Engineer, Full-Stack, Global Research"
            newPage={true}
            links={[{ url: "https://www.jpmorganchase.com/", title: "Visit Website" }]}
        />

        <ol class="relative border-s border-tertiary-light dark:border-tertiary-dark animate mb-8">                  
            <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-tertiary-light rounded-full mt-0 -start-1.5 border border-primary-light dark:border-primary-dark dark:bg-tertiary-dark animate"></div>
            <time class="mb-1 text-sm font-normal leading-none text-tertiary-light dark:text-tertiary-dark animate">2024</time>
            <h3 class="text-base font-normal text-secondary-light dark:text-secondary-dark animate">Spring into Tech Program</h3>
            </li>
            <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-tertiary-light rounded-full mt-0 -start-1.5 border border-primary-light dark:border-primary-dark dark:bg-tertiary-dark animate"></div>
            <time class="mb-1 text-sm font-normal leading-none text-tertiary-light dark:text-tertiary-dark animate">2025</time>
            <h3 class="text-base font-normal text-secondary-light dark:text-secondary-dark animate">Summer Intern</h3>
            </li>
            <li class="ms-4">
            <div class="absolute w-3 h-3 bg-tertiary-light rounded-full mt-0 -start-1.5 border border-primary-light dark:border-primary-dark dark:bg-tertiary-dark animate"></div>
            <time class="mb-1 text-sm font-normal leading-none text-tertiary-light dark:text-tertiary-dark animate">2026</time>
            <h3 class="text-base font-normal text-secondary-light dark:text-secondary-dark animate">Software Engineer</h3>
            </li>
        </ol>

        <Paragraph 
            content={[{ title: "What do I do?", desc: "Full-Stack Software Engineer within Global Research, with a strong emphasis on cloud technologies and system architecture. " }]}
        />

        
        <Footer />
    </Container>
</body>