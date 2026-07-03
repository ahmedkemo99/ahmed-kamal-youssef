import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Frontend Development Instructor',
    company: 'MSC',
    type: 'Teaching',
    duration: 'Present',
    mode: 'Offline & Online',
    color: 'from-violet-500 to-indigo-500',
    dotColor: 'bg-violet-500',
    responsibilities: [
      'Teaching Frontend Development fundamentals and advanced concepts.',
      'Delivering both offline and online sessions for students.',
      'Creating curriculum materials and hands-on exercises.',
    ],
  },

  {
    role: 'Software & Web Developer',
    company: 'Aqua International',
    type: 'Full-time',
    duration: '1.5 Years',
    mode: 'On-site',
    color: 'from-indigo-500 to-violet-500',
    dotColor: 'bg-indigo-500',
    responsibilities: [
      'Built interactive frontend components and multi-page web applications.',
      'Handled both software and web development tasks for internal systems.',
      'Refactored legacy codebases, decreasing page load times and bounce rates.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Most Electronics',
    type: 'Contract',
    duration: 'Contract',
    mode: 'On-site',
    color: 'from-emerald-500 to-teal-500',
    dotColor: 'bg-emerald-500',
    responsibilities: [
      'Developed web-based catalog solutions for a retail electronics vendor.',
      'Built real-time admin dashboards to manage product inventory and transactions.',
      'Integrated MySQL database backends with XAMPP local server configurations.',
    ],
  },
  {
    role: 'Embedded Systems Intern',
    company: 'IoT & Microcontrollers Training',
    type: 'Internship',
    duration: 'Internship',
    mode: 'On-site',
    color: 'from-rose-500 to-pink-500',
    dotColor: 'bg-rose-500',
    responsibilities: [
      'Trained in Arduino and ESP32 IoT architecture and breadboard programming.',
      'Designed circuit layouts and wired sensors for automated response systems.',
      'Conducted circuit simulation and debugging using Proteus.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-28 relative overflow-hidden bg-slate-50/40 dark:bg-slate-950/40 flex justify-center"
    >
      {/* Vertical glow line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-violet-500/10 to-transparent pointer-events-none hidden md:block" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
            Work History
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central vertical bar */}
          <div className="absolute top-4 bottom-4 left-5 md:left-1/2 md:-translate-x-1/2 w-px bg-slate-200 dark:bg-slate-800/80" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`${exp.role}-${exp.company}`}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 z-20">
                    <div className={`w-4 h-4 rounded-full ${exp.dotColor} border-[3px] border-slate-50 dark:border-slate-950 shadow-md`} />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8"
                  >
                    <div className="glass border border-slate-200/50 dark:border-slate-800/40 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      {/* Top gradient accent */}
                      <div className={`h-1 w-full bg-gradient-to-r ${exp.color}`} />

                      <div className="p-6 sm:p-8">
                        {/* Header */}
                        <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-500">
                                <Briefcase size={14} />
                              </div>
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                                {exp.type}
                              </span>
                            </div>
                            <h3 className="font-extrabold text-base sm:text-lg text-slate-800 dark:text-white font-display">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-0.5">{exp.company}</p>
                          </div>

                          <div className="flex flex-col items-end gap-1.5">
                            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 px-3 py-1.5 rounded-full">
                              <Calendar size={11} />
                              {exp.duration}
                            </span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                              {exp.mode}
                            </span>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {exp.responsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <ChevronRight size={14} className="text-violet-500 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
