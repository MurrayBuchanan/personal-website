import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Container, S as Section_heading, F as Footer } from "../../../chunks/section-heading.js";
import { S as Section_text } from "../../../chunks/section-text.js";
import { S as Section_para } from "../../../chunks/section-para.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="bg-primary-light dark:bg-primary-dark">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section_heading, "Heading").$$render(
        $$result,
        {
          title: "Camp Lindenmere",
          desc: "2024 · Academia, Teaching, Counsellor",
          links: [
            {
              url: "https://camplindenmere.com/",
              title: "Visit Website"
            }
          ]
        },
        {},
        {}
      )}  ${validate_component(Section_para, "Paragraphs").$$render(
        $$result,
        {
          paragraphs: [
            "During the summer between my second and third year at University, I had the unforgettable opportunity to work at a Summer Camp in Pennsylvania for three months. It was an incredible experience, working alongside some truly amazing people."
          ]
        },
        {},
        {}
      )} ${validate_component(Section_text, "Paragraph").$$render(
        $$result,
        {
          title: "Computer Science Instructor",
          desc: "My primary role was as a Computer Science Instructor, where I had the chance to teach groups of children, aged 10 to 17, the foundations of programming."
        },
        {},
        {}
      )} ${validate_component(Section_text, "Paragraph").$$render(
        $$result,
        {
          title: "Counsellor",
          desc: "In addition to instructing, I also served as a Counsellor, responsible for the day-to-day well-being of the children in my group."
        },
        {},
        {}
      )} ${validate_component(Section_text, "Paragraph").$$render(
        $$result,
        {
          title: "Spirit Leader",
          desc: "Towards the end of the summer, I was honoured to be voted Spirit Leader by the camp directors and division leaders. This was a recognition of my contributions throughout the season, where I helped lead various activities and events, actively fostering enthusiasm and teamwork across the community."
        },
        {},
        {}
      )} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</body>`;
});
export {
  Page as default
};
