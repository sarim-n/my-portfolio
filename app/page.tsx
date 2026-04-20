const PROJECTS = [
  {
    title: "Turf AI",
    description: "An automated refereeing system using Computer Vision to track ball movement and player positioning. Reduces human error in high-speed sports environments.",
    tags: ["Computer Vision", "OpenCV", "AI"],
    link: "#"
  },
  {
    title: "Domain Prediction Model",
    description: "Machine Learning model built to predict domain categories based on feature sets. Focused on high-accuracy classification.",
    tags: ["Python", "Scikit-Learn", "Data Science"],
    link: "#"
  },
  {
    title: "Local Shop E-commerce Bot",
    description: "Automated system for small shops to manage online sales and inventory, bridging the gap for local vendors.",
    tags: ["Next.js", "Automation", "Node.js"],
    link: "#"
  }
];

const SKILLS = ["Python", "Machine Learning", "OpenCV", "Next.js", "Tailwind CSS", "TypeScript"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <div className="font-bold text-xl tracking-tighter hover:text-blue-600 cursor-pointer transition-colors">
          SARIM.DEV
        </div>
        <div className="space-x-8 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="mailto:your-email@example.com" className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition shadow-sm">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Building intelligent systems with <span className="text-blue-600">Data Science.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            I'm a Computer Science student focused on Machine Learning and AI.
            Currently building tools like <strong>Turf AI</strong> that bridge the gap between complex data and real-world solutions.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
              View My Work
            </a>
            <button className="border border-slate-200 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
              Read My Resume
            </button>
          </div>
        </div>
      </main>

      {/* Tech Stack Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-4">Tech Stack</span>
          {SKILLS.map((skill) => (
            <div key={skill} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-medium text-slate-700 hover:border-blue-200 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Project Gallery */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-slate-500">A collection of my work in AI and Automation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 text-blue-600 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>
              <a href={project.link} className="inline-flex items-center font-semibold text-blue-600 hover:underline">
                View Project Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-100 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Sarim Ahmed N. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}