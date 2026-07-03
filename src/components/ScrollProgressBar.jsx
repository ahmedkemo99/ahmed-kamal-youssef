import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollProgressBar - A thin bar at the top of the viewport that shows
 * how far down the user has scrolled on the page.
 */
export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
        style={{ width: `${progress}%` }}
        transition={{ ease: 'linear' }}
      />
    </div>
  );
}
