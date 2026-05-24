import { motion } from "motion/react";
import {
  Activity,
  Terminal,
  Database,
  CheckCircle2,
  Github,
  Linkedin,
  LayoutDashboard,
  LineChart,
  Calculator,
  ArrowRight,
  Download,
  BarChart3,
} from "lucide-react";

export const SocialLink = ({ icon, label, href }) => (
  <a
    href={href || "#"}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    className="flex flex-col items-center gap-2 group transition-transform hover:-translate-y-1"
  >
    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all duration-300">
      <div className="text-slate-400 group-hover:text-primary transition-colors duration-300">
        {icon}
      </div>
    </div>
    <span className="text-[10px] font-tech font-bold text-slate-500 group-hover:text-slate-300 uppercase tracking-widest transition-colors duration-300">
      {label}
    </span>
  </a>
);

export const SkillCard = ({ icon, label }) => (
  <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center gap-4 text-center cursor-default group">
    <div className="text-primary p-3 bg-primary/5 rounded-xl border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
      {icon}
    </div>
    <p className="text-xs font-tech font-bold uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">
      {label}
    </p>
  </div>
);

export const Hero = ({ setSection }) => (
  <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card max-w-[1000px] w-full rounded-3xl p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>

      <div className="mb-8 relative group">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-95 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/30 p-1 bg-white/5 relative z-10 transition-transform duration-500 hover:scale-105">
          <img
            src="/profile_picture.JPG"
            alt="Deepak Kaushal"
            className="w-full h-full rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div 
          className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 border-4 border-[#0A0A16] z-20 shadow-lg shadow-primary/20"
          style={{ animation: "float 2s ease-in-out infinite" }}
        >
          <CheckCircle2 className="w-4 h-4 text-black font-extrabold" />
        </div>
      </div>

      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-8xl font-display leading-[0.95] tracking-wider mb-6 text-white uppercase">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500 drop-shadow-[0_2px_10px_rgba(0,229,255,0.2)]">Deepak Kaushal</span>
          <br />
          <span className="text-slate-400 text-3xl md:text-5xl font-tech font-extrabold uppercase tracking-tight mt-3 block">
            Data Analyst
          </span>
        </h1>
        <p className="text-slate-400 font-body text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Turning complex data into actionable insights through storytelling,
          advanced SQL modeling, and interactive visualization.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12 w-full max-w-4xl">
        <div className="flex-1 min-w-[200px] flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border border-white/10 hover:border-primary/25 hover:bg-white/5 transition-all duration-300 group">
          <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/25 group-hover:bg-primary/20 transition-all duration-300">
            <Activity className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">
              Dashboards
            </p>
            <p className="text-3xl font-display tracking-wide text-white">50+</p>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border border-white/10 hover:border-primary/25 hover:bg-white/5 transition-all duration-300 group">
          <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/25 group-hover:bg-primary/20 transition-all duration-300">
            <Terminal className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">
              SQL Lines
            </p>
            <p className="text-3xl font-display tracking-wide text-white">10k+</p>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border border-white/10 hover:border-primary/25 hover:bg-white/5 transition-all duration-300 group">
          <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/25 group-hover:bg-primary/20 transition-all duration-300">
            <Database className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">
              Data Sources
            </p>
            <p className="text-3xl font-display tracking-wide text-white">25+</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10 w-full mb-12">
        <SocialLink
          icon={<Github className="w-5 h-5" />}
          label="GitHub"
          href="https://github.com/Darkbeast747474"
        />
        <SocialLink
          icon={<Linkedin className="w-5 h-5" />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/deepak-kaushal-8b082828b/"
        />
        <SocialLink
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Tableau"
          href="https://public.tableau.com/app/profile/deepak.kaushal/vizzes"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
        <button
          onClick={() => setSection("projects")}
          className="flex-grow sm:flex-grow-0 min-w-[220px] h-14 bg-gradient-to-r from-primary to-cyan-400 text-black font-tech font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          View Projects <ArrowRight className="w-5 h-5" />
        </button>
        <button className="flex-grow sm:flex-grow-0 min-w-[220px] h-14 bg-white/5 border border-white/10 text-white font-tech font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
          Download CV <Download className="w-5 h-5" />
        </button>
      </div>
    </motion.div>

    <div className="mt-24 w-full max-w-5xl px-6">
      <div className="flex items-center gap-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-display tracking-widest uppercase whitespace-nowrap">Specialized In</h2>
        <div className="h-[1px] w-full bg-white/10"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <SkillCard icon={<LineChart className="w-6 h-6" />} label="Python / Pandas" />
        <SkillCard icon={<Database className="w-6 h-6" />} label="MySQL / Postgres" />
        <SkillCard icon={<BarChart3 className="w-6 h-6" />} label="Tableau BI" />
        <SkillCard icon={<Calculator className="w-6 h-6" />} label="Excel Expert" />
      </div>
    </div>
  </section>
);
