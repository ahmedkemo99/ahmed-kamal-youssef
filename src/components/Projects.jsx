import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, BadgeCheck, Cpu, Globe, Leaf } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

const PROJECTS = [
  {
    id: 1,
    title: 'Smart Greenhouse System',
    category: 'embedded',
    categoryLabel: 'IoT & Embedded Systems',
    icon: Cpu,
    gradient: 'from-emerald-600 to-teal-500',
    glowColor: 'shadow-emerald-500/20',
    description: 'An Arduino-based smart automation system using DHT11, soil moisture, and water level sensors to automate greenhouse irrigation and ventilation.',
    longDescription:
      'A comprehensive hardware-software IoT solution automating environmental control within a greenhouse. Powered by Arduino microcontrollers, the system monitors air temperature, humidity, soil moisture, and water reservoir levels in real-time. It activates water pumps and exhaust fans automatically when parameters exceed thresholds. Includes a plant database with optimal environment ranges for 76 unique plant species.',
    tech: ['Arduino', 'C/C++', 'DHT11', 'Soil Moisture Sensor', 'Water Level Sensor', 'Proteus'],
    features: [
      'Real-time DHT11 temperature & humidity monitoring',
      'Automatic soil-moisture-triggered irrigation system',
      'Exhaust-fan ventilation activated on high humidity',
      'Water level warnings via float switches',
      'Plant database for 76 species with optimal ranges',
      'Fully simulated in Proteus before hardware assembly',
    ],
    featured: true,
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: 'Travel Agency Website',
    category: 'web',
    categoryLabel: 'Frontend Web App',
    icon: Globe,
    gradient: 'from-violet-600 to-cyan-500',
    glowColor: 'shadow-violet-500/20',
    description: 'A fully responsive travel booking portal built with React and Vite, featuring multi-page routing, form validation, and modern UI.',
    longDescription:
      'A premium client-facing travel booking interface designed with modern aesthetics and fast performance. Built on React and Vite for blazing-fast load times, it supports multi-page routing via React Router DOM. Features include interactive destination browsing, a booking form with client-side validation (email, date, contact), responsive layout for all screen sizes, and custom animations.',
    tech: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'React Router DOM'],
    features: [
      'Multi-page routing with React Router DOM',
      'Interactive destination grid with search',
      'Booking form with live client-side validation',
      'Fully responsive across all screen sizes',
      'Custom animations and modern card layouts',
      'Optimized for speed using Vite bundler',
    ],
    featured: true,
    github: 'https://github.com/ahmedkamal88/travel_3alatoool',
    demo: 'https://ahmedkamal-myprotfolio.vercel.app/',
  },
  {
    id: 3,
    title: 'Plant Monitoring Web App',
    category: 'fullstack',
    categoryLabel: 'Full Stack Application',
    icon: Leaf,
    gradient: 'from-green-600 to-emerald-500',
    glowColor: 'shadow-green-500/20',
    description: 'A PHP & ESP32-based web application displaying real-time sensor data and recommending plants suited to the current environment.',
    longDescription:
      'This full-stack IoT system uses an ESP32 Wi-Fi microcontroller to push live environmental readings (temperature, light, soil moisture) directly to a cloud-hosted MySQL database. The PHP backend checks incoming sensor data and runs an algorithm that recommends ideal plant species for the current microclimate. An admin dashboard displays real-time graphs and historical tracking data. Includes user authentication for secure access.',
    tech: ['PHP', 'ESP32', 'MySQL', 'XAMPP', 'Bootstrap 5', 'HTML/CSS', 'JavaScript'],
    features: [
      'Wi-Fi ESP32 sensor integration pushing to MySQL',
      'Real-time dashboard with PHP graph rendering',
      'Automated microclimate plant recommendation engine',
      'Historical daily average tracking in database',
      'User authentication for admin dashboard access',
      'Responsive Bootstrap 5 interface',
    ],
    featured: false,
    github: null,
    demo: null,
  },
];

const FILTERS = [
  { id: 'all',      label: 'All Projects' },
  { id: 'web',      label: 'Web'          },
  { id: 'fullstack',label: 'Full Stack'   },
  { id: 'embedded', label: 'Embedded'     },
];

export default function Projects() {
  const [filter, setFilter]       = useState('all');
  const [selected, setSelected]   = useState(null);

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="w-full py-28 relative overflow-hidden bg-slate-50/40 dark:bg-slate-950/40 flex justify-center"
    >
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {FILTERS.map((f) => (
            <motion.button
              key={f.id}
              onClick={() => setFilter(f.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === f.id
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 border border-violet-500'
                  : 'glass border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-violet-500/30'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelected(project)}
                  className={`glass border border-slate-200/50 dark:border-slate-800/40 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl hover:border-violet-500/25 transition-all duration-300 cursor-pointer group flex flex-col`}
                >
                  {/* Card visual header */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    {/* Background blur orb */}
                    <div className="absolute w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <Icon size={64} className="text-white/30 absolute" />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
                        <BadgeCheck size={11} />
                        Featured
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/20">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-2">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] font-bold px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] font-bold px-2.5 py-1.5 rounded-lg bg-violet-500/10 text-violet-600 dark:text-cyan-400 border border-violet-500/15 uppercase">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
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
              {/* Modal hero */}
              <div className={`relative h-48 flex-shrink-0 bg-gradient-to-br ${selected.gradient} flex items-center justify-center overflow-hidden`}>
                {React.createElement(selected.icon, { size: 80, className: 'text-white/20 absolute' })}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  {React.createElement(selected.icon, { size: 32, className: 'text-white' })}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 border border-white/10 text-white flex items-center justify-center hover:bg-black/50 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                    {selected.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white mt-1">
                    {selected.title}
                  </h3>
                </div>

                <div>
                  <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 mb-2">Overview</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{selected.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {(selected.github || selected.demo) && (
                  <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm flex items-center gap-2 transition-colors border border-slate-700"
                      >
                      <GitHubIcon size={16} />
                        Source Code
                      </a>
                    )}
                    {selected.demo && (
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm flex items-center gap-2 hover:opacity-90 shadow-md shadow-violet-500/20 transition-all"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
