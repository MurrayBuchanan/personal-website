import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
import { C as Container, F as Footer } from "../../chunks/container.js";
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="h-lvh flex flex-col items-center justify-center text-center"><div> <h2 class="text-base uppercase font-normal text-gray-900 dark:text-gray-400"></h2> <h1 class="text-5xl font-semibold my-4 text-gray-900 dark:text-white" data-svelte-h="svelte-azed2m">Murray Buchanan</h1> <ul class="flex space-x-6 justify-center" data-svelte-h="svelte-1o1vazz"><li class="px-2"><a href="mailto:contact@murrayb.com"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 dark:stroke-gray-400 hover: duration-150 hover:stroke-gray-900 hover:dark:stroke-white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li> <li class="px-2"><a href="https://www.linkedin.com/in/murray-buchanan-33519220a/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 dark:stroke-gray-400 hover: duration-150 hover:stroke-gray-900 hover:dark:stroke-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li> <li class="px-2"><a href="https://github.com/MurrayBuchanan" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 hover: duration-150 dark:stroke-gray-400 hover:stroke-gray-900 hover:dark:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li> <li class="px-2"><a href="https://www.instagram.com/murray.c.buchanan/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 dark:stroke-gray-400 hover: duration-150 hover:stroke-gray-900 hover:dark:stroke-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li></ul> ${``}</div></main>`;
});
const css = {
  code: ".image.svelte-1o4u6z.svelte-1o4u6z{opacity:0;transform:scale(0.5);transition:opacity 0.3s ease, transform 0.3s ease}.text.svelte-1o4u6z.svelte-1o4u6z{transform:translateX(-5rem);transition:opacity 0.3s ease, transform 0.3s ease}main.svelte-1o4u6z:hover .image.svelte-1o4u6z,main.svelte-1o4u6z:hover .text.svelte-1o4u6z{opacity:1;transform:translateX(0)}",
  map: `{"version":3,"file":"section-subTitle.svelte","sources":["section-subTitle.svelte"],"sourcesContent":["<script>\\n  export let image = '';\\n  export let title = '';\\n  export let desc = '';\\n  export let subDesc = '';\\n  export let link = '';\\n<\/script>\\n\\n<main class=\\"px-4 py-3 rounded-3xl hover:bg-secondary-light hover:dark:bg-primary-dark hover:bg-gray-200 transition-transform transform hover:-translate-y-1 cursor-pointer\\">\\n<a href={link}> \\n  <!-- If link exists -->\\n  <div class=\\"flex items-center\\">\\n      {#if image}\\n        <!-- svelte-ignore a11y-img-redundant-alt -->\\n        <img src={image} alt=\\"Profile Image\\" class=\\"w-12 h-auto mr-4 my-2 image\\" />\\n      {/if}\\n    \\n    <div class=\\"flex flex-col justify-center\\">\\n      {#if title}\\n        <h2 class=\\"text-xl text-gray-900 dark:text-gray-200 text\\">{title}</h2>\\n      {/if}\\n      {#if desc}\\n        <h3 class=\\"text-sm text-gray-900 dark:text-gray-200 text\\">{desc}</h3>\\n      {/if}\\n      {#if subDesc}\\n        <h3 class=\\"text-sm text-gray-500 dark:text-gray-400 text\\">{subDesc}</h3>\\n      {/if}\\n    </div>\\n  </div>\\n</a>\\n</main>\\n\\n<style>\\n  .image {\\n    opacity:0;\\n    transform: scale(0.5);\\n    transition: opacity 0.3s ease, transform 0.3s ease;\\n  }\\n\\n  .text {\\n    transform: translateX(-5rem);\\n    transition: opacity 0.3s ease, transform 0.3s ease;\\n  }\\n\\n  main:hover .image,\\n  main:hover .text {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n</style>"],"names":[],"mappings":"AAiCE,kCAAO,CACL,QAAQ,CAAC,CACT,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,IAChD,CAEA,iCAAM,CACJ,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,IAChD,CAEA,kBAAI,MAAM,CAAC,oBAAM,CACjB,kBAAI,MAAM,CAAC,mBAAM,CACf,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,CAAC,CACzB"}`
};
const Section_subTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let { subDesc = "" } = $$props;
  let { link = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.subDesc === void 0 && $$bindings.subDesc && subDesc !== void 0) $$bindings.subDesc(subDesc);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  $$result.css.add(css);
  return `<main class="px-4 py-3 rounded-3xl hover:bg-secondary-light hover:dark:bg-primary-dark hover:bg-gray-200 transition-transform transform hover:-translate-y-1 cursor-pointer svelte-1o4u6z"><a${add_attribute("href", link, 0)}> <div class="flex items-center">${image ? ` <img${add_attribute("src", image, 0)} alt="Profile Image" class="w-12 h-auto mr-4 my-2 image svelte-1o4u6z">` : ``} <div class="flex flex-col justify-center">${title ? `<h2 class="text-xl text-gray-900 dark:text-gray-200 text svelte-1o4u6z">${escape(title)}</h2>` : ``} ${desc ? `<h3 class="text-sm text-gray-900 dark:text-gray-200 text svelte-1o4u6z">${escape(desc)}</h3>` : ``} ${subDesc ? `<h3 class="text-sm text-gray-500 dark:text-gray-400 text svelte-1o4u6z">${escape(subDesc)}</h3>` : ``}</div></div></a> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let timelines = [
    {
      title: "JPMorgan Chase & Co",
      subDesc: "Now · Work, Analyst, Python",
      image: "static/assets/experience-icons/jpmc.png",
      link: "/JPMorganChaseCo"
    },
    {
      title: "Camp Lindenmere",
      subDesc: "2024 · Academia, Teaching, Java, React, UI, UX",
      image: "static/assets/experience-icons/lindenmere.png",
      link: "/CampLindenmere"
    },
    {
      title: "Google Developer Group",
      subDesc: "2023 · Community, Google, Teaching, Competing",
      image: "static/assets/experience-icons/google.png",
      link: "/GoogleDeveloperGroup"
    },
    {
      title: "Direct Distribution",
      subDesc: "2022 · Marketing, Distribution, Logistics, IT",
      image: "static/assets/experience-icons/distribution.png",
      link: "/DirectDistribution"
    },
    {
      title: "University of Strathclyde",
      // desc: "MEng, Computer Science",
      subDesc: "2022 · Education, Computer Science, GDG, H&S",
      image: "static/assets/experience-icons/strathclyde.png",
      link: "/UniversityOfStrathclyde"
    },
    {
      title: "Chibb",
      subDesc: "2020 · Signal processing, ML, UX",
      image: "static/assets/banners/chibb.png",
      link: "/Chibb"
    },
    {
      title: "Minecraft",
      subDesc: "2015 · Leadership, Java",
      image: "static/assets/experience-icons/jordanhill.png",
      link: "/JordanhillSchool"
    },
    {
      title: "Unlisted Projects",
      image: "static/assets/experience-icons/jordanhill.png",
      link: "/JordanhillSchool"
    }
  ];
  return `<body class="mx10 bg-primary-light dark:bg-secondary-dark"> ${validate_component(Title, "Title").$$render($$result, {}, {}, {})}  ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-3xl py-2 font-semibold text-gray-900 dark:text-white" data-svelte-h="svelte-xz1var">Experience</h2> <span>${each(timelines, ({ title, desc, subDesc, image, link }) => {
        return `${validate_component(Section_subTitle, "SectionTitle").$$render($$result, { title, desc, subDesc, image, link }, {}, {})}`;
      })}</span>`;
    }
  })}  ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</body>`;
});
export {
  Page as default
};
