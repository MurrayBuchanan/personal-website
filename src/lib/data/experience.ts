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
        role: 'Computer Science Course Lead & Instructor',
        company: 'Camp Lindenmere',
        location: 'Pennsylvania, US',
        date: '2024',
        url: '/camp-lindenmere',
        category: 'work',
    },
    {
        role: 'Computer Science Course Creator & Instructor',
        company: 'Open Mind Projects',
        location: 'Nong Khai, Thailand',
        date: '2026',
        url: '/openmindprojects',
        category: 'community',
    },
    {
        role: 'IT, Marketing, Distribution & Events Support',
        company: 'Direct Distribution',
        location: 'Glasgow, UK',
        date: '2022',
        url: '/direct-distribution',
        category: 'work',
    },
    {
        role: 'BSc (Hons) Computer Science',
        company: 'University of Strathclyde',
        location: 'Glasgow, UK',
        date: '2022',
        badges: ['First Class/4.0 GPA'],
        url: '/university-of-strathclyde',
        category: 'education',
    },
    {
        role: 'Computer Science • Volunteering',
        company: 'Jordanhill School',
        location: 'Glasgow, UK',
        date: '2009',
        url: '/jordanhill-school',
        category: 'education',
    },
    {
        role: 'Game Design • Procedural Generation • iOS Dev',
        company: 'Chibb',
        location: 'Personal project',
        date: '2023',
        badges: ['Open source'],
        url: '/chibb',
        category: 'projects',
    },
    {
        role: 'Community Building • Server Hosting • Plugin Dev',
        company: 'Minecraft',
        location: 'Personal project',
        date: '2015',
        badges: ['Open source'],
        url: '/minecraft',
        category: 'community',
    },
    {
        company: 'See archive and scrapped projects',
        date: '—',
        url: '/honourable-mentions',
        category: 'projects',
        subdued: true,
    },
];
