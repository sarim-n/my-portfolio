import React from 'react';
import { PROJECTS } from '../lib/data';

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-12 tracking-tight text-white">Featured Systems</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((p, i) => (
          <div key={i} className="group overflow-hidden glass-card">
            <div className="h-64 overflow-hidden relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {p.tags.map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-400/20 rounded uppercase tracking-tighter">{t}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{p.title}</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">{p.description}</p>
              <a href="#" className="text-blue-400 font-bold group/link">Repository <span className="ml-1 inline-block group-hover/link:translate-x-1 transition-transform">→</span></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
