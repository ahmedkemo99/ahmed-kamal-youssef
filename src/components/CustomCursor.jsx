import React, { useEffect, useRef } from 'react';

/**
 * CustomCursor - Adds a glowing cursor follower effect for premium UX.
 * Only renders on non-touch devices.
 */
export default function CustomCursor() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
