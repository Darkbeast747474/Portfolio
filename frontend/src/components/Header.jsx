import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart3, Menu, X } from "lucide-react";

export const Header = ({ activeSection, setSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 md:pt-6 pointer-events-none flex justify-center">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: isScrolled
            ? "rgba(10, 10, 22, 0.75)"
            : "rgba(255, 255, 255, 0.02)",
          borderColor: isScrolled
            ? "rgba(0, 229, 255, 0.2)"
            : "rgba(255, 255, 255, 0.08)",
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px 0 rgba(0, 229, 255, 0.05)"
            : "0 4px 20px -10px rgba(0, 0, 0, 0.3)",
        }}
        className="w-full max-w-7xl pointer-events-auto border rounded-2xl md:rounded-full px-6 py-3 md:py-3.5 backdrop-blur-xl flex items-center justify-between transition-all duration-300 relative"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setSection("home")}
        >
          <div className="text-primary relative">
            <BarChart3 className="w-7 h-7 relative z-10" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
          </div>
          <h2 className="text-2xl font-display tracking-widest text-white hidden sm:block">
            DEEPAK KAUSHAL
          </h2>
        </motion.div>

        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`relative px-5 py-2 text-xs font-tech font-bold uppercase tracking-wider transition-colors z-10 ${
                activeSection === item.id
                  ? "text-black"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 229, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary text-black px-6 py-2 rounded-full text-xs font-tech font-bold uppercase tracking-widest transition-all cursor-pointer"
          >
            Hire Me
          </motion.button>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#0A0A16]/95 backdrop-blur-2xl overflow-hidden md:hidden rounded-2xl border border-primary/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(0,229,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.05)] z-50"
            >
              <div className="p-4 flex flex-col gap-1.5">
                {navItems.map((item, i) => (
                  <motion.button
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20, 
                      delay: i * 0.04 
                    }}
                    key={item.id}
                    onClick={() => {
                      setSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left p-3.5 rounded-xl text-sm font-tech font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeSection === item.id
                        ? "bg-primary text-black font-extrabold shadow-[0_0_20px_rgba(0,229,255,0.3)] border-l-4 border-primary/80"
                        : "text-slate-300 hover:bg-primary/10 hover:text-primary border-l-4 border-transparent hover:border-primary/50"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {activeSection === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                      )}
                    </span>
                  </motion.button>
                ))}
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(0, 229, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ delay: navItems.length * 0.04 }}
                  className="mt-3.5 w-full bg-primary text-black py-4 rounded-xl font-tech font-bold uppercase tracking-widest text-sm shadow-[0_4px_15px_rgba(0,229,255,0.2)] transition-all cursor-pointer"
                >
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};
