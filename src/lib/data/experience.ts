import type { ExperienceCategory, ExperienceEntry } from '$lib/types';

export const experienceSectionOrder: ExperienceCategory[] = [
    'work',
    'education',
    'projects',
    'community',
];

export const experienceSectionLabels: Record<ExperienceCategory, string> = {
    work: 'Work',
    education: 'Education',
    projects: 'Projects',
    community: 'Community',
};

export const experienceEntries: ExperienceEntry[] = [
    {
        company: 'J.P. Morgan Chase & Co.',
        date: '2023–Current',
        url: '/jpmorganchase',
        category: 'work',
        positions: [
            {
                role: 'Software Engineer',
                date: '2024–Current',
                location: 'Glasgow, United Kingdom',
            },
            {
                role: 'Software Engineer Intern',
                date: '2023',
                location: 'Glasgow, United Kingdom',
            },
        ],
    },
    {
        company: 'OpenmindProjects Foundation',
        date: '2026–Current',
        url: '/openmindprojects',
        category: 'work',
        positions: [
            {
                role: 'Member of the Board of Advisors',
                date: '2026–Current',
                location: 'South Asia',
            },
            {
                role: 'Computer Science Course Creator & Instructor',
                date: '2026',
                location: 'Nong Khai, Thailand',
            },
        ],
    },
    {
        role: 'Founder',
        company: 'Set Piece',
        location: 'Glasgow, United Kingdom',
        date: '2022–Current',
        url: '/setpiece',
        category: 'projects',
    },
    {
        role: 'Researcher & Developer',
        company: 'Dementia Linguistic Anomaly Detection',
        location: 'Glasgow, United Kingdom',
        date: '2026',
        badges: ['Open source'],
        url: 'https://github.com/MurrayBuchanan/verba-tool',
        category: 'projects',
    },
    {
        role: 'Creator & Developer',
        company: 'Chibb',
        location: 'Kintyre, United Kingdom',
        date: '2023',
        url: '/chibb',
        category: 'projects',
    },
    {
        role: 'Creator & Developer',
        company: 'Counter',
        location: 'Glasgow, United Kingdom',
        date: '2026',
        url: 'https://github.com/MurrayBuchanan/counter-app',
        category: 'projects',
    },
    {
        role: 'Computer Science Course Lead & Instructor',
        company: 'Camp Lindenmere',
        location: 'Pennsylvania, United States',
        date: '2024',
        url: '/camp-lindenmere',
        category: 'work',
    },
    {
        role: 'IT, Marketing, Distribution & Events Support',
        company: 'Direct Distribution',
        location: 'Scotland Area, United Kingdom',
        date: '2022-2024',
        url: '/direct-distribution',
        category: 'work',
    },
    {
        role: 'BSc (Hons) Computer Science',
        company: 'University of Strathclyde',
        location: 'Glasgow, United Kingdom',
        date: '2022-2026',
        badges: ['First-Class'],
        url: '/university-of-strathclyde',
        category: 'education',
    },
    {
        company: 'Jordanhill School',
        location: 'Glasgow, United Kingdom',
        date: '2009-2022',
        url: '/jordanhill-school',
        category: 'education',
    },
    {
        role: 'Computer Science and Mathematics Tutor',
        company: 'Freelance',
        location: 'Scotland, United Kingdom',
        date: '2024–Current',
        url: '/private-tutor',
        category: 'community',
    },
    {
        company: 'GDSC Glasgow & Strathclyde',
        date: '2023–2026',
        url: '/gdsc-glasgow-strathclyde',
        category: 'community',
        positions: [
            {
                role: 'Competition Lead',
                date: '2024-2026',
                location: 'Glasgow, United Kingdom',
            },
            {
                role: 'Treasurer',
                date: '2023-2024',
                location: 'Glasgow, United Kingdom',
            },
        ],
    },
    {
        company: 'Charity Work',
        date: '2019–2024',
        url: '/charity-work',
        category: 'community',
        positions: [
            {
                role: 'Many roles — OpenmindProjects Foundation',
                date: '2024',
                location: 'South Asia',
            },
            {
                role: 'Software Engineer — CodeForGood Hackathon',
                date: '2024',
                location: 'Glasgow, United Kingdom',
                badges: ['1st Place'],
            },
            {
                role: 'Fundraising Coordinator — Refuweegee',
                date: '2021-2022',
                location: 'Glasgow, United Kingdom',
                badges: ['£10,000+ raised'],
            },
            {
                role: 'Foodbank Volunteer — Guri Nanak Sikh Temple',
                date: '2020',
                location: 'Glasgow, United Kingdom',
            },
            {
                role: 'Support Worker — Barnardos',
                date: '2019',
                location: 'Glasgow, United Kingdom',
            },
        ],
    },
    {
        role: 'Server Hosting & Plugin Development',
        company: 'Minecraft',
        location: 'Glasgow, United Kingdom',
        date: '2015-2019',
        badges: ['Open source'],
        url: '/minecraft',
        category: 'community',
    },
    {
        company: 'See archive and scrapped',
        date: '',
        url: '/honourable-mentions',
        category: 'projects',
        subdued: true,
    },
];
