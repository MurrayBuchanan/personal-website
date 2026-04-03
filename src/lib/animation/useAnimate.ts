import {
	SLIDE_UP_DURATION_MS,
	SLIDE_UP_EASING_CSS,
	SLIDE_UP_KEYFRAME_NAME,
} from './constants';

type UseAnimateOptions = {
	delayIncrement?: number;
	/** When false, only the first scan runs. Home list toggle uses `true` so new rows get the same stagger as initial load. */
	observeMutations?: boolean;
	/**
	 * Bump this (e.g. on home list collapse) to run slide-up on `<footer>` again without remounting
	 * (remounting breaks stagger timing and resets nested UI like the theme toggle).
	 */
	footerReplay?: number;
};

function normalizeOptions(
	arg?: number | UseAnimateOptions
): { delayIncrement: number; observeMutations: boolean; footerReplay?: number } {
	if (arg === undefined) return { delayIncrement: 0.05, observeMutations: true };
	if (typeof arg === 'number') return { delayIncrement: arg, observeMutations: true };
	return {
		delayIncrement: arg.delayIncrement ?? 0.05,
		observeMutations: arg.observeMutations !== false,
		footerReplay: arg.footerReplay,
	};
}

export function useAnimate(node: HTMLElement, arg?: number | UseAnimateOptions) {
	const initial = normalizeOptions(arg);
	let { delayIncrement, observeMutations } = initial;
	let lastFooterReplay = initial.footerReplay ?? 0;
	const seen = new WeakSet<Element>();

	function finishEntrance(el: HTMLElement) {
		el.classList.remove('animate', 'animated');
		el.style.removeProperty('animation');
		el.style.removeProperty('animation-delay');
		el.style.removeProperty('opacity');
		el.style.removeProperty('transform');
	}

	function apply(el: HTMLElement, index: number) {
		const instant =
			typeof window !== 'undefined' &&
			window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

		if (instant) {
			el.classList.remove('animate', 'animated');
			el.style.removeProperty('opacity');
			return;
		}

		el.classList.remove('animated');
		void el.offsetWidth;
		el.style.opacity = '0';
		el.style.animation = `${SLIDE_UP_KEYFRAME_NAME} ${SLIDE_UP_DURATION_MS}ms ${SLIDE_UP_EASING_CSS} forwards`;
		el.style.animationDelay = `${index * delayIncrement}s`;
		el.classList.add('animated');

		function onEnd(e: AnimationEvent) {
			if (e.target !== el) return;
			if (e.animationName !== SLIDE_UP_KEYFRAME_NAME) return;
			finishEntrance(el);
		}
		el.addEventListener('animationend', onEnd, { once: true });
	}

	function scan() {
		const elements = node.querySelectorAll('.animate');
		let staggerIndex = 0;
		elements.forEach((el) => {
			if (seen.has(el)) return;
			if (el.closest('[data-skip-stagger]')) return;
			seen.add(el);
			apply(el as HTMLElement, staggerIndex);
			staggerIndex += 1;
		});
	}

	function replayFooterEntrance() {
		const run = () => {
			const footer = node.querySelector('footer');
			if (!(footer instanceof HTMLElement)) return;
			seen.delete(footer);
			finishEntrance(footer);
			footer.classList.add('animate');
			scan();
		};
		if (typeof requestAnimationFrame !== 'undefined') {
			requestAnimationFrame(run);
		} else {
			run();
		}
	}

	scan();
	if (typeof requestAnimationFrame !== 'undefined') {
		requestAnimationFrame(() => scan());
	}

	if (!observeMutations) {
		return {
			update(newArg?: number | UseAnimateOptions) {
				const next = normalizeOptions(newArg);
				if (
					next.footerReplay !== undefined &&
					next.footerReplay !== lastFooterReplay
				) {
					lastFooterReplay = next.footerReplay;
					replayFooterEntrance();
				}
			},
			destroy() {},
		};
	}

	const observer = new MutationObserver(() => {
		scan();
	});
	observer.observe(node, { childList: true, subtree: true });

	return {
		update(newArg?: number | UseAnimateOptions) {
			const next = normalizeOptions(newArg);
			delayIncrement = next.delayIncrement;
			if (
				next.footerReplay !== undefined &&
				next.footerReplay !== lastFooterReplay
			) {
				lastFooterReplay = next.footerReplay;
				replayFooterEntrance();
			}
		},
		destroy() {
			observer.disconnect();
		},
	};
}
