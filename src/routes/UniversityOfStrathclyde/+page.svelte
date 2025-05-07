<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Heading from '../components/section-heading.svelte';
    import Expandable from '../components/section-expandable.svelte';
    import Paragraph from '../components/section-text.svelte';
    import Footer from '../components/footer.svelte';
  
    const year4 = [
        { moduleName: 'Dissertation'},
        { moduleName: 'Computer Security'},
        { moduleName: 'Software Architecture And Design', },
        { moduleName: 'Information Access And Mining', },
        { moduleName: 'Project Management', },
    ];

    const year3 = [
        { moduleName: 'Building Software Systems',
          project: {
             title: 'High School Portal System',
             desc: 'This project involved the development of a portal system application for high school students. The system allows students to access their academic information, including grades, attendance records, and course materials. It also provides a platform for communication between students and teachers, enabling full school management.',
            //  code: 'https://github.com/MurrayBuchanan/cs308-high-school-portal-system',
             url: 'https://youtu.be/s0-uWBal7UE'
           }
        },
        { moduleName: 'Foundations of Artificial Intelligence', 
           project: {
             title: 'Models',
             desc: 'This project involved the development of various models for artificial intelligence applications. The focus was on creating efficient algorithms and data structures to support AI functionalities. The project included implementing machine learning models, natural language processing techniques, and other AI-related tasks.',
            //  code: 'https://github.com/MurrayBuchanan/cs310-models',
           }
        },
        { moduleName: 'Web Applications Development', 
           project: {
             title: "Cara's Gallary",
             desc: "Cara's Gallery is a web application that serves as a personal gallery for Cara, showcasing her artwork and photography. The project was developed as part of the Web Applications Development module, focusing on creating a user-friendly interface for displaying and managing images. The application allows users to upload, view, and organize their images in a visually appealing manner.",
            //  code: 'https://github.com/MurrayBuchanan/cs312-caras-gallary',
             url: 'https://devweb2024.cis.strath.ac.uk/~kxb22138/goatjkmkqsojggp/index.php'
           }
        },
        { moduleName: 'Computer Systems and Concurrency', 
           project: {
             title: 'Discord App',
             desc: 'This project involved designing and implementing a concurrent chat application in Java, focusing on core computer systems principles. Key aspects included building a multi-threaded server and client, implementing various features requiring careful attention to concurrency and thread safety, and demonstrating how thread-safe solutions prevent failure. Later stages added advanced networking features like peer-to-peer file transfer and real-time video calls.',
            //  code: 'https://github.com/MurrayBuchanan/cs313-discord',
           }
        },
        { moduleName: 'Functional Programming', 
           project: {
             title: 'JSON Cmd Line',
             desc: 'This project involved the development of a command-line tool for parsing and manipulating JSON data. The tool allows users to perform various operations on JSON files, such as filtering, transforming, and querying data. The project was developed using functional programming principles, focusing on immutability and higher-order functions.',
            //  code: 'https://github.com/MurrayBuchanan/cs316-functional-programming',
           }
        },
        { moduleName: 'Mobile App Development',
           project: {
             title: 'Wellness App',
             desc: 'The Wellness App aims to support wellbeing by addressing stress and providing clear steps for self-improvement. Inspired by the Five Ways to Wellbeing, it offers engaging challenges encouraging users to connect with others through community features, engage in physical activity, and practice mindfulness. The project focuses on creating an accessible platform that removes barriers and makes improving wellbeing easier through interactive challenges.',
             code: 'https://github.com/MurrayBuchanan/cs317-wellness',
            //  url: 'https://youtube.com/shorts/raIrvk-FHRY?feature=share'
           }
        },
    ];

    const year2 = [
        { moduleName: 'Advanced Programming',
           project: {
             title: 'Bulls and Cows Game',
             desc: 'Bulls and Cows is a classic code-breaking logic game. The computer selects a secret number, usually with no repeating digits. Your goal is to guess the secret number within a set number of attempts. After each guess, you receive feedback: "Bulls" for each digit in your guess that is correct and in the correct position, and "Cows" for each digit that is correct but in the wrong position. Use the feedback from the Bulls and Cows to refine your subsequent guesses and crack the code.',
            //  code: 'https://github.com/MurrayBuchanan/cs207-bulls-and-cows'
           }
        },
        { moduleName: 'Logic and Algorithms'},
        { moduleName: 'User and Data Modelling'},
        { moduleName: 'Computer Systems and Architecture',
           project: {
             title: 'Shell',
             desc: 'This was a simple shell program that allows users to execute commands and manage processes. It was developed as part of the Computer Systems and Architecture module, focusing on low-level programming and system interactions. The project involved implementing basic shell functionalities, such as command execution, process management, and input/output redirection.',
            //  code: 'https://github.com/MurrayBuchanan/cs210-shell'
           }
        },
        { moduleName: 'Professional Issues in Computing'},
        { moduleName: 'Agile Software Development in Practice',
           project: {
             title: 'ScotBank',
             desc: 'ScotBank is a fictional bank that was developed as part of the Agile Software Development in Practice module. The project involved creating a web application that simulates banking operations, allowing users to manage their accounts, view transactions, and perform various banking tasks. The project was developed using Agile methodologies, focusing on iterative development and collaboration within a team.',
             code: 'https://github.com/MurrayBuchanan/cs217-scotbank',
            //  url: 'https://youtu.be/qYNSiujtFbM'
           }
        },
        { moduleName: 'Quantitative Methods for Computer Science'},
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

        <Expandable title="Year 4" classes={year4} />
        <Expandable title="Year 3" classes={year3} />
        <Expandable title="Year 2" classes={year2} />
        <Expandable title="Year 1" classes={year1} />

        <Footer />
    </Container>
</body>