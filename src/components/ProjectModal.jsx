import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ selectedProject, onClose }) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ice-950/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ice-900/90 shadow-2xl"
            >
              
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              {/* --- IMAGE IN MODAL --- */}
              <div className="h-64 w-full relative">
                 <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-ice-900 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <h3 className="text-3xl font-display font-bold text-white">{selectedProject.title}</h3>
                        <p className="mt-1 text-ice-200">{selectedProject.category}</p>
                    </div>
                    
                    {/* --- DYNAMIC LINKS --- */}
                    <div className="flex gap-3">
                        {selectedProject.github && (
                            <a 
                                href={selectedProject.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                            >
                                <Github size={16} /> Code
                            </a>
                        )}
                        
                        {selectedProject.link && (
                            <a 
                                href={selectedProject.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-ice-600 px-4 py-2 text-sm font-medium text-white hover:bg-ice-500 transition-colors"
                            >
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>

                <div className="mt-6 space-y-4 text-slate-300">
                    <p>{selectedProject.description}</p>
                </div>

                <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ice-100">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}