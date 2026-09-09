import React from 'react';
import { motion } from 'framer-motion';

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onChange(cat)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
            active === cat
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 border border-violet-500'
              : 'glass border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-violet-500/30'
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
