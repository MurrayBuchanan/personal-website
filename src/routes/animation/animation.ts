type UseAnimateOptions = {
  delayIncrement?: number;
  /** When false, only the first scan runs. Home list toggle uses `true` so new rows get the same stagger as initial load. */
  observeMutations?: boolean;
};

function normalizeOptions(
  arg?: number | UseAnimateOptions
): { delayIncrement: number; observeMutations: boolean } {
  if (arg === undefined) return { delayIncrement: 0.05, observeMutations: true };
  if (typeof arg === 'number') return { delayIncrement: arg, observeMutations: true };
  return {
    delayIncrement: arg.delayIncrement ?? 0.05,
    observeMutations: arg.observeMutations !== false,
  };
}

export function useAnimate(node: HTMLElement, arg?: number | UseAnimateOptions) {
  const { delayIncrement, observeMutations } = normalizeOptions(arg);
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
    el.style.animation = `slide-up 0.58s cubic-bezier(0.22, 1, 0.36, 1) forwards`;
    el.style.animationDelay = `${index * delayIncrement}s`;
    el.classList.add('animated');

    function onEnd(e: AnimationEvent) {
      if (e.target !== el) return;
      if (e.animationName !== 'slide-up') return;
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

  scan();
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(() => scan());
  }

  if (!observeMutations) {
    return { destroy() {} };
  }

  const observer = new MutationObserver(() => {
    scan();
  });
  observer.observe(node, { childList: true, subtree: true });

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
