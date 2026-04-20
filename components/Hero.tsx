import React from 'react';

export default function Hero() {
  return (
    <header className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
          Computer Science & AI
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Intelligence.</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-10">
          I build systems like <strong>Turf AI</strong> that translate visual data into real-world action using Computer Vision and Machine Learning.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition">View Projects</a>
          <button className="bg-slate-900 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">Resume</button>
        </div>
      </div>
    </header>
  );
}
