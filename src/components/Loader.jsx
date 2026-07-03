import React from 'react';
import { motion } from 'framer-motion';

/**
 * Loader - Premium initial loading screen with a pulse-glow animation.
 * Fades out once the site is ready.
 */
export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#08080c]"
    >
      {/* Glow orbs */}
      <div className="absolute w-72 h-72 rounded-full bg-violet-600/20 blur-[80px] animate-pulse-slow" />
      <div className="absolute w-48 h-48 rounded-full bg-cyan-500/15 blur-[60px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Center monogram */}
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-violet-500/40"
        >
          <span className="text-white font-black text-3xl font-display">A</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="text-white font-bold text-lg tracking-widest font-display">Ahmed Kamal</p>
          <p className="text-slate-400 text-xs tracking-[0.25em] uppercase font-sans">Software Engineer</p>
        </motion.div>

        {/* Animated bar loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-1.5 mt-2"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ scaleY: [0.4, 1.4, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
              className="w-1.5 h-4 rounded-full bg-gradient-to-b from-violet-500 to-cyan-400"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
