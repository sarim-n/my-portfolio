import React from 'react';

export default function Navbar() {
  return (
    <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-white">SARIM.DEV</div>
        <div className="flex items-center space-x-6 text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="https://github.com/sarim-n" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="mailto:sarim-ahmed@example.com" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-900/20">Contact</a>
        </div>
      </div>
    </nav>
  );
}
