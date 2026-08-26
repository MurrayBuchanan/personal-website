export type ContentItem = {
    title?: string;
    heading?: string;
    desc?: string | string[];
    links?: PageLink[];
    split?: boolean;
    video?: string;
    videoTitle?: string;
    videoPoster?: string;
};

export type PageLink = {
    url: string;
    title: string;
};

export type ExperienceCategory = 'work' | 'education' | 'projects' | 'community';

export type ExperiencePosition = {
    role: string;
    date: string;
    location?: string | null;
    badges?: string[];
};

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
    positions?: ExperiencePosition[];
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
    | 'arrow-right'
    | 'chevron-down';
