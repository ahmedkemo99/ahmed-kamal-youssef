import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Target, Flame, Brain, Award, Globe } from 'lucide-react';

const PRINCIPLES = [
  { icon: Code2,   label: 'OOP & Design Patterns',      color: 'text-violet-500' },
  { icon: Brain,   label: 'Data Structures & Algorithms', color: 'text-cyan-500'   },
  { icon: Target,  label: 'SDLC & Agile Methodology',   color: 'text-indigo-500'  },
  { icon: Award,   label: 'Clean Architecture',          color: 'text-emerald-500' },
];

const LANGUAGES = [
  { lang: 'Arabic',  level: 'Native'       },
  { lang: 'English', level: 'Professional' },
];

// Simple fade-in-up wrapper
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-28 relative overflow-hidden bg-slate-50/40 dark:bg-slate-950/40 flex justify-center"
    >
      {/* Subtle radial accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
            My Journey &amp; Background
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

          {/* Left: Education + Languages (5 cols) */}
          <FadeUp delay={0} className="lg:col-span-5 space-y-6">

            {/* Education card */}
            <div className="glass border border-slate-200/50 dark:border-slate-800/40 p-8 rounded-[2rem] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 dark:text-white font-display text-base">Education</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Background</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 ml-2 space-y-6">
                {/* NCTU */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-violet-500 border-2 border-slate-50 dark:border-slate-950 shadow shadow-violet-500/40" />
                  <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-100 font-display mb-0.5">
                    Bachelor of Software Engineering
                  </h4>
                  <p className="text-xs text-violet-600 dark:text-violet-400 font-bold mb-1">
                    New Cairo Technological University (NCTU)
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    3rd Year &bull; 2022 – Present
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/30 dark:border-slate-800/40 space-y-1.5 text-xs">
                    <p className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                      <Award size={13} className="text-amber-400" />
                      Pearson International System
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Completed first two academic years with a <strong>Good</strong> grade through the Pearson International curriculum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages card */}
            <div className="glass border border-slate-200/50 dark:border-slate-800/40 p-6 rounded-[1.5rem] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Globe size={20} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-800 dark:text-white font-display uppercase tracking-widest">
                  Languages
                </h3>
              </div>
              <div className="space-y-3">
                {LANGUAGES.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{lang}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="glass border border-slate-200/50 dark:border-slate-800/40 p-6 rounded-[1.5rem] shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                <Flame size={20} />
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Passion</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Solving real-world problems through scalable, clean-code software and innovative embedded systems.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right: Bio + Principles (7 cols) */}
          <FadeUp delay={0.15} className="lg:col-span-7 space-y-8">

            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-snug bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Software Engineer &amp; Full Stack Developer
              </h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                I am a motivated Software Engineer and Full Stack Developer with hands-on experience in designing and
                developing scalable web applications using modern technologies. I currently study Software Engineering
                at New Cairo Technological University (NCTU) while actively building real-world projects and gaining
                industry experience.
              </p>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                I have a strong foundation in Software Engineering principles and am passionate about solving complex
                problems, writing clean and maintainable code, and continuously learning new technologies. Beyond the web,
                I also work on Embedded Systems and IoT projects, bridging software with electronic hardware.
              </p>
            </div>

            {/* Engineering principles grid */}
            <div>
              <p className="text-xs font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-5">
                Core Engineering Principles
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRINCIPLES.map(({ icon: Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="glass border border-slate-200/50 dark:border-slate-800/40 p-5 rounded-2xl flex items-center gap-3 shadow-sm cursor-default"
                  >
                    <div className={`w-9 h-9 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 flex items-center justify-center ${color}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal info row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Name',     value: 'Ahmed Kamal Youssef'          },
                { label: 'Location', value: 'Faisal, Giza, Egypt'          },
                { label: 'Email',    value: 'a.kemo2362003@gmail.com'       },
                { label: 'Phone',    value: '+20 102 413 0996'             },
                { label: 'Status',   value: 'Open to Work'                  },
                { label: 'Year',     value: '3rd Year Student'             },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-0.5">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{label}</p>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">{value}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
