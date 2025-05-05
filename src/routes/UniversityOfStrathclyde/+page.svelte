<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Heading from '../components/section-heading.svelte';
    import Expandable from '../components/section-expandable.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Footer from '../components/footer.svelte';
  
    const year4 = [
        { moduleName: 'Dissertation',
          project: { // Assuming Dissertation has a project
             title: 'Your Dissertation Project Title',
             code: 'Link to Dissertation Code Repo (Optional)',
             desc: 'Description of your Dissertation Project',
             url: 'Link to Dissertation Demo/Site (Optional)'
           }
        },
        { moduleName: 'Computer Security',
           project: { // Assuming Computer Security had a project
             title: 'Computer Security Coursework Project Title',
             code: 'Link to Security Project Code Repo',
             desc: 'Description of the Computer Security project',
             url: 'Link to Security Project Demo (Optional)'
           }
        },
        { moduleName: 'Software Architecture And Design', /* project: {...} // Add project if applicable */ },
        { moduleName: 'Information Access And Mining', /* project: {...} // Add project if applicable */ },
        { moduleName: 'Project Management', /* project: {...} // Add project if applicable */ },
    ];

    const year3 = [
        { moduleName: 'Building Software Systems',
          project: {
             title: 'Building Software Systems Project Title',
             code: 'Link to BSS Project Code',
             desc: 'Description of the BSS project',
             url: 'Link to BSS Project Demo'
           }
        },
        { moduleName: 'Foundations of Artificial Intelligence', /* project: {...} // Add project if applicable */ },
        { moduleName: 'Web App Development',
           project: {
             title: 'Web App Development Project Title',
             code: 'Link to Web App Project Code',
             desc: 'Description of the Web App project',
             url: 'Link to Web App Project Demo'
           }
        },
        { moduleName: 'Computer Systems and Concurrency', /* project: {...} // Add project if applicable */ },
        { moduleName: 'Functional Programming', /* project: {...} // Add project if applicable */ },
        { moduleName: 'Mobile App Development',
           project: {
             title: 'Mobile App Development Project Title',
             code: 'Link to Mobile App Project Code',
             desc: 'Description of the Mobile App project',
             url: 'Link to Mobile App Project Demo'
           }
        },
    ];

    const year2 = [
        { moduleName: 'Advanced Programming',
           project: {
             title: 'Advanced Programming Project Title',
             code: 'Link to AP Project Code',
             desc: 'Description of the AP project',
             url: 'Link to AP Project Demo (Optional)'
           }
        },
        { moduleName: 'Logic and Algorithms', /* project: {...} */ },
        { moduleName: 'User and Data Modelling', /* project: {...} */ },
        { moduleName: 'Computer Systems and Architecture', /* project: {...} */ },
        { moduleName: 'Agile Software Development in Practice', /* project: {...} */ },
    ];

    const year1 = [
        { moduleName: 'Internet of Things', /* project: {...} */ },
        { moduleName: 'Machines, Languages and Computation', /* project: {...} */ },
        { moduleName: 'Information and Information Systems', /* project: {...} */ },
        { moduleName: 'Programming Foundations', /* project: {...} */ },
        { moduleName: 'Computer Systems and Organisation', /* project: {...} */ },
        { moduleName: 'Introduction to Astronomy', /* project: {...} */ },
    ];
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="University of Strathclyde"
            desc="2022-2026 · Education, BSc, Computer Science"
            newPage={true}
            links={[{ url: "https://www.strath.ac.uk/", newPage: true, title: "Visit Website" }]}
        />

        <Paragraphs paragraphs={["I am currently pursuing a BSc in Computer Science at the University of Strathclyde, Glasgow. My studies encompass a wide range of topics, including programming, data structures, algorithms, and software engineering principles. I am particularly interested in areas such as artificial intelligence, web development, and mobile app development."]} />

        <!-- <Expandable title="Year 4: Modules & Projects" classes={year4} /> -->
        <Expandable title="Year 3: Modules & Projects" classes={year3} />
        <Expandable title="Year 2: Modules & Projects" classes={year2} />
        <Expandable title="Year 1: Modules & Projects" classes={year1} />

        <Footer />
    </Container>
</body>