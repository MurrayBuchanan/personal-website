export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/banners/CampLindenmere.jpg","assets/banners/JPMorganChase.jpg","assets/banners/chibb.png","assets/experience-icons/distribution.png","assets/experience-icons/google.png","assets/experience-icons/jordanhill.png","assets/experience-icons/jpmc.png","assets/experience-icons/lindenmere.png","assets/experience-icons/strathclyde.png","assets/experience-icons/virginmedia.png","assets/placeholder.png","assets/project-logos/virgilabloh.svg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BnJb6eEw.js","app":"_app/immutable/entry/app.AIh2oXQi.js","imports":["_app/immutable/entry/start.BnJb6eEw.js","_app/immutable/chunks/entry.BVHcywJD.js","_app/immutable/chunks/scheduler.D5bqyAYf.js","_app/immutable/entry/app.AIh2oXQi.js","_app/immutable/chunks/scheduler.D5bqyAYf.js","_app/immutable/chunks/index.D_QftNlX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/CampLindenmere",
				pattern: /^\/CampLindenmere\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/JPMorganChaseCo",
				pattern: /^\/JPMorganChaseCo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
