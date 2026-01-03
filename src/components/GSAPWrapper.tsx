import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPWrapperProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeDown' | 'scale' | 'stagger';
  delay?: number;
  duration?: number;
  className?: string;
  staggerAmount?: number;
}

const GSAPWrapper: React.FC<GSAPWrapperProps> = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  className = '',
  staggerAmount = 0.15,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: 'power3.out' };

    switch (animation) {
      case 'fadeUp':
        fromVars = { opacity: 0, y: 80 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'fadeDown':
        fromVars = { opacity: 0, y: -80 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'fadeLeft':
        fromVars = { opacity: 0, x: -100 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'fadeRight':
        fromVars = { opacity: 0, x: 100 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'scale':
        fromVars = { opacity: 0, scale: 0.8 };
        toVars = { ...toVars, scale: 1 };
        break;
      case 'stagger':
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration,
            stagger: staggerAmount,
            ease: 'power3.out',
            delay,
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
        return;
    }

    gsap.fromTo(element, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, [animation, delay, duration, staggerAmount]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPWrapper;
