// slideUpOnScrollOld.ts
export function slideUpOnScrollOld(
    node: HTMLElement,
    { offset = 100, duration = 500 }: { offset?: number; duration?: number } = {}
  ) {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > window.innerHeight / 4) {
        node.style.transform = `translateY(-${offset}px)`;
        node.style.opacity = '0';
      } else {
        node.style.transform = 'translateY(0)';
        node.style.opacity = '1';
      }
    };
  
    // Set the initial transition duration for the element
    node.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
  
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup the event listener on destroy
    return {
      destroy() {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }