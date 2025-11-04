"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Logo3DProps {
  size?: number;
  className?: string;
}

export default function Logo3D({ size = 400, className = "" }: Logo3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        const rect = document.getElementById('logo-3d-container')?.getBoundingClientRect();
        if (rect) {
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          setMousePosition({ x: x / 10, y: y / 10 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  const rotateX = isHovered ? mousePosition.y : 0;
  const rotateY = isHovered ? mousePosition.x : 0;

  return (
    <div
      id="logo-3d-container"
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      {/* 3D Container */}
      <div
        className="relative w-full h-full transition-all duration-500"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Glowing Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-3xl blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-light via-primary to-primary-dark rounded-3xl blur-2xl opacity-30 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Main Logo Container */}
        <div
          className="relative w-full h-full glass rounded-3xl flex items-center justify-center p-8 shadow-2xl transition-all duration-500"
          style={{
            transform: 'translateZ(50px)',
            backdropFilter: 'blur(20px)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Inner Glow */}
          <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl blur-xl"></div>
          
          {/* Logo Image */}
          <div
            className="relative w-full h-full transition-all duration-500"
            style={{
              transform: `translateZ(100px) scale(${isHovered ? 1.1 : 1})`,
            }}
          >
            <Image
              src="/logo.png"
              alt="صوت سوريا - Syria Voice Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* 3D Shadow Layers */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl opacity-50"
            style={{
              transform: 'translateZ(-50px)',
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              transform: `translateZ(${100 + i * 20}px)`,
              animation: `float 3s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}

        {/* Corner Highlights */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary-light to-transparent rounded-tl-3xl opacity-50 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary-dark to-transparent rounded-br-3xl opacity-50 blur-xl"></div>
      </div>

      {/* Outer Glow Ring */}
      <div
        className="absolute inset-0 rounded-3xl border-2 border-primary/30 transition-all duration-500"
        style={{
          transform: `translateZ(-20px) scale(${isHovered ? 1.1 : 1})`,
          boxShadow: `0 0 60px rgba(10, 112, 64, 0.4), inset 0 0 60px rgba(10, 112, 64, 0.2)`,
        }}
      ></div>
    </div>
  );
}

