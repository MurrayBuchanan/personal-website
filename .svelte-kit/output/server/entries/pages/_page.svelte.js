import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each } from "../../chunks/ssr.js";
import { C as Container, H as Heading, F as Footer } from "../../chunks/Heading.js";
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "" } = $$props;
  let { title = "" } = $$props;
  let { desc = "" } = $$props;
  let { subDesc = "" } = $$props;
  let { url = "" } = $$props;
  const favourite = false;
  let { subdued = false } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.subDesc === void 0 && $$bindings.subDesc && subDesc !== void 0) $$bindings.subDesc(subDesc);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.favourite === void 0 && $$bindings.favourite && favourite !== void 0) $$bindings.favourite(favourite);
  if ($$props.subdued === void 0 && $$bindings.subdued && subdued !== void 0) $$bindings.subdued(subdued);
  return `  <div class="${"relative flex items-start overflow-hidden rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 " + escape(subdued ? "opacity-[0.78] dark:opacity-[0.82]" : "", true)}"><a${add_attribute("href", url, 0)} class="group relative block w-full cursor-pointer touch-manipulation outline-none transition-colors duration-100 ease-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary-light/30 dark:focus-visible:ring-secondary-dark/40 rounded-xl"><div class="grid min-w-0 grid-cols-[2rem_1fr] items-center gap-x-3 sm:grid-cols-[2.25rem_1fr] sm:gap-x-3.5">${icon ? `<div class="flex w-full items-center justify-center" aria-hidden="true"><img${add_attribute("src", icon, 0)} alt="" style="stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;" class="h-6 w-6 object-contain opacity-[0.68] transition-opacity duration-100 ease-out group-hover:opacity-100 dark:opacity-[0.55] dark:invert dark:brightness-100 dark:group-hover:opacity-100 sm:h-7 sm:w-7"></div>` : `<div class="min-w-0"></div>`} <div class="flex min-w-0 flex-col gap-0.5 sm:gap-0.5">${title ? `<h2 class="text-base font-medium leading-snug tracking-[-0.02em] text-secondary-light dark:text-secondary-dark sm:text-lg">${escape(title)}</h2>` : ``} ${desc ? `<p class="font-sans text-[0.8125rem] font-normal leading-snug tracking-normal text-neutral-600 transition-colors duration-100 ease-out group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white sm:text-sm">${escape(desc)}</p>` : ``} ${subDesc ? `<p class="font-sans text-[0.8125rem] font-normal leading-snug tracking-normal text-neutral-600 transition-colors duration-100 ease-out group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white sm:text-sm">${escape(subDesc)}</p>` : ``}</div></div></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let featuredProjects;
  let expandedFlat;
  const sectionOrder = ["work", "education", "projects"];
  let showAll = false;
  let projects = [
    {
      title: "J.P. Morgan Chase",
      subDesc: "Software Engineer • Full-Stack • Global Research",
      icon: "assets/icons/JPMorganChase.svg",
      url: "/jpmorganchase",
      category: "work",
      featured: true,
      featuredRank: 0
    },
    {
      title: "Set Piece",
      subDesc: "Team Training • App Dev • Data Analysis",
      icon: "assets/icons/SetPiece.svg",
      url: "/setpiece",
      category: "work",
      featured: true,
      featuredRank: 1
    },
    {
      title: "Camp Lindenmere",
      subDesc: "Teaching • Counsellor • Spirit Leader",
      icon: "assets/icons/CampLindenmere.svg",
      url: "/camp-lindenmere",
      category: "work"
    },
    {
      title: "Direct Distribution",
      subDesc: "Events • Marketing • Distribution",
      icon: "assets/icons/DirectDistribution.svg",
      url: "/direct-distribution",
      category: "work",
      subdued: true
    },
    {
      title: "University of Strathclyde",
      subDesc: "Education • Undergraduate • Computer Science",
      icon: "assets/icons/UniversityOfStrathclyde.svg",
      url: "/university-of-strathclyde",
      category: "education",
      featured: true,
      featuredRank: 2
    },
    {
      title: "Jordanhill School",
      subDesc: "Education • Computer Science • Volunteering",
      icon: "assets/icons/JordanhillSchool.svg",
      url: "/jordanhill-school",
      category: "education",
      subdued: true
    },
    {
      title: "Chibb",
      subDesc: "Game Design • Procedural Generation • iOS Dev",
      icon: "assets/icons/Chibb.svg",
      url: "/chibb",
      category: "projects"
    },
    {
      title: "Minecraft",
      subDesc: "Community Building • Server Hosting • Plugin Dev",
      icon: "assets/icons/Minecraft.svg",
      url: "/minecraft",
      category: "projects",
      subdued: true
    },
    {
      title: "Honourable Mentions",
      subDesc: "Additional archived or scrapped projects",
      icon: "assets/icons/HonourableMentions.svg",
      url: "/honourable-mentions",
      category: "projects",
      subdued: true
    }
  ];
  featuredProjects = projects.filter((p) => p.featured).sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));
  expandedFlat = (() => {
    const out = [];
    for (const cat of sectionOrder) {
      const rows = projects.filter((p) => p.category === cat);
      if (!rows.length) continue;
      out.push({ kind: "label", cat, key: `label-${cat}` });
      for (const project of rows) {
        out.push({
          kind: "row",
          project,
          key: `row-${project.title}`
        });
      }
    }
    return out;
  })();
  expandedFlat.length;
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  return `<div class="min-h-screen bg-primary-light dark:bg-primary-dark">${validate_component(Container, "Container").$$render($$result, { custom: "!pt-2 sm:!pt-3" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          title: "Murray Buchanan",
          desc: "Software Engineer",
          intro: "I build full-stack products across research, apps, and community platforms.",
          graphic: "/assets/images/banner.svg",
          graphicAlt: "",
          newPage: false
        },
        {},
        {}
      )} <div role="list" class="-mt-1 grid w-full grid-cols-1 overflow-x-clip sm:-mt-0">${`<div class="col-start-1 row-start-1 z-[1] flex min-w-0 flex-col gap-0.5 self-start justify-self-stretch"><p class="animate mb-1.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400" data-svelte-h="svelte-1k3b2w0">Featured</p> ${each(featuredProjects, (project) => {
        return `<div class="animate" role="listitem">${validate_component(ListItem, "Project").$$render(
          $$result,
          {
            title: project.title,
            subDesc: project.subDesc,
            icon: project.icon,
            url: project.url
          },
          {},
          {}
        )} </div>`;
      })}</div>`}</div> <div class="animate mt-3 w-full sm:mt-4"><div class="flex flex-col items-center gap-0.5"><button type="button" class="font-sans inline-flex cursor-pointer items-center justify-center gap-2 border-0 bg-transparent px-0 py-0.5 text-xs font-normal text-neutral-500 no-underline transition-colors duration-100 ease-out hover:text-neutral-950 sm:text-sm dark:text-neutral-400 dark:hover:text-white"${add_attribute("aria-expanded", showAll, 0)}><span>${escape("Browse everything")}</span> <svg class="${"h-4 w-4 transition-transform duration-200 ease-out " + escape("rotate-0", true)}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export {
  Page as default
};
