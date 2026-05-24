import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";
import { PROJECTS } from "../constants";

export const ProjectsGallery = ({ onProjectClick }) => {
  const [filter, setFilter] = useState("All");
  const [projectsList, setProjectsList] = useState(PROJECTS);
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Python",
    "SQL",
    "PowerBI",
    "Tableau",
    "Machine Learning",
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setProjectsList(data);
          }
        }
      } catch (err) {
        console.warn("Failed to fetch projects from API. Falling back to local static constants.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    filter === "All"
      ? projectsList
      : projectsList.filter(
          (p) => p.category === filter || p.tags.includes(filter),
        );

  return (
    <section className="min-h-screen py-32 px-6 md:px-20 relative z-10 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <h1 className="text-5xl md:text-8xl font-display tracking-widest uppercase mb-4 text-white">
                Projects Gallery
              </h1>
              <p className="text-slate-400 font-body text-base md:text-lg max-w-2xl leading-relaxed">
                A curated selection of my work in data science, predictive modeling,
                and business intelligence.
              </p>
            </div>
            {loading && (
              <div className="flex items-center gap-2 text-primary bg-primary/5 px-4.5 py-2 border border-primary/20 rounded-full text-xs font-tech font-bold uppercase tracking-wider">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Connecting Database...
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-12 no-scrollbar overflow-x-auto pb-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === c
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                  : "bg-white/3 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.id || p._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-pointer flex flex-col h-full"
              onClick={() => onProjectClick(p)}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0A0A16]/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-primary text-black font-tech font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-primary/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-tech font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 text-slate-300 rounded border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-tech font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 font-body text-sm leading-relaxed line-clamp-2 mb-4">
                    {p.description}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs text-slate-500 font-tech font-bold uppercase tracking-widest">
                  <span>{p.category}</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
