import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import SmoothScroll from './components/SmoothScroll';
import GlassCard from './components/GlassCard';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page & Section Components
import Hero from './sections/Hero';
import About from './pages/About';

// Modals
import ProjectModal from './components/ProjectModal'; 
import ContactModal from './components/ContactModal';

// --- 1. IMPORT YOUR IMAGES HERE ---
// Make sure these files exist in src/images/
import feminaimh from './images/feminaimg.jpg'; 
import maxutimg from './images/maxutimg.jpg'; 

// --- 2. UPDATE DATA STRUCTURE ---
const projects = [
  {
    id: 1,
    title: "Femina Aid Network",
    category: "Website Design",
    description: "A financial dashboard designed to visualize complex data streams in real-time. The goal was to reduce cognitive load for traders while maintaining high data density.",
    tech: ["React", "Tailwind CSS", "Recharts"],
    image: feminaimh, 
    link: "hthttps://www.feminaaidnetwork.org", 
    github: "https://github.com/mannythedev/iceberg"
  },
  {
    id: 2,
    title: "Maxut Website",
    category: "Website Design",
    description: "A comprehensive design system built for enterprise-scale applications. It includes over 50 accessible components and a fully documented style guide.",
    tech: ["Figma", "Storybook", "React"],
    image: maxutimg, 
    link: "https://lumina-ui.com",
    github: "https://github.com/mannythedev/lumina"
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <SmoothScroll>
        <CustomCursor />
        
        {/* Pass the updated project data to the modal */}
        <ProjectModal 
          selectedProject={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
        
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />

        <Navbar onContactClick={() => setIsContactOpen(true)} />

        <div className="min-h-screen bg-ice-950 text-white font-sans selection:bg-ice-100 selection:text-ice-900">
          
          <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-30" />
          
          <main className="relative z-10 flex flex-col gap-20">
             
             <Routes>
                <Route path="/" element={
                  <>
                    <Hero onContactClick={() => setIsContactOpen(true)} />

                    <section id="work" className="container mx-auto px-6">
                      <div className="flex items-end justify-between mb-12">
                         <h2 className="text-4xl font-display font-bold">Selected Works</h2>
                         <span className="hidden md:block text-slate-400">Click a card to view details</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                          <div key={project.id} onClick={() => setSelectedProject(project)}>
                            <GlassCard className="hover-trigger group cursor-none min-h-[400px] flex flex-col justify-between hover:bg-white/10 transition-colors">
                              
                              {/* --- 3. UPDATED IMAGE CONTAINER --- */}
                              <div className="w-full h-64 rounded-xl overflow-hidden border border-white/5 mb-6 relative">
                                 {/* The Image */}
                                 <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                 />
                                 
                                 {/* Overlay (Tint) */}
                                 <div className="absolute inset-0 bg-ice-900/20 group-hover:bg-transparent transition-colors duration-500" />
                              </div>
                              
                              <div>
                                 <h3 className="text-2xl font-display font-bold group-hover:text-ice-200 transition-colors">
                                   {project.title}
                                 </h3>
                                 <p className="mt-2 text-slate-400">
                                   {project.category}
                                 </p>
                                 
                                 <div className="mt-4 flex gap-2 flex-wrap">
                                     {project.tech.slice(0, 3).map(t => (
                                         <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded-full text-slate-400">
                                           {t}
                                         </span>
                                     ))}
                                 </div>
                              </div>
                            </GlassCard>
                          </div>
                        ))}
                      </div>
                    </section>
                  </>
                } />

                <Route path="/about" element={<About />} />
             </Routes>

             <Footer />
          </main>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;