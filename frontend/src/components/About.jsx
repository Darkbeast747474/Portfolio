import {
  Activity,
  Code2,
  LayoutDashboard,
  Database,
  Download,
} from "lucide-react";
import { SKILLS } from "../constants";

export const About = () => (
  <section className="min-h-screen py-32 px-6 md:px-20 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl md:text-8xl font-display leading-[0.95] mb-8 uppercase tracking-widest text-white">
          Bridging the gap between{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 drop-shadow-[0_2px_8px_rgba(0,229,255,0.2)]">
            raw data
          </span>{" "}
          <br className="hidden md:block" /> and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 drop-shadow-[0_2px_8px_rgba(129,140,248,0.2)]">
            actionable insights.
          </span>
        </h1>
        <div className="h-[2px] w-24 bg-primary"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-primary">
            <Activity className="w-5 h-5" />
            <h2 className="text-2xl font-display tracking-widest uppercase">
              About Me
            </h2>
          </div>
          <div className="space-y-6 text-base md:text-lg font-body text-slate-400 leading-relaxed">
            <p>
              I am a passionate{" "}
              <span className="text-white font-bold">Data Analyst</span>{" "}
              transforming complex datasets into compelling narratives. My
              journey began with a curiosity for how numbers govern the world.
            </p>
            <p>
              My approach combines statistical rigor with creative
              problem-solving. I don't just build dashboards; I build roadmaps
              for growth. Whether it's optimizing supply chains or uncovering
              market trends, I thrive at the intersection of technology and
              strategy.
            </p>
            <blockquote className="border-l-2 border-primary/40 pl-6 py-4 bg-white/3 backdrop-blur-md rounded-r-2xl italic text-slate-300 font-body text-base md:text-lg">
              "In God we trust, all others must bring data."{" "}
              <span className="block mt-2 text-xs font-tech font-bold uppercase tracking-wider text-slate-500">
                — W. Edwards Deming
              </span>
            </blockquote>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl space-y-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5 text-slate-300">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="text-xs font-tech font-bold uppercase tracking-widest">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.languages.map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-tech font-bold text-primary shadow-[0_0_10px_rgba(0,229,255,0.05)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-5 text-slate-300">
              <LayoutDashboard className="w-5 h-5 text-primary" />
              <h3 className="text-xs font-tech font-bold uppercase tracking-widest">
                Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.tools.map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-tech font-bold text-slate-300 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-5 text-slate-300">
              <Database className="w-5 h-5 text-primary" />
              <h3 className="text-xs font-tech font-bold uppercase tracking-widest">
                Libraries
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.libraries.map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-tech font-bold text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.05)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full h-14 bg-gradient-to-r from-primary to-cyan-400 text-black font-tech font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer">
            <Download className="w-5 h-5" /> Download Full Resume
          </button>
        </div>
      </div>
    </div>
  </section>
);
