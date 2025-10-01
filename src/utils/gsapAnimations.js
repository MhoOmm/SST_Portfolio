import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element, delay = 0) => {
  return gsap.fromTo(element, 
    { 
      y: 50, 
      opacity: 0 
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out"
    }
  );
};

export const staggerAnimation = (elements, delay = 0.1) => {
  return gsap.fromTo(elements,
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: delay,
      ease: "power2.out"
    }
  );
};

export const slideInFromLeft = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      x: -100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

export const slideInFromRight = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      x: 100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

export const scaleIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      scale: 0.8,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: "back.out(1.7)"
    }
  );
};

export const textReveal = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay,
      ease: "power4.out"
    }
  );
};

export const parallaxScroll = (element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};
