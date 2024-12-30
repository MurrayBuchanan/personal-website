import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Container, F as Footer } from "../../../chunks/container.js";
import { S as Section_heading, a as Section_para, c as Section_media, b as Section_text } from "../../../chunks/section-heading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="bg-primary-light dark:bg-secondary-dark">${validate_component(Container, "Container").$$render($$result, { custom: "mt-48" }, {}, {
    default: () => {
      return `${validate_component(Section_heading, "SectionHeading").$$render(
        $$result,
        {
          title: "JP Morgan Chase & Co",
          desc: "Now · Work, Analyst, Python",
          ",": true,
          links: [
            {
              url: "https://www.jpmorganchase.com/",
              title: "Visit Website"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Section_para, "SectionPara").$$render(
        $$result,
        {
          paragraphs: [
            "Following my second year, I was invited to be a Summer Analyst for the 2025 Cohort. "
          ]
        },
        {},
        {}
      )} ${validate_component(Section_media, "SectionMedia").$$render(
        $$result,
        {
          image: "static/assets/banners/JPMorganChase.jpg",
          title: "Updated",
          desc: "Without depth sensor, we want to use eye saccades as a form of identification."
        },
        {},
        {}
      )} ${validate_component(Section_text, "SectionText").$$render(
        $$result,
        {
          title: "Insight Program",
          desc: "Keep your head still and take a photo of your eyes from below, now from above. That's the premise."
        },
        {},
        {}
      )} ${validate_component(Section_text, "SectionText").$$render(
        $$result,
        {
          title: "Internship Program",
          desc: "Using head and phone position, we can transform these image matrices - better (more) training data."
        },
        {},
        {}
      )}`;
    }
  })}  ${validate_component(Container, "Container").$$render($$result, { custom: "mt-24" }, {}, {
    default: () => {
      return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</body>`;
});
export {
  Page as default
};
