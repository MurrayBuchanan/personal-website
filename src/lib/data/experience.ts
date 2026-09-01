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
        company: 'JPMorgan Chase & Co.',
        date: '2025–Current',
        url: '/jpmorganchase',
        category: 'work',
        positions: [
            {
                role: 'Software Engineer',
                date: '2026–Current',
                location: 'Glasgow, UK',
            },
            {
                role: 'Summer Analyst',
                date: '2025',
                location: 'Glasgow, UK',
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
                role: 'Marketing, Technology and Education Strategy',
                date: '2026',
                location: 'Nong Khai, Thailand',
            },
        ],
    },
    {
        company: 'Set Piece',
        location: 'Co-Founder and Funded by StrathInspire',
        locationLinks: [
            {
                title: 'StrathInspire',
                url: 'https://www.strath.ac.uk/workwithus/strathclydeinspire/',
            },
        ],
        date: '2022–Current',
        url: '/setpiece',
        category: 'projects',
    },
    {
        company: 'Dementia Linguistic Anomaly Detection',
        location: 'Researcher and Developer',
        date: '2025-2026',
        url: '/dementia-linguistic-anomaly-detection',
        category: 'projects',
    },
    {
        company: 'Counter',
        location: 'Creator and Developer',
        date: '2026',
        url: 'https://github.com/MurrayBuchanan/counter-app',
        category: 'projects',
    },
    {
        company: 'Chibb',
        location: 'Creator and Developer',
        date: '2019-2024',
        url: '/chibb',
        category: 'projects',
    },
    {
        role: 'Computer Science Instructor',
        company: 'Camp Lindenmere',
        location: 'Pennsylvania, USA',
        date: '2024',
        url: '/camp-lindenmere',
        category: 'work',
    },
    {
        role: 'Logistics, IT, Marketing, Distribution and Events',
        company: 'Direct Distribution',
        location: 'Scotland Area, UK',
        date: '2022-2024',
        url: '/direct-distribution',
        category: 'work',
    },
    {
        role: 'BSc (Hons) Computer Science',
        company: 'University of Strathclyde',
        location: 'Glasgow, UK',
        date: '2022-2026',
        badges: ['First-Class'],
        url: '/university-of-strathclyde',
        category: 'education',
    },
    {
        company: 'Jordanhill School',
        location: 'Glasgow, UK',
        date: '2009-2022',
        url: '/jordanhill-school',
        category: 'education',
    },
    {
        company: 'See archive and scrapped',
        date: '',
        url: '/honourable-mentions',
        category: 'projects',
        subdued: true,
    },
    {
        company: 'Computer Science and Mathematics Tutor',
        location: 'Freelance',
        date: '2024–Current',
        category: 'community',
    },
    {
        company: 'Treasurer and Competition Leader',
        location: 'Google Developer Group Glasgow and Strathclyde',
        date: '2023–2026',
        category: 'community',
    },
    {
        company: 'CodeForGood Hackathon',
        date: '2024',
        badges: ['1st Place'],
        category: 'community',
    },
    {
        company: 'Fundraising Coordinator',
        location: 'Refuweegee',
        date: '2021–2022',
        badges: ['£10,000+ raised'],
        category: 'community',
    },
    {
        company: 'Foodbank Volunteer',
        location: 'Guri Nanak Sikh Temple',
        date: '2020',
        category: 'community',
    },
    {
        company: 'Support Worker',
        location: 'Barnardos',
        date: '2019',
        category: 'community',
    },
    {
        company: 'Server hosting and plugin development',
        location: 'Minecraft',
        date: '2015–2019',
        category: 'community',
    },
];
