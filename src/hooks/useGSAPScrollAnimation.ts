import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  direction?: 'left' | 'right' | 'up' | 'down' | 'fade';
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
}

export const useGSAPScrollAnimation = (
  options: AnimationOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    direction = 'up',
    duration = 1,
    delay = 0,
    stagger = 0.1,
    ease = 'power3.out',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    
    // Set initial states
    let fromVars: gsap.TweenVars = { opacity: 0 };
    
    switch (direction) {
      case 'left':
        fromVars = { opacity: 0, x: -100 };
        break;
      case 'right':
        fromVars = { opacity: 0, x: 100 };
        break;
      case 'up':
        fromVars = { opacity: 0, y: 80 };
        break;
      case 'down':
        fromVars = { opacity: 0, y: -80 };
        break;
      case 'fade':
        fromVars = { opacity: 0, scale: 0.95 };
        break;
    }

    gsap.set(children, fromVars);

    gsap.to(children, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, duration, delay, stagger, ease]);

  return ref;
};

// Navbar animation hook
export const useNavbarAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const navItems = element.querySelectorAll('.nav-item');
    
    gsap.fromTo(
      navItems,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3,
      }
    );
  }, []);

  return ref;
};

// Scroll-triggered section animation
export const useSectionAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Animate heading
    const heading = element.querySelector('.section-heading');
    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Animate content from sides
    const leftContent = element.querySelectorAll('.animate-from-left');
    const rightContent = element.querySelectorAll('.animate-from-right');

    leftContent.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    rightContent.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

export default useGSAPScrollAnimation;
