import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#0a0a12] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
          >
            {/* Modal image */}
            <div className="relative flex-shrink-0 h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  {project.category}
                </span>
                <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white mt-1">
                  {project.title}
                </h3>
              </div>

              <div>
                <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 mb-2">Overview</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 mb-3">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && project.link !== '#' && (
                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm flex items-center gap-2 hover:opacity-90 shadow-md shadow-violet-500/20 transition-all"
                  >
                    <ExternalLink size={16} />
                    View Full Project
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
