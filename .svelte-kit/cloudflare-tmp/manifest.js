export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/Animation.json","assets/Animation.lottie","assets/banners/CampLindenmere.jpg","assets/banners/GoogleDeveloperGroup.jpg","assets/banners/JPMorganChase.jpg","assets/icons/BuchananBarbers.svg","assets/icons/CampLindenmere.svg","assets/icons/Chibb.svg","assets/icons/Conquer.svg","assets/icons/DirectDistribution.svg","assets/icons/HonourableMentions.svg","assets/icons/JPMorganChase.svg","assets/icons/JordanhillSchool.svg","assets/icons/LittleCheese.svg","assets/icons/Minecraft.svg","assets/icons/Placeholder.svg","assets/icons/SetPiece.svg","assets/icons/UniversityOfStrathclyde.svg","favicon.png"]),
	mimeTypes: {".json":"application/json",".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B3O9_itw.js","app":"_app/immutable/entry/app.xKnleQS7.js","imports":["_app/immutable/entry/start.B3O9_itw.js","_app/immutable/chunks/entry.LbtqBJ_K.js","_app/immutable/chunks/scheduler.DCOx6Hm2.js","_app/immutable/entry/app.xKnleQS7.js","_app/immutable/chunks/scheduler.DCOx6Hm2.js","_app/immutable/chunks/index.DiYfCPHt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js'))
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
				id: "/About",
				pattern: /^\/About\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/CampLindenmere",
				pattern: /^\/CampLindenmere\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Chibb",
				pattern: /^\/Chibb\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Contact",
				pattern: /^\/Contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/DirectDistribution",
				pattern: /^\/DirectDistribution\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/HonourableMentions",
				pattern: /^\/HonourableMentions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/JPMorganChase",
				pattern: /^\/JPMorganChase\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/JordanhillSchool",
				pattern: /^\/JordanhillSchool\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Minecraft",
				pattern: /^\/Minecraft\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/SetPiece",
				pattern: /^\/SetPiece\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/UniversityOfStrathclyde",
				pattern: /^\/UniversityOfStrathclyde\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
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
