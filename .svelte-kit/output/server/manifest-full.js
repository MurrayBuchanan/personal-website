export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/animations/animation.json","assets/animations/animation.lottie","assets/icons/BuchananBarbers.svg","assets/icons/CampLindenmere.svg","assets/icons/Chibb.svg","assets/icons/Conquer.svg","assets/icons/DirectDistribution.svg","assets/icons/HonourableMentions.svg","assets/icons/JPMorganChase.svg","assets/icons/JordanhillSchool.svg","assets/icons/LittleCheese.svg","assets/icons/Minecraft.svg","assets/icons/Placeholder.svg","assets/icons/SetPiece.svg","assets/icons/UniversityOfStrathclyde.svg","assets/images/jpmorganchase.jpg","assets/videos/chibb.mp4","favicon.png"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml",".jpg":"image/jpeg",".mp4":"video/mp4",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BA5fxVL2.js",app:"_app/immutable/entry/app.Doo_GCpt.js",imports:["_app/immutable/entry/start.BA5fxVL2.js","_app/immutable/chunks/Dq17lXNq.js","_app/immutable/chunks/BagziAXb.js","_app/immutable/entry/app.Doo_GCpt.js","_app/immutable/chunks/BagziAXb.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/camp-lindenmere",
				pattern: /^\/camp-lindenmere\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/chibb",
				pattern: /^\/chibb\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/direct-distribution",
				pattern: /^\/direct-distribution\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/honourable-mentions",
				pattern: /^\/honourable-mentions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/jordanhill-school",
				pattern: /^\/jordanhill-school\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/jpmorganchase",
				pattern: /^\/jpmorganchase\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/linkedin",
				pattern: /^\/linkedin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/minecraft",
				pattern: /^\/minecraft\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/setpiece",
				pattern: /^\/setpiece\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/university-of-strathclyde",
				pattern: /^\/university-of-strathclyde\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
