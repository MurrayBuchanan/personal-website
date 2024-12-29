// slideUpOnScroll.ts
export function slideUpOnScroll(
    node: HTMLElement,
    { duration = 500, threshold = 0, rootMargin = '0px 0px -100px 0px' }: 
    { duration?: number, threshold?: number, rootMargin?: string } = {}
  ) {
    const offset = 100; // Slide up from 100px below its normal position
  
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Trigger the slide-up and fade-in effect
          node.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
          node.style.transform = 'translateY(0)'; // Slide up to the normal position
          node.style.opacity = '1';
        }
      }
    };
  
    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin // Adjusts the observer to trigger when the top of the div is visible
    });
  
    // Initially hide the element by translating it down (e.g., 100px below its original position) and setting opacity to 0
    node.style.transform = `translateY(${offset}px)`; // Start from 100px below the original position
    node.style.opacity = '0';
  
    observer.observe(node);
  
    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }