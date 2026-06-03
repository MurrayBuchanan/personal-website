type UseAnimateOptions = {
    delayIncrement?: number;
    observeMutations?: boolean;
};

type UseAnimateArg = number | UseAnimateOptions | undefined;

function normalizeOptions(
    arg?: UseAnimateArg
): { delayIncrement: number; observeMutations: boolean } {
    if (arg === undefined) return { delayIncrement: 0.05, observeMutations: true };
    if (typeof arg === 'number') return { delayIncrement: arg, observeMutations: true };
    return {
        delayIncrement: arg.delayIncrement ?? 0.05,
        observeMutations: arg.observeMutations !== false,
    };
}

function finishEntrance(el: HTMLElement) {
    el.classList.remove('animate', 'animated');
    el.style.removeProperty('animation');
    el.style.removeProperty('animation-delay');
    el.style.removeProperty('opacity');
    el.style.removeProperty('transform');
}

export function useAnimate(node: HTMLElement, arg?: UseAnimateArg) {
    let { observeMutations } = normalizeOptions(arg);
    const seen = new WeakSet<Element>();

    function scan() {
        node.querySelectorAll('.animate').forEach((el) => {
            if (seen.has(el)) return;
            if (el.closest('[data-skip-stagger]')) return;
            seen.add(el);
            finishEntrance(el as HTMLElement);
        });
    }

    scan();
    if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => scan());
    }

    if (!observeMutations) {
        return {
            update(newArg?: UseAnimateArg) {
                observeMutations = normalizeOptions(newArg).observeMutations;
            },
            destroy() {},
        };
    }

    const observer = new MutationObserver(() => scan());
    observer.observe(node, { childList: true, subtree: true });

    return {
        update(newArg?: UseAnimateArg) {
            observeMutations = normalizeOptions(newArg).observeMutations;
        },
        destroy() {
            observer.disconnect();
        },
    };
}
