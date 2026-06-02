import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; 

// Layout Components
import SmoothScroll from './components/SmoothScroll';
import GlassCard from './components/GlassCard';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper'; 

// Page & Section Components
import Hero from './sections/Hero';
import About from './pages/About';
import Experience from './sections/Experience'; 
import TechMarquee from './components/TechMarquee'; 
import NotFound from './pages/NotFound'; 

// Utilities
import SEO from './components/SEO'; 

// Modals
import ProjectModal from './components/ProjectModal'; 
import ContactModal from './components/ContactModal';

// --- 1. IMPORT YOUR IMAGES HERE ---
import feminaimh from './images/feminaimg.jpg'; 
import maxutimg from './images/maxutimg.jpg'; 
import vikky from './images/vickyimg.png';
import ttshop from './images/ttshp.png'
import foodwave from './images/foodwave.png';
import grandtech from './images/gtsweb.png';
// --- 2. DATA STRUCTURE ---
const projects = [
  {
    id: 1,
    title: "Femina Aid Network",
    category: "Website Design",
    description: "A platform designed to empower and support women through community networks. Focused on accessibility and warm, welcoming UI design.",
    tech: ["React", "Tailwind CSS", "Sanity CMS"],
    image: feminaimh, 
    link: "https://www.feminaaidnetwork.org", 
    github: null 
  },
  {
    id: 2,
    title: "Maxut Website",
    category: "Corporate Website",
    description: "A professional corporate website built for scalability and performance. Includes a custom component library and optimized assets.",
    tech: ["React", "Figma", "Storybook"],
    image: maxutimg, 
    link: "https://maxut.com", 
    github: null
  },
  {
    id: 3,
    title: "OpeVickyscent Website",
    category: "E-Commerce Website",
    description: "A professional e-commerce website built for scalability and performance. Includes a custom component library and optimized assets.",
    tech: ["React", "Figma", "vite"],
    image: vikky, 
    link: "https://www.opevickyscents.com.ng", 
    github: null
  },
  {
    id: 4,
    title: "Tailorshop Website",
    category: "E-Commerce Website",
    description: "A professional e-commerce website built for scalability and performance. Includes a custom component library and optimized assets.",
    tech: ["React", "Figma", "vite"],
    image: ttshop, 
    link: "https://thetailorshop.vercel.app", 
    github: null
  },
  {
    id: 5,
    title: "Foodwave bistro Website",
    category: "Restaurant Website",
    description: "A professional restaurant website built for scalability and performance. Includes a custom component library and optimized assets.",
    tech: ["React", "Figma", "vite"],
    image: foodwave, 
    link: "https://www.foodwavebistro.com", 
    github: null
  },
  {
    id: 6,
    title: "Grand tech solutions Website",
    category: "Corporate Website",
    description: "A professional corporate website built for scalability and performance. Includes a custom component library and optimized assets.",
    tech: ["React", "Figma", "vite"],
    image: grandtech, 
    link: "https://grandtech-solutions.com", 
    github: null
  },

];

// --- 3. INNER CONTENT COMPONENT ---
function AppContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation(); 

  return (
    <>
      <CustomCursor />
      
      {/* Modals */}
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
            
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                
                
                <Route path="/" element={
                  <PageWrapper>
                    <SEO 
                      title="Portfolio" 
                      description="Senior Frontend Engineer specializing in React, Tailwind, and High-Performance UI." 
                    />
                    
                    <Hero onContactClick={() => setIsContactOpen(true)} />

                    
                    <TechMarquee />

                    <section id="work" className="container mx-auto px-6 pt-20">
                      <div className="flex items-end justify-between mb-12">
                         <h2 className="text-4xl font-display font-bold">Selected Works</h2>
                         <span className="hidden md:block text-slate-400">Click a card to view details</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                          <div key={project.id} onClick={() => setSelectedProject(project)}>
                            <GlassCard className="hover-trigger group cursor-none min-h-[400px] flex flex-col justify-between hover:bg-white/10 transition-colors">
                              
                              <div className="w-full h-64 rounded-xl overflow-hidden border border-white/5 mb-6 relative">
                                 <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                 />
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
                  </PageWrapper>
                } />

                
                <Route path="/about" element={
                  <PageWrapper>
                    <SEO 
                      title="About Me" 
                      description="Bio and Experience of a Senior Frontend Engineer." 
                    />
                    <About />
                    <Experience /> 
                  </PageWrapper>
                } />

                
                <Route path="*" element={
                   <PageWrapper>
                      <SEO title="Page Not Found" description="The requested page does not exist." />
                      <NotFound />
                   </PageWrapper>
                } />

              </Routes>
            </AnimatePresence>

            <Footer />
        </main>
      </div>
    </>
  );
}

// --- 4. MAIN APP WRAPPER ---
function App() {
  return (
    <Router>
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </Router>
  );
}

export default App;