import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, ChevronDown } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import ProfileImage from "../assets/focus.jpg";

// Typing animation roles
const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'Embedded Systems Dev',
];

function useTypingAnimation(words) {
  const [wordIndex, setWordIndex]     = useState(0);
  const [displayed, setDisplayed]     = useState('');
  const [isDeleting, setIsDeleting]   = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const current = words[wordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, displayed.length + 1));
        if (displayed === current) {
          setIsDeleting(true);
          setTypingSpeed(2500);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayed(current.substring(0, displayed.length - 1));
        if (displayed === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, typingSpeed, words]);

  return displayed;
}

// Floating social links
const SOCIALS = [
  { icon: GitHubIcon,   href: 'https://github.com/ahmedkamal88',                             label: 'GitHub'   },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahmed-kamal-474670386/',          label: 'LinkedIn' },
  { icon: Mail,         href: 'mailto:a.kemo2362003@gmail.com',                              label: 'Email'    },
  { icon: MapPin,       href: 'https://maps.google.com/?q=Faisal,Giza,Egypt',               label: 'Location' },
];

export default function Hero() {
  const typedRole = useTypingAnimation(ROLES);

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden grid-bg pt-16"
    >
      {/* ── Ambient background orbs ── */}
      <div className="absolute top-1/4 left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left: Text content ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-widest w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for New Opportunities
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display tracking-tight leading-[1.06] mb-6 text-slate-900 dark:text-white">
            Hi, I&apos;m{' '}
            <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Ahmed Kamal
            </span>
          </h1>

          {/* Typing text */}
          <div className="flex items-center justify-center lg:justify-start h-10 mb-6 gap-2">
            <span className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium">
              A passionate
            </span>
            <span className="text-base sm:text-lg font-extrabold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent border-r-2 border-violet-500 pr-1 min-w-[180px] text-left">
              {typedRole}
            </span>
          </div>

          {/* Bio */}
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
            Motivated Software Engineer & Full Stack Developer with hands-on experience
            designing scalable web applications. Passionate about clean code, solving
            real-world problems, and building premium digital experiences using
            modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow cursor-pointer group"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/AHMED_KAMAL_YOUSSEF_CV.pdf"
              download="Ahmed_Kamal_Youssef_CV.pdf"
              className="px-7 py-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/50 glass text-slate-800 dark:text-white font-bold text-sm flex items-center justify-center gap-2 hover:border-violet-500/30 transition-colors cursor-pointer"
            >
              <Download size={16} />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="px-7 py-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/50 glass text-slate-800 dark:text-white font-bold text-sm flex items-center justify-center gap-2 hover:border-cyan-500/30 transition-colors cursor-pointer"
            >
              <Mail size={16} />
              Contact Me
            </motion.button>
          </div>

          {/* Social links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-200/30 dark:border-slate-800/30 w-full lg:w-auto">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass border border-slate-200/50 dark:border-slate-800/40 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-cyan-400 hover:border-violet-500/30 transition-colors shadow-sm"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Profile visual ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Rotating outer ring */}
          <div className="absolute w-80 h-80 rounded-full border border-dashed border-violet-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full border border-dashed border-cyan-500/15 animate-spin-slow pointer-events-none" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

          {/* Glow blob */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-violet-600/20 to-cyan-500/15 blur-3xl animate-pulse-slow" />

          {/* Profile card */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative glass border border-slate-200/50 dark:border-slate-700/40 rounded-[2.5rem] p-2 shadow-2xl w-64 h-64 sm:w-72 sm:h-72 overflow-hidden"
          >
            {/* Holographic top bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400" />

            {/* Avatar placeholder */}
            <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-violet-900/60 via-indigo-900/60 to-slate-900 flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-violet-500/30">
                <img
                  src={ProfileImage}
                  alt="Ahmed Kamal"
                  className="w-full h-full object-cover"
                />
  
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm font-display">Ahmed Kamal</p>
                <p className="text-cyan-400 text-xs font-semibold mt-0.5">Software Engineer</p>
              </div>
              {/* Tech badges */}
              <div className="flex gap-1.5 flex-wrap justify-center px-4">
                {['React', 'Node.js', 'PHP'].map((t) => (
                  <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -top-4 -right-4 sm:right-0 glass border border-slate-200/40 dark:border-slate-800/40 rounded-2xl px-4 py-3 shadow-lg"
          >
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Experience</p>
            <p className="text-lg font-black text-slate-800 dark:text-white font-display">3+ Years</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-4 -left-4 sm:left-0 glass border border-slate-200/40 dark:border-slate-800/40 rounded-2xl px-4 py-3 shadow-lg"
          >
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Projects</p>
            <p className="text-lg font-black text-violet-600 dark:text-cyan-400 font-display">10+</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}
