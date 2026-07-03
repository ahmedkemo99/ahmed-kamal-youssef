import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Layout, Server, Layers, Cpu, Wrench
} from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'End-to-end web application development using modern technologies, from concept to deployment with clean, maintainable code.',
    gradient: 'from-violet-600 to-indigo-600',
    tags: ['React', 'Node.js', 'PHP'],
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive user interfaces with smooth animations, accessibility, and blazing-fast performance.',
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['React', 'HTML5', 'CSS3'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Robust, scalable server-side applications with secure APIs, database integration, and business logic implementation.',
    gradient: 'from-indigo-600 to-violet-600',
    tags: ['Node.js', 'PHP', 'MySQL'],
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'Complete web solutions covering both frontend and backend. A single point of contact for your entire application.',
    gradient: 'from-violet-600 to-cyan-500',
    tags: ['React', 'PHP', 'MySQL'],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'IoT and embedded system development using Arduino and ESP32. Bridging software with hardware for smart solutions.',
    gradient: 'from-emerald-600 to-teal-500',
    tags: ['Arduino', 'ESP32', 'IoT'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Ongoing support, bug fixes, updates, and performance optimizations to keep your website running at its best.',
    gradient: 'from-rose-500 to-pink-600',
    tags: ['Support', 'Updates', 'Optimization'],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-28 relative overflow-hidden flex justify-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
            Services I Offer
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass border border-slate-200/50 dark:border-slate-800/40 rounded-[2rem] p-8 shadow-md hover:shadow-xl hover:border-violet-500/25 transition-all duration-300 group cursor-default flex flex-col gap-6"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
