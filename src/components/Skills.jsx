import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Cpu, Wrench } from 'lucide-react';

const CATEGORIES = [
  { id: 'programming', label: 'Programming',       icon: Code2    },
  { id: 'frontend',    label: 'Frontend',           icon: Layout   },
  { id: 'backend',     label: 'Backend',            icon: Server   },
  { id: 'database',    label: 'Database',           icon: Database },
  { id: 'embedded',    label: 'Embedded Systems',   icon: Cpu      },
  { id: 'tools',       label: 'Tools',              icon: Wrench   },
];

const SKILLS = {
  programming: [
    { name: 'JavaScript', level: 88 },
    { name: 'PHP',        level: 82 },
    { name: 'C/C++ (Arduino)', level: 80 },
  ],
  frontend: [
    { name: 'HTML5',      level: 95 },
    { name: 'CSS3',       level: 90 },
    { name: 'React',      level: 85 },
    { name: 'Bootstrap 5', level: 88 },
  ],
  backend: [
    { name: 'Node.js',    level: 82 },
    { name: 'PHP',        level: 82 },
  ],
  database: [
    { name: 'MySQL',       level: 85 },
    { name: 'phpMyAdmin',  level: 90 },
  ],
  embedded: [
    { name: 'Arduino',    level: 85 },
    { name: 'ESP32',      level: 80 },
    { name: 'Proteus',    level: 82 },
    { name: 'IoT',        level: 78 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 88 },
    { name: 'VS Code',      level: 95 },
    { name: 'XAMPP',        level: 85 },
    { name: 'Arduino IDE',  level: 88 },
  ],
};

// All tech stack items for the badge cloud
const TECH_CLOUD = [
  'HTML5', 'CSS3', 'JavaScript', 'PHP', 'React', 'Node.js',
  'Bootstrap 5', 'MySQL', 'phpMyAdmin', 'Git', 'GitHub',
  'VS Code', 'XAMPP', 'Arduino', 'ESP32', 'Proteus', 'IoT',
  'Arduino IDE', 'C/C++',
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section
      id="skills"
      className="w-full py-28 relative overflow-hidden flex justify-center"
    >
      {/* Accent background blob */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
            My Skills
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
            Technical Expertise
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Main skills layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto mb-20">

          {/* Category tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto no-scrollbar gap-3 pb-2 lg:pb-0">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-shrink-0 lg:w-full text-left p-4 rounded-2xl flex items-center gap-3 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 border-violet-500 text-white shadow-lg shadow-violet-500/20'
                      : 'glass border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-300 hover:border-violet-500/25'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-white/20' : 'bg-violet-500/10 text-violet-500'}`}>
                    <Icon size={18} />
                  </div>
                  <span className="font-bold text-sm tracking-wide whitespace-nowrap">{cat.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Skill bars */}
          <div className="lg:col-span-8 glass border border-slate-200/50 dark:border-slate-800/40 rounded-[2rem] p-8 sm:p-10 min-h-[320px] flex flex-col justify-center shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-7"
              >
                {SKILLS[activeTab].map((skill, idx) => (
                  <div key={skill.name} className="space-y-2.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="font-bold text-violet-600 dark:text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-200/70 dark:bg-slate-800/70 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full relative"
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tech badge cloud */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-10">
            Technologies &amp; Tools
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_CLOUD.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-5 py-2.5 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/40 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 cursor-default shadow-sm hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
