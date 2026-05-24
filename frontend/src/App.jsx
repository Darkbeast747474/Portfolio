import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsGallery } from "./components/ProjectsGallery";
import { ProjectDetail } from "./components/ProjectDetail";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [section, setSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section, selectedProject]);

  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary/30">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary glow-sphere animate-orb-1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/60 glow-sphere animate-orb-2"></div>
        <div className="absolute top-[30%] right-[10%] w-[35%] h-[35%] bg-cyan-500/30 glow-sphere animate-orb-3"></div>
      </div>

      <Header
        activeSection={section}
        setSection={(s) => {
          setSection(s);
          setSelectedProject(null);
        }}
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectDetail
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {section === "home" && <Hero setSection={setSection} />}
              {section === "projects" && (
                <ProjectsGallery onProjectClick={setSelectedProject} />
              )}
              {section === "about" && <About />}
              {section === "contact" && <Contact />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
