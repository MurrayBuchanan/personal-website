import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each } from "../../chunks/ssr.js";
import { C as Container, H as Heading, F as Footer } from "../../chunks/Heading.js";
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "" } = $$props;
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let { subDesc = "" } = $$props;
  let { url = "" } = $$props;
  const favourite = false;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.subDesc === void 0 && $$bindings.subDesc && subDesc !== void 0) $$bindings.subDesc(subDesc);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.favourite === void 0 && $$bindings.favourite && favourite !== void 0) $$bindings.favourite(favourite);
  return `  <main class="relative flex items-center overflow-hidden px-4 py-2 rounded-2xl hover:bg-primary-light dark:hover:bg-primary-dark cursor-pointer transition-transform duration-300 hover:scale-105 ease-out"><a${add_attribute("href", url, 0)} class="relative block w-full"> <div class="flex items-center">${icon ? `<img${add_attribute("src", icon, 0)} alt="${"Thumbnail of " + escape(title, true)}" style="stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;" class="w-8 h-8 object-contain mr-4 my-2 dark:invert dark:brightness-100">` : ``} <div class="flex flex-col justify-center">${title ? `<h2 class="text-base font-normal text-secondary-light dark:text-secondary-dark">${escape(title)}</h2>` : ``} ${desc ? `<h3 class="text-xs font-normal text-tertiary-light dark:text-tertiary-dark">${escape(desc)}</h3>` : ``} ${subDesc ? `<h3 class="text-xs font-normal text-tertiary-light dark:text-tertiary-dark">${escape(subDesc)}</h3>` : ``}</div></div></a></main>`;
});
const css = {
  code: ".project.svelte-ghm1b0{margin-bottom:1rem}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { useAnimate } from \\"./animation/animation\\";\\nimport Container from \\"../lib/components/layout/Container.svelte\\";\\nimport Heading from \\"../lib/components/sections/Heading.svelte\\";\\nimport Project from \\"../lib/components/sections/ListItem.svelte\\";\\nimport Footer from \\"../lib/components/layout/Footer.svelte\\";\\nimport { slide, fade } from \\"svelte/transition\\";\\nlet showAll = false;\\nlet projects = [\\n  {\\n    title: \\"J.P. Morgan Chase\\",\\n    subDesc: \\"2024-Now \\\\xB7 Software Engineer, Full-Stack, Global Research\\",\\n    icon: \\"assets/icons/JPMorganChase.svg\\",\\n    url: \\"/jpmorganchase\\",\\n    favourite: true\\n  },\\n  {\\n    title: \\"Set Piece\\",\\n    subDesc: \\"2024-2025 \\\\xB7 Team Training, App Dev, Data Analysis\\",\\n    icon: \\"assets/icons/SetPiece.svg\\",\\n    url: \\"/setpiece\\",\\n    favourite: true\\n  },\\n  {\\n    title: \\"Camp Lindenmere\\",\\n    subDesc: \\"2024 \\\\xB7 Teaching, Counsellor, Spirit Leader\\",\\n    icon: \\"assets/icons/CampLindenmere.svg\\",\\n    url: \\"/camp-lindenmere\\",\\n    favourite: true\\n  },\\n  {\\n    title: \\"University of Strathclyde\\",\\n    subDesc: \\"2022-Now \\\\xB7 Education, Undergraduate, Computer Science\\",\\n    icon: \\"assets/icons/UniversityOfStrathclyde.svg\\",\\n    url: \\"/university-of-strathclyde\\",\\n    favourite: true\\n  },\\n  {\\n    title: \\"Direct Distribution\\",\\n    subDesc: \\"2022-2024 \\\\xB7 Events, Marketing, Distribution\\",\\n    icon: \\"assets/icons/DirectDistribution.svg\\",\\n    url: \\"/direct-distribution\\"\\n  },\\n  {\\n    title: \\"Chibb\\",\\n    subDesc: \\"2021-2023 \\\\xB7 Game Design, Procedural Generation, iOS Dev\\",\\n    icon: \\"assets/icons/Chibb.svg\\",\\n    url: \\"/chibb\\",\\n    favourite: true\\n  },\\n  {\\n    title: \\"Minecraft\\",\\n    subDesc: \\"2017-2019 \\\\xB7 Community Building, Server Hosting, Plugin Dev\\",\\n    icon: \\"assets/icons/Minecraft.svg\\",\\n    url: \\"/minecraft\\"\\n  },\\n  {\\n    title: \\"Jordanhill School\\",\\n    subDesc: \\"2009-2022 \\\\xB7 Education, Computer Science, Volunteering\\",\\n    icon: \\"assets/icons/JordanhillSchool.svg\\",\\n    url: \\"/jordanhill-school\\"\\n  },\\n  {\\n    title: \\"Honourable Mentions\\",\\n    subDesc: \\"Additional archived or scrapped projects\\",\\n    icon: \\"assets/icons/HonourableMentions.svg\\",\\n    url: \\"/honourable-mentions\\"\\n  }\\n];\\n$: favourites = projects.filter((project) => project.favourite);\\nfunction toggleShowAll() {\\n  showAll = !showAll;\\n  setTimeout(() => {\\n    const elements = document.body.querySelectorAll(\\".project\\");\\n    elements.forEach((element) => {\\n      useAnimate(element, 0.1);\\n    });\\n  }, 0);\\n}\\n<\/script>\\n\\n<style>\\n    .project {\\n        margin-bottom: 1rem;\\n    }\\n</style>\\n\\n<body class=\\"bg-primary-light dark:bg-primary-dark\\" use:useAnimate={0.1}>\\n    <Container>\\n        <Heading\\n            title=\\"Murray Buchanan\\"\\n            desc=\\"Developer\\"\\n            links={[\\n                { url: \\"/about\\", newPage: false, title: \\"About\\" },\\n                { url: \\"mailto:hello@murrayb.com\\", newPage: false, title: \\"Connect\\" }\\n            ]}\\n            newPage={false}\\n        />\\n\\n        \\n            {#each (showAll ? projects : favourites) as { title, subDesc, icon, url } (title)}\\n            \\n                <div class=\\"project\\" transition:slide|fade={{ duration: 300 }}>\\n                    <div class=\\"animate\\">\\n                        <Project {title} {subDesc} {icon} {url} />\\n                    </div>\\n                </div>\\n            {/each}\\n\\n            <div class=\\"flex justify-center\\">\\n                <button on:click={toggleShowAll} class=\\"animate px-4 py-1 my-4 inline-flex items-center justify-center rounded-lg text-sm font-normal text-tertiary-light hover:text-secondary-light dark:text-tertiary-dark hover:dark:text-secondary-dark transition-all duration-150 hover:scale-105 ease-out cursor-pointer\\">\\n                    <svg \\n                        class=\\"w-4 h-4 transition-transform duration-300 {showAll ? 'rotate-180' : 'rotate-0'}\\" \\n                        fill=\\"none\\" \\n                        stroke=\\"currentColor\\" \\n                        viewBox=\\"0 0 24 24\\" \\n                        xmlns=\\"http://www.w3.org/2000/svg\\"\\n                    >\\n                        <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 9l-7 7-7-7\\"></path>\\n                    </svg>\\n                </button>\\n            </div>\\n        \\n        \\n        <Footer />\\n    </Container>\\n</body>"],"names":[],"mappings":"AAiFI,sBAAS,CACL,aAAa,CAAE,IACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let favourites;
  let projects = [
    {
      title: "J.P. Morgan Chase",
      subDesc: "2024-Now · Software Engineer, Full-Stack, Global Research",
      icon: "assets/icons/JPMorganChase.svg",
      url: "/jpmorganchase",
      favourite: true
    },
    {
      title: "Set Piece",
      subDesc: "2024-2025 · Team Training, App Dev, Data Analysis",
      icon: "assets/icons/SetPiece.svg",
      url: "/setpiece",
      favourite: true
    },
    {
      title: "Camp Lindenmere",
      subDesc: "2024 · Teaching, Counsellor, Spirit Leader",
      icon: "assets/icons/CampLindenmere.svg",
      url: "/camp-lindenmere",
      favourite: true
    },
    {
      title: "University of Strathclyde",
      subDesc: "2022-Now · Education, Undergraduate, Computer Science",
      icon: "assets/icons/UniversityOfStrathclyde.svg",
      url: "/university-of-strathclyde",
      favourite: true
    },
    {
      title: "Direct Distribution",
      subDesc: "2022-2024 · Events, Marketing, Distribution",
      icon: "assets/icons/DirectDistribution.svg",
      url: "/direct-distribution"
    },
    {
      title: "Chibb",
      subDesc: "2021-2023 · Game Design, Procedural Generation, iOS Dev",
      icon: "assets/icons/Chibb.svg",
      url: "/chibb",
      favourite: true
    },
    {
      title: "Minecraft",
      subDesc: "2017-2019 · Community Building, Server Hosting, Plugin Dev",
      icon: "assets/icons/Minecraft.svg",
      url: "/minecraft"
    },
    {
      title: "Jordanhill School",
      subDesc: "2009-2022 · Education, Computer Science, Volunteering",
      icon: "assets/icons/JordanhillSchool.svg",
      url: "/jordanhill-school"
    },
    {
      title: "Honourable Mentions",
      subDesc: "Additional archived or scrapped projects",
      icon: "assets/icons/HonourableMentions.svg",
      url: "/honourable-mentions"
    }
  ];
  $$result.css.add(css);
  favourites = projects.filter((project) => project.favourite);
  return `<body class="bg-primary-light dark:bg-primary-dark">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          title: "Murray Buchanan",
          desc: "Developer",
          links: [
            {
              url: "/about",
              newPage: false,
              title: "About"
            },
            {
              url: "mailto:hello@murrayb.com",
              newPage: false,
              title: "Connect"
            }
          ],
          newPage: false
        },
        {},
        {}
      )} ${each(favourites, ({ title, subDesc, icon, url }) => {
        return `<div class="project svelte-ghm1b0"><div class="animate">${validate_component(ListItem, "Project").$$render($$result, { title, subDesc, icon, url }, {}, {})}</div> </div>`;
      })} <div class="flex justify-center"><button class="animate px-4 py-1 my-4 inline-flex items-center justify-center rounded-lg text-sm font-normal text-tertiary-light hover:text-secondary-light dark:text-tertiary-dark hover:dark:text-secondary-dark transition-all duration-150 hover:scale-105 ease-out cursor-pointer"><svg class="${"w-4 h-4 transition-transform duration-300 " + escape("rotate-0", true)}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</body>`;
});
export {
  Page as default
};
