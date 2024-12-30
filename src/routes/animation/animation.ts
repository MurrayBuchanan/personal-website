export function useAnimate(node: HTMLElement, delayIncrement = 0.05) {
  const elements = node.querySelectorAll('.animate') as NodeListOf<HTMLElement>;

  elements.forEach((element, index) => {
    element.classList.remove('animated');
    void element.offsetWidth; // Trigger reflow to restart the animation
    element.style.opacity = '0';
    element.style.animation = `slide-up 0.5s ease forwards`;
    element.style.animationDelay = `${index * delayIncrement}s`;
    element.classList.add('animated');
  });
}