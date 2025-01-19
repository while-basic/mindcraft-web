'use client';

import { useEffect } from 'react';

function createParticle(e: MouseEvent) {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.backgroundColor = 'white';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '9999';
  particle.style.transform = `translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`;
  particle.style.transition = 'all 0.5s ease-out';
  particle.style.opacity = '0.8';
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.style.opacity = '0';
    particle.style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px)`;
    setTimeout(() => particle.remove(), 500);
  }, 50);
}

export default function MouseParticles() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        createParticle(e);
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return null;
} 