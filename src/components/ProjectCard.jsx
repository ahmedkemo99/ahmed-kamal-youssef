import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4 }}
      className="break-inside-avoid mb-6"
    >
      <div className="group glass border border-slate-200/50 dark:border-slate-800/40 rounded-[1.75rem] overflow-hidden shadow-md hover:shadow-xl hover:border-violet-500/25 transition-all duration-300">
        {/* Image */}
        <div className={`relative overflow-hidden ${project.aspect || 'aspect-[4/5]'}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <button
            onClick={() => onView(project)}
            className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
          >
            View Project
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            {project.category}
          </span>
          <h3 className="text-base font-bold font-display text-slate-800 dark:text-white mt-1.5 mb-1.5 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
