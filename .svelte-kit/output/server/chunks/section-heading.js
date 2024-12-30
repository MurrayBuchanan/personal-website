import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "./ssr.js";
const Section_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let { custom = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  return `<main class="py-6"><p class="${"pt-4 text-base text-gray-700 dark:text-gray-300 " + escape(custom, true)}">${escape(title)}</p> <p class="${"text-base text-gray-400 dark:text-gray-500 " + escape(custom, true)}">${escape(desc)}</p></main>`;
});
const Section_media = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let { custom = "text-center" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  return `<main class="pt-20 pb-6">${image ? `<img${add_attribute("src", image, 0)} alt="${"Preview of " + escape(title, true)}" class="w-full rounded-3xl h-auto mr-4 my-2 image">` : ``} ${validate_component(Section_text, "TextSection").$$render($$result, { title, desc, custom }, {}, {})}</main>`;
});
const Section_para = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paragraphs = [] } = $$props;
  if ($$props.paragraphs === void 0 && $$bindings.paragraphs && paragraphs !== void 0) $$bindings.paragraphs(paragraphs);
  return `<main>${each(paragraphs, (paragraph) => {
    return `<p class="text-base text-gray-700 dark:text-gray-300 pb-6">${escape(paragraph)}</p>`;
  })}</main>`;
});
const Section_heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  return ` <a href="../" data-svelte-h="svelte-9bh9fp"><svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-6 transition-transform transform hover:-translate-y-1 hover: duration-150"><path d="M18 44V24H30V44M6 18L24 4L42 18V40C42 41.0609 41.5786 42.0783 40.8284 42.8284C40.0783 43.5786 39.0609 44 38 44H10C8.93913 44 7.92172 43.5786 7.17157 42.8284C6.42143 42.0783 6 41.0609 6 40V18Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="fill-primary-light dark:fill-secondary-dark cursor-pointer stroke-gray-900 dark:stroke-gray-200"></path></svg></a> <h2 class="text-2xl text-gray-900 dark:text-white">${escape(title)}</h2> <p class="pb-6 text-sm font-normal text-gray-500 dark:text-gray-400">${escape(desc)}</p>  <div class="flex pb-6">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mr-4" target="_blank">${escape(link.title)} <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg> </a>`;
  })}</div>`;
});
export {
  Section_heading as S,
  Section_para as a,
  Section_text as b,
  Section_media as c
};
