"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        setOffset(scrollProgress * 100 * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}

