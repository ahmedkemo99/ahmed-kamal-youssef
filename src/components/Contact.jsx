import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TODO: Replace these placeholders with your actual EmailJS credentials.
// Sign up at https://www.emailjs.com and get:
//   - Service ID  →  EMAILJS_SERVICE_ID
//   - Template ID →  EMAILJS_TEMPLATE_ID
//   - Public Key  →  EMAILJS_PUBLIC_KEY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 102 413 0996',
    href: 'tel:+201024130996',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'a.kemo2362003@gmail.com',
    href: 'mailto:a.kemo2362003@gmail.com',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Faisal, Giza, Egypt',
    href: 'https://maps.google.com/?q=Faisal,Giza,Egypt',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
];

const SOCIAL_LINKS = [
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/ahmedkamal88',
    color: 'hover:text-slate-200',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmed-kamal-474670386/',
    color: 'hover:text-blue-400',
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          subject:      form.subject,
          message:      form.message,
          to_name:      'Ahmed Kamal',
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputBase =
    'w-full px-4 py-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 text-slate-800 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/15 transition-all outline-none font-sans';

  return (
    <section
      id="contact"
      className="w-full py-28 relative overflow-hidden bg-slate-50/40 dark:bg-slate-950/40 flex justify-center"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
            Contact Me
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xl font-extrabold font-display text-slate-800 dark:text-white mb-2">
                Let&apos;s Work Together
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I&apos;m currently open to new opportunities. Whether you have a project, 
                a collaboration idea, or just want to say hello — my inbox is always open.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 glass border border-slate-200/50 dark:border-slate-800/40 rounded-2xl hover:border-violet-500/30 transition-all hover:-translate-y-0.5 shadow-sm group"
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center ${color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-4">Find Me Online</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-11 h-11 glass border border-slate-200/50 dark:border-slate-800/40 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 ${color} hover:border-violet-500/30 transition-colors shadow-sm`}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
                
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="glass border border-slate-200/50 dark:border-slate-800/40 rounded-[2rem] p-8 sm:p-10 shadow-lg space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ahmed Kamal"
                    value={form.name}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.name ? 'border-red-400/60' : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.email ? 'border-red-400/60' : ''}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.subject ? 'border-red-400/60' : ''}`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <p id="subject-error" className="text-xs text-red-500">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputBase} resize-none ${errors.message ? 'border-red-400/60' : ''}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={18} />
                    Failed — Try Again
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success/Error banners */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-emerald-600 dark:text-emerald-400 font-semibold pt-1"
                >
                  ✅ Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-500 font-semibold pt-1"
                >
                  ❌ Something went wrong. Please try emailing me directly at a.kemo2362003@gmail.com
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
