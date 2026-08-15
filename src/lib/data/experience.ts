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
        role: 'Software Engineer',
        company: 'J.P. Morgan Chase & Co.',
        location: 'Glasgow, United Kingdom',
        date: '2024',
        badges: ['Present'],
        url: '/jpmorganchase',
        category: 'work',
    },
    {
        role: 'Founder',
        company: 'Set Piece',
        location: 'Glasgow, United Kingdom',
        date: '2022',
        badges: ['Present'],
        url: '/setpiece',
        category: 'projects',
    },
    {
        role: 'Researcher & Developer',
        company: 'Verba',
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
        company: 'Open Mind Projects',
        date: '2026',
        url: '/openmindprojects',
        category: 'work',
        positions: [
            {
                role: 'Member of the Board of Advisors',
                date: '2026',
                location: 'South Asia',
                badges: ['Present'],
            },
            {
                role: 'Computer Science Course Creator & Instructor',
                date: '2026',
                location: 'Nong Khai, Thailand',
            },
        ],
    },
    {
        role: 'IT, Marketing, Distribution & Events Support',
        company: 'Direct Distribution',
        location: 'Scotland Area, United Kingdom',
        date: '2022',
        url: '/direct-distribution',
        category: 'work',
    },
    {
        role: 'BSc (Hons) Computer Science',
        company: 'University of Strathclyde',
        location: 'Glasgow, United Kingdom',
        date: '2022',
        badges: ['First-Class'],
        url: '/university-of-strathclyde',
        category: 'education',
    },
    {
        company: 'Jordanhill School',
        location: 'Glasgow, United Kingdom',
        date: '2009',
        url: '/jordanhill-school',
        category: 'education',
    },
    {
        role: 'Server Hosting & Plugin Development',
        company: 'Minecraft',
        location: 'Glasgow, United Kingdom',
        date: '2015',
        badges: ['Open source'],
        url: '/minecraft',
        category: 'community',
    },
    {
        company: 'See archive and scrapped',
        date: '—',
        url: '/honourable-mentions',
        category: 'projects',
        subdued: true,
    },
];
