// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import { KVNamespace, DurableObjectNamespace } from '@cloudflare/workers-types';

declare global {
	namespace App {
		interface Platform {
			env?: {
				YOUR_KV_NAMESPACE: KVNamespace;
				YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};
		}
	}
}

declare module '*.mp4' {
	const src: string;
	export default src;
}

declare module '*.mp4?url' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpg?url' {
	const src: string;
	export default src;
}

export {};