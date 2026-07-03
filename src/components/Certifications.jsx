import React from 'react';
import { motion } from 'framer-motion';
import { Award, Plus, Clock } from 'lucide-react';
import FrontEndCertificate from "../assets/FrontEnd.png";
import BackEndCertificate from "../assets/BackEnd.png";

// Placeholder certifications — user can fill in real ones later
const CERTIFICATIONS = [
  {
    title: "Front End",
    issuer: "Black Horse Courses",
    date: "29/10/2025",
    image: FrontEndCertificate,
  },
  {
    title: "Back End",
    issuer: "Black Horse Courses",
    date: "29/10/2025",
    image: BackEndCertificate,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full py-28 relative overflow-hidden bg-slate-50/40 dark:bg-slate-950/40 flex justify-center"
    >
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-3">
            Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12 p-5 rounded-2xl bg-violet-500/8 border border-violet-500/20 text-center"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-bold text-violet-600 dark:text-violet-400">Certifications are being added.</span>{' '}
            This section will be updated with professional certificates as they are earned and verified.
          </p>
        </motion.div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass border border-dashed border-slate-300/50 dark:border-slate-700/50 rounded-[2rem] p-8 flex flex-col items-center gap-4 text-center opacity-60 hover:opacity-80 transition-opacity"
            >
              <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-xl border border-slate-300"
              />
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-500 dark:text-slate-400 font-display">{cert.title}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                <Clock size={11} />
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}