

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D5s73huN.js","_app/immutable/chunks/scheduler.D5bqyAYf.js","_app/immutable/chunks/index.D_QftNlX.js","_app/immutable/chunks/container.CiFMxcXu.js"];
export const stylesheets = ["_app/immutable/assets/2.DIvAAinM.css"];
export const fonts = [];
