/**
 * Entrance stagger (`useAnimate` + `.animate` / `.animated`).
 * Keep `@keyframes slide-up` and `.animated` in `app.css` aligned with these values.
 */
export const SLIDE_UP_KEYFRAME_NAME = 'slide-up';
export const SLIDE_UP_DURATION_MS = 580;
export const SLIDE_UP_EASING_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Featured ↔ full project list (`in:fly` / `out:fly` on home). */
export const LIST_SWAP_DURATION_MS = 520;
export const LIST_SWAP_Y_PX = 14;

/** Staggered row `out:fly` when collapsing the full list. */
export const LIST_ROW_OUT_STAGGER_MS = 70;
export const LIST_ROW_OUT_DURATION_MS = 360;
export const LIST_ROW_OUT_Y_PX = 10;
