import {
  Activity,
  Code2,
  LayoutDashboard,
  Briefcase,
  Github,
  ExternalLink,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const ProjectDetail = ({ project, onBack }) => (
  <div className="min-h-screen py-32 px-6 md:px-20 bg-background-dark relative z-10">
    <div className="max-w-7xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-primary mb-12 font-tech font-bold uppercase tracking-widest text-xs transition-colors duration-300 cursor-pointer"
      >
        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Projects
      </button>

      <div className="relative rounded-3xl overflow-hidden mb-16 aspect-[21/9] border border-white/5 shadow-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A16] via-[#0A0A16]/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-tech font-bold uppercase tracking-wider text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-display tracking-wide text-white uppercase leading-none">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h3 className="text-2xl font-display tracking-widest uppercase mb-6 flex items-center gap-3 text-white">
              <Activity className="text-primary w-5 h-5" /> The Challenge
            </h3>
            <p className="text-base md:text-lg font-body text-slate-400 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </section>

          {project.methodology && (
            <section className="glass-card p-8 md:p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-display tracking-widest uppercase mb-8 flex items-center gap-3 text-white">
                <Code2 className="text-primary w-5 h-5" /> Methodology
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.methodology.map((m) => (
                  <div key={m.step} className="space-y-2 group/step">
                    <span className="text-primary font-tech font-bold text-base block group-hover/step:text-white transition-colors duration-300">
                      {m.step}. {m.title}
                    </span>
                    <p className="text-sm font-body text-slate-400 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-display tracking-widest uppercase flex items-center gap-3 text-white">
                <LayoutDashboard className="text-primary w-5 h-5" /> Interactive Analytics Preview
              </h3>
              <span className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">
                Live Data Widget
              </span>
            </div>
            <div className="glass-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative">
              <div className="bg-[#0e0e22]/60 px-6 py-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-tech font-bold text-slate-400 ml-2 uppercase tracking-wider">analytics_dashboard.exe</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-tech font-bold text-slate-400">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-primary">LIVE STATS</span>
                  <span>SYSTEM ONLINE</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row h-[320px] md:h-[400px]">
                <div className="w-full md:w-52 border-r border-white/5 bg-[#0A0A16]/40 p-6 flex flex-col justify-between hidden md:flex">
                  <div className="space-y-4">
                    <p className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">Data Streams</p>
                    <div className="h-8 w-full bg-primary/10 border border-primary/20 rounded-lg flex items-center px-3 gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                      <span className="text-[10px] font-tech font-bold text-primary">REALTIME FEED</span>
                    </div>
                    <div className="h-8 w-full bg-white/3 border border-white/5 rounded-lg flex items-center px-3">
                      <span className="text-[10px] font-tech font-bold text-slate-400">LOGISTICS_DB</span>
                    </div>
                    <div className="h-8 w-full bg-white/3 border border-white/5 rounded-lg flex items-center px-3">
                      <span className="text-[10px] font-tech font-bold text-slate-400">SALES_MARKET_EU</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-[2px] w-full bg-white/5"></div>
                    <p className="text-[9px] font-tech font-bold text-slate-600 uppercase">SERVER STATE: OK</p>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/15 flex flex-col justify-center">
                      <span className="text-[9px] font-tech font-bold text-slate-500 uppercase tracking-wider">ACCURACY</span>
                      <span className="text-2xl md:text-3xl font-display text-primary tracking-wide leading-none mt-1">92.4%</span>
                    </div>
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex flex-col justify-center">
                      <span className="text-[9px] font-tech font-bold text-slate-500 uppercase tracking-wider">LATENCY</span>
                      <span className="text-2xl md:text-3xl font-display text-white tracking-wide leading-none mt-1">42ms</span>
                    </div>
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex flex-col justify-center">
                      <span className="text-[9px] font-tech font-bold text-slate-500 uppercase tracking-wider">KPI METRIC</span>
                      <span className="text-2xl md:text-3xl font-display text-indigo-400 tracking-wide leading-none mt-1">1.6k/s</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/3 rounded-2xl border border-white/5 relative p-4 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none grid grid-cols-6 grid-rows-4">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="border-r border-b border-white/5"></div>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
                    <div className="flex justify-between items-center relative z-10">
                      <span className="text-[9px] font-tech font-bold text-slate-500 uppercase tracking-widest">EVALUATION GRAPH</span>
                      <span className="text-[9px] font-tech font-bold text-primary uppercase tracking-widest">ACTIVE FORECAST</span>
                    </div>
                    <div className="w-full h-32 relative z-10 flex items-end">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,100 L0,70 L50,40 L100,65 L150,30 L200,45 L250,15 L300,50 L350,20 L400,35 L400,100 Z"
                          fill="url(#chart-glow)"
                        />
                        <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                        <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                        <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                        <path
                          d="M0,70 L50,40 L100,65 L150,30 L200,45 L250,15 L300,50 L350,20 L400,35"
                          fill="none"
                          stroke="#00E5FF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="250" cy="15" r="4" fill="#0A0A16" stroke="#00E5FF" strokeWidth="2" />
                        <circle cx="350" cy="20" r="4" fill="#0A0A16" stroke="#00E5FF" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="glass-card p-8 rounded-3xl sticky top-32 border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Briefcase className="text-primary w-5 h-5" />
              </div>
              <div>
                <h4 className="font-tech font-bold text-white uppercase text-sm tracking-wider">Project Details</h4>
                <p className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">Metadata</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400 font-tech font-bold text-xs uppercase tracking-wider">Role</span>
                <span className="text-sm font-body font-bold text-white">Lead Analyst</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400 font-tech font-bold text-xs uppercase tracking-wider">Duration</span>
                <span className="text-sm font-body font-bold text-white">3 Months</span>
              </div>
              <div className="pt-4">
                <p className="text-slate-400 font-tech font-bold text-xs uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-tech font-bold rounded uppercase border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full h-12 bg-gradient-to-r from-primary to-cyan-400 text-black font-tech font-bold uppercase tracking-wider text-xs rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer">
                <Github className="w-4 h-4" /> View on GitHub
              </button>
              <button className="w-full h-12 bg-white/5 border border-white/10 text-white font-tech font-bold uppercase tracking-wider text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </button>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-24">
        <h3 className="text-2xl font-display tracking-widest uppercase mb-8 flex items-center gap-3 text-white">
          <TrendingUp className="text-primary w-5 h-5" /> Key Results
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {project.metrics?.map((m) => (
            <div
              key={m.label}
              className="glass-card p-6 rounded-2xl flex flex-col gap-2 hover:border-primary/25 transition-colors duration-300"
            >
              <span className="text-primary text-3xl font-display tracking-wider leading-none">
                {m.value}
              </span>
              <span className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);
