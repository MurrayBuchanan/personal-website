

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B8mcbjoZ.js","_app/immutable/chunks/scheduler.D5bqyAYf.js","_app/immutable/chunks/index.D_QftNlX.js","_app/immutable/chunks/entry.YjcbAkhU.js"];
export const stylesheets = [];
export const fonts = [];
