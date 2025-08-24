import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
import { a as afterUpdate } from "./ssr2.js";
import "./environment.js";
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      {
        data: data_0,
        params: page.params,
        this: components[0]
      },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            {
              data: data_1,
              form,
              params: page.params,
              this: components[1]
            },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      {
        data: data_0,
        form,
        params: page.params,
        this: components[0]
      },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <title>Murray Buchanan</title>\n\n    <!-- SEO -->\n    <meta name="description" content="Portfolio of Murray Buchanan – Developer" />\n    <meta name="author" content="Murray Buchanan" />\n    <meta name="robots" content="index, follow" />\n    <link rel="canonical" href="https://murrayb.com/" />\n\n    <!-- Icons -->\n    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" alt="Image of Murray Buchanan" />\n    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" alt="Image of Murray Buchanan" />\n    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" alt="Image of Murray Buchanan" />\n    <meta name="theme-color" content="#ffffff" />\n    <meta name="msapplication-TileColor" content="#ffffff" />\n    <meta name="msapplication-TileImage" content="/favicon.png" alt="Image of Murray Buchanan" />\n\n    <!-- Social: Open Graph -->\n    <meta property="og:type" content="website" />\n    <meta property="og:url" content="https://murrayb.com/" />\n    <meta property="og:title" content="Murray Buchanan | Developer" />\n    <meta property="og:description" content="Explore the projects and experience of Murray Buchanan, specializing in full-stack development." />\n    <meta property="og:image" content="https://murrayb.com/favicon.png" />\n\n    <!-- Social: Twitter -->\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="Murray Buchanan | Developer" />\n    <meta name="twitter:description" content="Explore the projects and experience of Murray Buchanan, specializing in full-stack development." />\n    <meta name="twitter:image" content="https://murrayb.com/favicon.png" />\n\n    <!-- Referrer Policy -->\n    <meta name="referrer" content="no-referrer-when-downgrade" />\n\n    <!-- Schema.org -->\n    <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "Person",\n      "name": "Murray Buchanan",\n      "url": "https://murrayb.com",\n      "jobTitle": "Software Engineer",\n      "sameAs": [\n        "https://www.linkedin.com/in/murray-buchanan-33519220a/",\n        "https://github.com/MurrayBuchanan"\n      ]\n    }\n    <\/script>\n\n    <!-- SvelteKit Head -->\n    ' + head + '\n  </head>\n  <body data-sveltekit-preload-data="hover">\n    <div style="display: contents">' + body + "</div>\n  </body>\n</html>",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "580uyg"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init,
    reroute,
    transport
  };
}
export {
  set_private_env as a,
  set_public_env as b,
  set_safe_public_env as c,
  set_read_implementation as d,
  set_manifest as e,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  safe_public_env as s
};
