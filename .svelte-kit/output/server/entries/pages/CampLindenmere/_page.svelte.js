import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Container, F as Footer } from "../../../chunks/container.js";
import { S as Section_heading, a as Section_para, b as Section_text, c as Section_media } from "../../../chunks/section-heading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="bg-primary-light dark:bg-secondary-dark">${validate_component(Container, "Container").$$render($$result, { custom: "mt-48" }, {}, {
    default: () => {
      return `${validate_component(Section_heading, "SectionHeading").$$render(
        $$result,
        {
          title: "Camp Lindenmere",
          desc: "2024 · Academia, Teaching, Java, React, UI, UX",
          links: [
            {
              url: "https://example.com",
              title: "Visit Website"
            },
            {
              url: "https://another.com",
              title: "Materials"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Section_para, "SectionPara").$$render(
        $$result,
        {
          paragraphs: [
            "During my time at University, I was invited to teach at a Summer Camp in Penneslavania. This was an unforgettable experience, where I got to stay for 3 months and work alongside like-minded individuals.",
            "In this role, I was able to do a lot of reading, where I spend approximately 250 hours reading about Rust and work with different statically typed languages."
          ]
        },
        {},
        {}
      )} ${validate_component(Section_text, "SectionText").$$render(
        $$result,
        {
          title: "Initial Program",
          desc: "Keep your head still and take a photo of your eyes from below, now from above. That's the premise."
        },
        {},
        {}
      )} ${validate_component(Section_text, "SectionText").$$render(
        $$result,
        {
          title: "Updated Course",
          desc: "Using head and phone position, we can transform these image matrices - better (more) training data."
        },
        {},
        {}
      )} ${validate_component(Section_text, "SectionText").$$render(
        $$result,
        {
          title: "Leadership",
          desc: "Without depth sensor, we want to use eye saccades as a form of identification."
        },
        {},
        {}
      )} ${validate_component(Section_media, "SectionMedia").$$render(
        $$result,
        {
          image: "static/assets/banners/CampLindenmere.jpg",
          title: "Updated",
          desc: "Without depth sensor, we want to use eye saccades as a form of identification."
        },
        {},
        {}
      )} <div class="grid grid-cols-2 gap-8 pb-32">${validate_component(Section_media, "SectionMedia").$$render(
        $$result,
        {
          title: "Updated",
          desc: "Without depth sensor, we want to use eye saccades as a form of identification."
        },
        {},
        {}
      )} ${validate_component(Section_media, "SectionMedia").$$render(
        $$result,
        {
          title: "Updated",
          desc: "Without depth sensor, we want to use eye saccades as a form of identification."
        },
        {},
        {}
      )} ${validate_component(Section_media, "SectionMedia").$$render(
        $$result,
        {
          title: "Updated",
          desc: "Without depth sensor, we want to use eye saccades as a form of identification."
        },
        {},
        {}
      )} ${validate_component(Section_media, "SectionMedia").$$render(
        $$result,
        {
          title: "Updated",
          desc: "Without depth sensor, we want to use eye saccades as a form of identification."
        },
        {},
        {}
      )}</div>`;
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
