
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <title>Murray Buchanan</title>\n\n    <!-- SEO -->\n    <meta name=\"description\" content=\"Portfolio of Murray Buchanan – Developer\" />\n    <meta name=\"author\" content=\"Murray Buchanan\" />\n    <meta name=\"robots\" content=\"index, follow\" />\n    <link rel=\"canonical\" href=\"https://murrayb.com/\" />\n\n    <!-- Icons -->\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon.png\" alt=\"Image of Murray Buchanan\" />\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon.png\" alt=\"Image of Murray Buchanan\" />\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/favicon.png\" alt=\"Image of Murray Buchanan\" />\n    <meta name=\"theme-color\" content=\"#ffffff\" />\n    <meta name=\"msapplication-TileColor\" content=\"#ffffff\" />\n    <meta name=\"msapplication-TileImage\" content=\"/favicon.png\" alt=\"Image of Murray Buchanan\" />\n\n    <!-- Social: Open Graph -->\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"og:url\" content=\"https://murrayb.com/\" />\n    <meta property=\"og:title\" content=\"Murray Buchanan | Developer\" />\n    <meta property=\"og:description\" content=\"Explore the projects and experience of Murray Buchanan, specializing in full-stack development.\" />\n    <meta property=\"og:image\" content=\"https://murrayb.com/favicon.png\" />\n\n    <!-- Social: Twitter -->\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:title\" content=\"Murray Buchanan | Developer\" />\n    <meta name=\"twitter:description\" content=\"Explore the projects and experience of Murray Buchanan, specializing in full-stack development.\" />\n    <meta name=\"twitter:image\" content=\"https://murrayb.com/favicon.png\" />\n\n    <!-- Referrer Policy -->\n    <meta name=\"referrer\" content=\"no-referrer-when-downgrade\" />\n\n    <!-- Schema.org -->\n    <script type=\"application/ld+json\">\n    {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Person\",\n      \"name\": \"Murray Buchanan\",\n      \"url\": \"https://murrayb.com\",\n      \"jobTitle\": \"Software Engineer\",\n      \"sameAs\": [\n        \"https://www.linkedin.com/in/murray-buchanan-33519220a/\",\n        \"https://github.com/MurrayBuchanan\"\n      ]\n    }\n    </script>\n\n    <!-- SvelteKit Head -->\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "580uyg"
};

export async function get_hooks() {
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

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
