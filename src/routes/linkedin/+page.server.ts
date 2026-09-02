import { redirect } from '@sveltejs/kit';

const LINKEDIN_URL = 'https://www.linkedin.com/in/murraycbuchanan/';

export const prerender = false;

export function load() {
    redirect(301, LINKEDIN_URL);
}
