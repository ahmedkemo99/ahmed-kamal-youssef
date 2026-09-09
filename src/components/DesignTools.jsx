import React from 'react';
import { motion } from 'framer-motion';
import { Image, PenTool, LayoutPanelTop, Component, Palette } from 'lucide-react';

const TOOLS = [
  { name: 'Adobe Photoshop', icon: Image,         gradient: 'from-blue-600 to-cyan-500' },
  { name: 'Adobe Illustrator', icon: PenTool,      gradient: 'from-orange-500 to-amber-500' },
  { name: 'Adobe InDesign', icon: LayoutPanelTop,  gradient: 'from-pink-600 to-rose-500' },
  { name: 'Figma', icon: Component,                gradient: 'from-violet-600 to-indigo-600' },
  { name: 'Canva', icon: Palette,                  gradient: 'from-cyan-500 to-teal-500' },
];

export default function DesignTools() {
  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white">
          Tools I Design With
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {TOOLS.map(({ name, icon: Icon, gradient }) => (
          <motion.div
            key={name}
            whileHover={{ y: -4, scale: 1.03 }}
            className="glass border border-slate-200/50 dark:border-slate-800/40 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-lg hover:border-violet-500/25 transition-all"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm flex-shrink-0`}>
              <Icon size={16} className="text-white" />
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
