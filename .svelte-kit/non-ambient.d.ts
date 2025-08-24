
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/animation" | "/camp-lindenmere" | "/chibb" | "/direct-distribution" | "/honourable-mentions" | "/jordanhill-school" | "/jpmorganchase" | "/linkedin" | "/minecraft" | "/setpiece" | "/university-of-strathclyde";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/animation": Record<string, never>;
			"/camp-lindenmere": Record<string, never>;
			"/chibb": Record<string, never>;
			"/direct-distribution": Record<string, never>;
			"/honourable-mentions": Record<string, never>;
			"/jordanhill-school": Record<string, never>;
			"/jpmorganchase": Record<string, never>;
			"/linkedin": Record<string, never>;
			"/minecraft": Record<string, never>;
			"/setpiece": Record<string, never>;
			"/university-of-strathclyde": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/animation" | "/animation/" | "/camp-lindenmere" | "/camp-lindenmere/" | "/chibb" | "/chibb/" | "/direct-distribution" | "/direct-distribution/" | "/honourable-mentions" | "/honourable-mentions/" | "/jordanhill-school" | "/jordanhill-school/" | "/jpmorganchase" | "/jpmorganchase/" | "/linkedin" | "/linkedin/" | "/minecraft" | "/minecraft/" | "/setpiece" | "/setpiece/" | "/university-of-strathclyde" | "/university-of-strathclyde/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/assets/.DS_Store" | "/assets/animations/animation.json" | "/assets/animations/animation.lottie" | "/assets/icons/BuchananBarbers.svg" | "/assets/icons/CampLindenmere.svg" | "/assets/icons/Chibb.svg" | "/assets/icons/Conquer.svg" | "/assets/icons/DirectDistribution.svg" | "/assets/icons/HonourableMentions.svg" | "/assets/icons/JPMorganChase.svg" | "/assets/icons/JordanhillSchool.svg" | "/assets/icons/LittleCheese.svg" | "/assets/icons/Minecraft.svg" | "/assets/icons/Placeholder.svg" | "/assets/icons/SetPiece.svg" | "/assets/icons/UniversityOfStrathclyde.svg" | "/assets/images/jpmorganchase.jpg" | "/assets/videos/chibb.mp4" | "/favicon.png" | string & {};
	}
}