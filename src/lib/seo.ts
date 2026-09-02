import { experienceEntries } from '$lib/data/experience';
import type { ContentItem } from '$lib/types';

export const SITE_URL = 'https://murrayb.com';
export const SITE_NAME = 'Murray Buchanan';
export const SITE_TITLE = 'Murray Buchanan | Software Engineer';
export const SITE_DESCRIPTION =
    'I build full-stack products across research, apps, and community platforms.';
export const OG_IMAGE_PATH = '/og.png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = 'Murray Buchanan, Software Engineer';
export const LOCALE = 'en_GB';

export const PROFILE_LINKS = {
    linkedin: 'https://www.linkedin.com/in/murraycbuchanan/',
    github: 'https://github.com/MurrayBuchanan',
    instagram: 'https://www.instagram.com/murray.c.buchanan/',
    email: 'mailto:contact@murrayb.com',
} as const;

export function canonicalUrl(pathname: string): string {
    const path = pathname.split('?')[0].split('#')[0];
    if (path === '/' || path === '') return `${SITE_URL}/`;
    return `${SITE_URL}${path.replace(/\/+$/, '')}`;
}

export function pageTitle(title?: string): string {
    const trimmed = title?.trim() ?? '';
    if (!trimmed || trimmed === SITE_NAME) return SITE_TITLE;
    if (trimmed.includes(SITE_NAME)) return trimmed;
    return `${trimmed} | ${SITE_NAME}`;
}

export function truncateMeta(text: string, max = 200): string {
    const cleaned = text.replace(/\s+/g, ' ').trim();
    if (cleaned.length <= max) return cleaned;

    const sliced = cleaned.slice(0, max - 1);
    const lastSpace = sliced.lastIndexOf(' ');
    const base = (lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced).replace(
        /[.,;:–—-]+$/u,
        '',
    );
    return `${base}…`;
}

export function descriptionFromPage(options: {
    title?: string;
    desc?: string;
    intro?: string;
    content?: ContentItem[];
}): string {
    const intro = options.intro?.trim();
    if (intro) return truncateMeta(intro);

    const paragraphs: string[] = [];
    for (const item of options.content ?? []) {
        if (typeof item.desc === 'string' && item.desc.trim()) {
            paragraphs.push(item.desc.trim());
        } else if (Array.isArray(item.desc)) {
            for (const paragraph of item.desc) {
                if (paragraph?.trim()) paragraphs.push(paragraph.trim());
            }
        }
    }

    const personal = paragraphs.find((paragraph) =>
        /I(?:['\u2019]m| am) Murray/i.test(paragraph),
    );
    if (personal) return truncateMeta(personal);

    const substantial = paragraphs.find((paragraph) => paragraph.length >= 70);
    if (substantial) return truncateMeta(substantial);
    if (paragraphs[0]) return truncateMeta(paragraphs[0]);

    const desc = options.desc?.trim();
    const title = options.title?.trim();
    if (title && desc) {
        return truncateMeta(`${title} — ${desc.replace(/ • /g, ', ')}`);
    }
    if (desc) return truncateMeta(desc);

    return SITE_DESCRIPTION;
}

export function indexablePaths(): string[] {
    const paths = new Set<string>(['/', '/about']);

    for (const entry of experienceEntries) {
        if (entry.url?.startsWith('/')) {
            paths.add(entry.url.split('?')[0].replace(/\/+$/, ''));
        }
    }

    return [...paths];
}

function personSchema() {
    return {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}${OG_IMAGE_PATH}`,
        jobTitle: 'Software Engineer',
        description: SITE_DESCRIPTION,
        email: PROFILE_LINKS.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Glasgow',
            addressCountry: 'GB',
        },
        worksFor: {
            '@type': 'Organization',
            name: 'JPMorgan Chase & Co.',
        },
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: 'University of Strathclyde',
            },
            {
                '@type': 'EducationalOrganization',
                name: 'Jordanhill School',
            },
        ],
        sameAs: [PROFILE_LINKS.linkedin, PROFILE_LINKS.github, PROFILE_LINKS.instagram],
        knowsAbout: [
            'Software Engineering',
            'Full-Stack Development',
            'Computer Science',
        ],
    };
}

export function jsonLdGraph(options: {
    pathname: string;
    title: string;
    description: string;
}): string {
    const canonical = canonicalUrl(options.pathname);
    const isHome = options.pathname === '/';

    const graph: Record<string, unknown>[] = [
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            inLanguage: 'en-GB',
            publisher: { '@id': `${SITE_URL}/#person` },
        },
        personSchema(),
        {
            '@type': isHome ? ['WebPage', 'ProfilePage'] : 'WebPage',
            '@id': `${canonical}#webpage`,
            url: canonical,
            name: options.title,
            description: options.description,
            inLanguage: 'en-GB',
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': `${SITE_URL}/#person` },
            primaryImageOfPage: {
                '@type': 'ImageObject',
                url: `${SITE_URL}${OG_IMAGE_PATH}`,
                width: OG_IMAGE_WIDTH,
                height: OG_IMAGE_HEIGHT,
            },
        },
    ];

    if (!isHome) {
        graph.push({
            '@type': 'BreadcrumbList',
            '@id': `${canonical}#breadcrumb`,
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: `${SITE_URL}/`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: options.title.replace(` | ${SITE_NAME}`, ''),
                    item: canonical,
                },
            ],
        });
    }

    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph,
    }).replace(/</g, '\\u003c');
}
