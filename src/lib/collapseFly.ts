import { cubicInOut } from 'svelte/easing';

/**
 * Matches page load `slide-up` / useAnimate: opacity only, 0.5s ease-in-out
 * (no translate — same as app.css slide-up and avoids list hit-test flicker).
 */
export const collapseFly = {
    duration: 500,
    easing: cubicInOut,
    opacity: 0,
};
