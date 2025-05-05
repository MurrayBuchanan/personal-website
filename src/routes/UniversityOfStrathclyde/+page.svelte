<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Heading from '../components/section-heading.svelte';
    import Expandable from '../components/section-expandable.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Paragraph from '../components/section-text.svelte';
    import Footer from '../components/footer.svelte';
  
    const year4 = [
        { moduleName: 'Dissertation',
          project: { 
             title: 'Your Dissertation Project Title',
             code: 'Link to Dissertation Code Repo (Optional)',
             desc: 'Description of your Dissertation Project',
             url: 'Link to Dissertation Demo/Site (Optional)'
           }
        },
        { moduleName: 'Computer Security',
           project: { 
             title: 'Computer Security Coursework Project Title',
             code: 'Link to Security Project Code Repo',
             desc: 'Description of the Computer Security project',
             url: 'Link to Security Project Demo (Optional)'
           }
        },
        { moduleName: 'Software Architecture And Design', },
        { moduleName: 'Information Access And Mining', },
        { moduleName: 'Project Management', },
    ];

    const year3 = [
        { moduleName: 'Building Software Systems',
          project: {
             title: 'High School Portal System',
             code: 'Link to BSS Project Code',
             desc: 'This project involved the development of a portal system application for high school students. The system allows students to access their academic information, including grades, attendance records, and course materials. It also provides a platform for communication between students and teachers, enabling full school management.',
             url: 'Link to BSS Project Demo'
           }
        },
        { moduleName: 'Foundations of Artificial Intelligence', },
        { moduleName: 'Models',
           project: {
             title: 'Web App Development Project Title',
             code: 'Link to Web App Project Code',
             desc: 'Description of the Web App project',
             url: 'Link to Web App Project Demo'
           }
        },
        { moduleName: 'Computer Systems and Concurrency', },
        { moduleName: 'Functional Programming',  },
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
             title: 'Bulls and Cows Game',
             desc: 'Bulls and Cows is a classic code-breaking logic game. The computer selects a secret number, usually with no repeating digits. Your goal is to guess the secret number within a set number of attempts. After each guess, you receive feedback: "Bulls" for each digit in your guess that is correct and in the correct position, and "Cows" for each digit that is correct but in the wrong position. Use the feedback from the Bulls and Cows to refine your subsequent guesses and crack the code.',
             url: 'Link to AP Project Demo (Optional)'
           }
        },
        { moduleName: 'Logic and Algorithms'},
        { moduleName: 'User and Data Modelling'},
        { moduleName: 'Computer Systems and Architecture',
           project: {
             title: 'C Shell',
             code: 'Link to Agile Project Code',
             desc: 'C Shell is a simple shell program that allows users to execute commands and manage processes. It was developed as part of the Computer Systems and Architecture module, focusing on low-level programming and system interactions. The project involved implementing basic shell functionalities, such as command execution, process management, and input/output redirection.',
             url: 'Link to Agile Project Demo'
           }
        },
        { moduleName: 'Professional Issues in Computing'},
        { moduleName: 'Agile Software Development in Practice',
           project: {
             title: 'ScotBank',
             code: 'Link to Agile Project Code',
             desc: 'ScotBank is a fictional bank that was developed as part of the Agile Software Development in Practice module. The project involved creating a web application that simulates banking operations, allowing users to manage their accounts, view transactions, and perform various banking tasks. The project was developed using Agile methodologies, focusing on iterative development and collaboration within a team.',
             url: 'Link to Agile Project Demo'
           }
        },
        
        { moduleName: 'Quantitative Methods for Computer Science',
           project: {
             title: 'Predictive Modelling',
             code: 'Link to Agile Project Code',
             desc: 'Predictive Modelling is a project that focuses on using statistical techniques and algorithms to make predictions based on historical data. The project involved implementing various predictive models, such as regression analysis and time series forecasting, to analyze trends and patterns in data. The goal was to develop a model that could accurately predict future outcomes based on past data.',
             url: 'Link to Agile Project Demo'
           }
        },
        { moduleName: 'Functional Thinking'},
    ];

    const year1 = [
        { moduleName: 'Internet of Things'},
        { moduleName: 'Machines, Languages and Computation'},
        { moduleName: 'Information and Information Systems'},
        { moduleName: 'Programming Foundations'},
        { moduleName: 'Computer Systems and Organisation'},
        { moduleName: 'Introduction to Astronomy'},
        { moduleName: 'Business Analysis and Technology'},
    ];
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="University of Strathclyde"
            desc="2022-Now · Education, Undergraduate, Computer Science"
            newPage={true}
            links={[{ url: "https://www.strath.ac.uk/", newPage: true, title: "Visit Website" }]}
        />

        <Paragraph title="Overview" desc="I am currently in the undergraduate program for Computer Science at the University of Strathclyde. Alongside my studies, I was on the Committee for the Google Developer Group during my second and third year, and have been an active member of the Snow Sports, Volleyball and Badminton societies." />
        <Paragraph title="Modules" desc="Completed and current university modules, including associated projects." />

        <!-- <Expandable title="Year 4: Modules & Projects" classes={year4} /> -->
        <Expandable title="Year 3" classes={year3} />
        <Expandable title="Year 2" classes={year2} />
        <Expandable title="Year 1" classes={year1} />

        <Footer />
    </Container>
</body>