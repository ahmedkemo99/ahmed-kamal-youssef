import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import DesignTools from './DesignTools';
import {
  DESIGN_CATEGORIES,
  GRAPHIC_DESIGN_PROJECTS,
} from '../data/graphicDesignProjects';

export default function GraphicDesign() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? GRAPHIC_DESIGN_PROJECTS
      : GRAPHIC_DESIGN_PROJECTS.filter(
          (p) => p.category === activeCategory
        );

  const scrollToGallery = () => {
    document
      .getElementById('graphic-design-gallery')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="graphic-design"
      className="w-full min-h-screen py-28 relative overflow-hidden bg-slate-50/40 dark:bg-slate-950/40"
    >
      {/* Ambient background orbs */}
      <div className="absolute top-0 right-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col items-center justify-center text-center px-6 mb-20"
      >
        {/* Small title */}
        <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
          Portfolio
        </p>

        {/* Main title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-5">
          Graphic Design
        </h2>

        {/* Short description */}
        <p className="w-full max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Visual identities, creative designs, and digital experiences
          crafted with purpose.
        </p>

        {/* Long description */}
        <p className="w-full max-w-3xl text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
          This section showcases my graphic design projects and visual work —
          from brand identities and social content to posters and marketing materials. Each project reflects a focus on clarity, creativity, and effective communication through design.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToGallery}
          className="px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow cursor-pointer group"
        >
          Explore My Work

          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </motion.button>
      </motion.div>

      {/* ================= GALLERY ================= */}
      <div
        id="graphic-design-gallery"
        className="w-full max-w-7xl mx-auto px-6 md:px-10 scroll-mt-24 relative z-10"
      >
        {/* Categories */}
        <div className="w-full flex justify-center mb-8">
          <CategoryFilter
            categories={DESIGN_CATEGORIES}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Projects */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onView={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 py-10">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* ================= TOOLS ================= */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 mt-24 relative z-10">
        <DesignTools />
      </div>

      {/* ================= MODAL ================= */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}