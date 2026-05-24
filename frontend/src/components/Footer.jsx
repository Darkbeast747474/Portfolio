import { BarChart3, Github, Linkedin } from "lucide-react";

export const Footer = () => (
  <footer className="py-20 border-t border-white/5 px-6 md:px-20 relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3 text-slate-400">
        <BarChart3 className="w-5 h-5 text-primary" />
        <span className="text-xs font-tech font-bold uppercase tracking-widest">
          DEEPAK KAUSHAL © 2026
        </span>
      </div>
      <div className="flex gap-6">
        <a
          href="https://github.com/Darkbeast747474"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-kaushal-8b082828b/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
      <p className="text-slate-500 font-tech font-bold uppercase tracking-wider text-[10px]">
        Built with data and design in mind.
      </p>
    </div>
  </footer>
);
