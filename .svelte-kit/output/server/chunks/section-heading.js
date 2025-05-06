import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, g as getContext, f as subscribe, d as each } from "./ssr.js";
import "./exports.js";
import { o as onMount } from "./ssr2.js";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { custom = "" } = $$props;
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  return `<main class="flex flex-col justify-center items-center"><div class="${"mb-2 lg:mb-6 p-4 lg:w-1/2 mx-2 lg:mx-24 rounded-3xl " + escape(custom, true)}">${slots.default ? slots.default({}) : ``}</div></main>`;
});
const Footer_theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main> <div class="w-36 h-6 relative flex items-center space-between cursor-pointer">  <div${add_attribute(
    "class",
    `hover:bg-primary-dark dark:hover:bg-primary-light text-secondary-light dark:text-secondary-dark hover:text-secondary-dark dark:hover:text-secondary-light h-6 px-0.5 flex-1 flex items-center justify-center cursor-pointer rounded-lg transition-transform duration-150 hover:scale-105 ease-out ${"text-secondary-light dark:text-secondary-dark"}`,
    0
  )}><p class="text-sm font-normal" data-svelte-h="svelte-1swd6x2">Light</p></div>   <div${add_attribute(
    "class",
    `hover:bg-primary-dark dark:hover:bg-primary-light text-secondary-light dark:text-secondary-dark hover:text-secondary-dark dark:hover:text-secondary-light h-6 px-0.5 flex-1 flex items-center justify-center cursor-pointer rounded-lg transition-transform duration-150 hover:scale-105 ease-out ${"text-secondary-light dark:text-secondary-dark"}`,
    0
  )}><p class="text-sm font-normal" data-svelte-h="svelte-yiute2">Dark</p></div>   <div${add_attribute(
    "class",
    `hover:bg-primary-dark dark:hover:bg-primary-light text-secondary-light dark:text-secondary-dark hover:text-secondary-dark dark:hover:text-secondary-light h-6 px-0.5 flex-1 flex items-center justify-center cursor-pointer rounded-lg transition-transform duration-150 hover:scale-105 ease-out ${"text-secondary-light dark:text-secondary-dark border border-tertiary-light dark:border-tertiary-dark"}`,
    0
  )}><p class="text-sm font-normal" data-svelte-h="svelte-1mzurij">Auto</p></div></div></main>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { custom = "" } = $$props;
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  return `<main class="${"bottom-0 pt-10 mt-24 animate " + escape(custom, true)}"><p class="mb-2 text-sm font-normal text-tertiary-light dark:text-tertiary-dark" data-svelte-h="svelte-1nfxv94">Contact</p> <span class="inline-flex justify-between w-full"><span data-svelte-h="svelte-e83ke3"><ul class="flex flex-wrap justify-center gap-4 lg:gap-4"><li><a href="mailto:contact@murrayb.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-secondary-light dark:stroke-secondary-dark transition-transform duration-150 hover:scale-105 ease-out cursor-pointer"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li> <li><a href="https://www.linkedin.com/in/murray-buchanan-33519220a/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-secondary-light dark:stroke-secondary-dark transition-transform duration-150 hover:scale-105 ease-out cursor-pointer"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li> <li><a href="https://github.com/MurrayBuchanan" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-secondary-light dark:stroke-secondary-dark transition-transform duration-150 hover:scale-105 ease-out cursor-pointer"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li> <li><a href="https://www.instagram.com/murray.c.buchanan/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-secondary-light dark:stroke-secondary-dark transition-transform duration-150 hover:scale-105 ease-out cursor-pointer"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li></ul></span> ${validate_component(Footer_theme, "Toggle").$$render($$result, {}, {}, {})}</span></main>`;
});
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
const is_legacy = onMount.toString().includes("$$") || /function \w+\(\) \{\}/.test(onMount.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Section_heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let { newPage = false } = $$props;
  let isHomepage = false;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.newPage === void 0 && $$bindings.newPage && newPage !== void 0) $$bindings.newPage(newPage);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  {
    {
      $page.url.pathname === "/" ? isHomepage = true : isHomepage = false;
    }
  }
  $$unsubscribe_page();
  return ` <main class="animate mt-24 lg:mt-48">${isHomepage ? `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-6 invisible"><path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fill-primary-light dark:fill-primary-dark stroke-2 stroke-secondary-light dark:stroke-secondary-dark"></path></svg>` : `<a href="../" data-svelte-h="svelte-wf2sr6"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-6"><path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-150 hover:scale-105 ease-out cursor-pointer fill-primary-light dark:fill-primary-dark stroke-2 stroke-secondary-light dark:stroke-secondary-dark hover:duration-150"></path></svg></a>`} <h2 class="text-2xl font-normal text-secondary-light dark:text-secondary-dark">${escape(title)}</h2> <p class="pb-6 text-sm font-normal text-secondary-light dark:text-secondary-dark">${escape(desc)}</p>  <div class="flex pb-6">${each(links, (link) => {
    return `${newPage ? `<a${add_attribute("href", link.url, 0)} class="mr-4 text-base font-normal text-secondary-light dark:text-secondary-dark hover:underline underline-offset-2 transition-transform duration-150 ease-out cursor-pointer" target="_blank">${escape(link.title)}</a>` : `<a${add_attribute("href", link.url, 0)} class="mr-4 text-base font-normal text-secondary-light dark:text-secondary-dark hover:underline underline-offset-2 transition-transform duration-150 ease-out cursor-pointer">${escape(link.title)}</a>`}`;
  })}</div></main>`;
});
export {
  Container as C,
  Footer as F,
  Section_heading as S
};
