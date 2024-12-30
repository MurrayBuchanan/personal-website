import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "./ssr.js";
const Footer_theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="relative flex items-center w-36 h-6 border-2 border-gray-900 dark:border-gray-200 rounded-full cursor-pointer overflow-hidden"><div${add_attribute(
    "class",
    `flex-1 flex items-center justify-center cursor-pointer ${"text-gray-900 dark:text-gray-200"}`,
    0
  )}><p class="text-sm" data-svelte-h="svelte-12wruvz">Light</p></div> <div${add_attribute(
    "class",
    `flex-1 flex items-center justify-center cursor-pointer ${"text-gray-900 dark:text-gray-200"}`,
    0
  )}><p class="text-sm" data-svelte-h="svelte-1901sfv">Dark</p></div> <div${add_attribute(
    "class",
    `flex-1 flex items-center justify-center cursor-pointer ${"bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900 rounded-full px-0.5"}`,
    0
  )}><p class="text-sm" data-svelte-h="svelte-10jpkee">Auto</p></div></div></main>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="bottom-0 pt-10 w-full"><p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 uppercase" data-svelte-h="svelte-ssid5a">Reach me</p> <span class="inline-flex justify-between w-full"><span data-svelte-h="svelte-khxszd"><ul class="flex space-x-6 justify-center gap-2"><li><a href="mailto:contact@murrayb.com"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" class="transition-transform transform hover:-translate-y-1 cursor-pointer stroke-2 stroke-gray-900 dark:stroke-gray-200 hover: duration-150"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li> <li><a href="https://www.linkedin.com/in/murray-buchanan-33519220a/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="transition-transform transform hover:-translate-y-1 cursor-pointer stroke-2 stroke-gray-900 dark:stroke-gray-200 hover: duration-150"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li> <li><a href="https://github.com/MurrayBuchanan" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform transform hover:-translate-y-1 cursor-pointer stroke-2 stroke-gray-900 hover: duration-150 dark:stroke-gray-200"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li> <li><a href="https://www.instagram.com/murray.c.buchanan/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform transform hover:-translate-y-1 cursor-pointer stroke-2 stroke-gray-900 dark:stroke-gray-200 hover: duration-150"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li></ul></span> ${validate_component(Footer_theme, "Toggle").$$render($$result, {}, {}, {})}</span></main>`;
});
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { custom = "" } = $$props;
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  return `<main class="flex flex-col justify-center items-center"><div class="${"mb-10 p-8 lg:w-1/2 rounded-3xl overflow-hidden mx-2 lg:mx-24 " + escape(custom, true)}">${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Container as C,
  Footer as F
};
