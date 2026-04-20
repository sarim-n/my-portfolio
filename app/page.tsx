export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <div className="font-bold text-xl tracking-tighter">SARIM.DEV</div>
        <div className="space-x-8 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="mailto:your-email@example.com" className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold tracking-tight mb-6">
            Building intelligent systems with <span className="text-blue-600">Data Science.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            I'm a Computer Science student focused on Machine Learning and AI.
            Currently building tools that bridge the gap between complex data and real-world solutions.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View My Work
            </button>
            <button className="border border-slate-200 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
              Read My Resume
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}