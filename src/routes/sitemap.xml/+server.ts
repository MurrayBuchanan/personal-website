import { indexablePaths, SITE_URL } from '$lib/seo';

export const prerender = true;

export function GET() {
    const urls = indexablePaths()
        .map((path) => {
            const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
            const priority = path === '/' ? '1.0' : path === '/about' ? '0.8' : '0.7';
            return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'max-age=0, s-maxage=3600',
        },
    });
}
