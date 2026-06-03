import { redirect } from '@sveltejs/kit';

const LINKEDIN_URL = 'https://www.linkedin.com/in/murraycbuchanan/';

export function load() {
    redirect(302, LINKEDIN_URL);
}
