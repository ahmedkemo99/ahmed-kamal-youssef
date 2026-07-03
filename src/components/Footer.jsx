import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, ArrowUp, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const NAV_LINKS = [
  { id: 'home',           label: 'Home'           },
  { id: 'about',          label: 'About'          },
  { id: 'skills',         label: 'Skills'         },
  { id: 'experience',     label: 'Experience'     },
  { id: 'projects',       label: 'Projects'       },
  { id: 'services',       label: 'Services'       },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact'        },
];

const SOCIALS = [
  { icon: GitHubIcon,   href: 'https://github.com/ahmedkamal88',                          label: 'GitHub'   },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahmed-kamal-474670386/',       label: 'LinkedIn' },
  { icon: Mail,         href: 'mailto:a.kemo2362003@gmail.com',                           label: 'Email'    },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative w-full overflow-hidden glass-navbar border-t border-slate-200/30 dark:border-slate-800/30">
      {/* Top glow strip */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-md shadow-violet-500/30">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-black text-lg font-display bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Ahmed Kamal
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Software Engineer &amp; Full Stack Developer building scalable, 
              premium web experiences and innovative embedded systems.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass border border-slate-200/50 dark:border-slate-800/40 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-cyan-400 hover:border-violet-500/30 transition-colors shadow-sm"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-cyan-400 hover:pl-1 transition-all duration-200 cursor-pointer py-0.5"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">Contact Info</h4>
            <div className="space-y-3">
              {[
                { label: 'Email',    value: 'a.kemo2362003@gmail.com', href: 'mailto:a.kemo2362003@gmail.com' },
                { label: 'Phone',    value: '+20 102 413 0996',         href: 'tel:+201024130996'              },
                { label: 'Location', value: 'Faisal, Giza, Egypt',      href: null                             },
                { label: 'GitHub',   value: 'github.com/ahmedkamal88',  href: 'https://github.com/ahmedkamal88'},
              ].map(({ label, value, href }) =>
                href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block group">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{label}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">{value}</p>
                  </a>
                ) : (
                  <div key={label}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{label}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-slate-200/30 dark:border-slate-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Ahmed Kamal Youssef
            
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Back to Top
            <div className="w-7 h-7 rounded-lg glass border border-slate-200/50 dark:border-slate-800/40 flex items-center justify-center">
              <ArrowUp size={13} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
