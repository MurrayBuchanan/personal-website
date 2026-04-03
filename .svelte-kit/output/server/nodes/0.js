

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Dxm0kFwD.js","_app/immutable/chunks/BlsfIWaP.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/0.t3LBZMzM.css"];
export const fonts = [];
