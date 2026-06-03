export type ContentItem = {
    title?: string;
    desc?: string | string[];
};

export type PageLink = {
    url: string;
    title: string;
};

export type ExperienceCategory = 'work' | 'education' | 'projects' | 'community';

export type ExperienceEntry = {
    role?: string | null;
    company: string;
    location?: string | null;
    date: string;
    badges?: string[];
    url: string;
    externalUrl?: string;
    category: ExperienceCategory;
    subdued?: boolean;
};

export type IconName =
    | 'home'
    | 'mail'
    | 'linkedin'
    | 'github'
    | 'instagram'
    | 'sun'
    | 'moon'
    | 'monitor'
    | 'external'
    | 'arrow-up-right'
    | 'chevron-down';
