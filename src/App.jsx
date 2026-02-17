import { useState } from 'react'; 
import SmoothScroll from './components/SmoothScroll';
import GlassCard from './components/GlassCard';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal'; 


const projects = [
  {
    id: 1,
    title: "Project Iceberg",
    category: "Dashboard Design",
    description: "A financial dashboard designed to visualize complex data streams in real-time. The goal was to reduce cognitive load for traders while maintaining high data density.",
    tech: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
    color: "from-ice-800 to-ice-900" 
  },
  {
    id: 2,
    title: "Lumina UI",
    category: "Design System",
    description: "A comprehensive design system built for enterprise-scale applications. It includes over 50 accessible components and a fully documented style guide.",
    tech: ["Figma", "Storybook", "React", "TypeScript"],
    color: "from-purple-900 to-indigo-900"
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SmoothScroll>
      <CustomCursor />
      
      
      <ProjectModal 
        selectedProject={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <Navbar />

      <div className="min-h-screen bg-ice-950 text-white font-sans selection:bg-ice-100 selection:text-ice-900">
        <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-30" />
        
        <main className="relative z-10 flex flex-col gap-20">
           
           <Hero />

           <section id="work" className="container mx-auto px-6">
             <div className="flex items-end justify-between mb-12">
                <h2 className="text-4xl font-display font-bold">Selected Works</h2>
                <span className="hidden md:block text-slate-400">Click a card to view details</span>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
              
               {projects.map((project) => (
                 <div key={project.id} onClick={() => setSelectedProject(project)}>
                   <GlassCard className="hover-trigger group cursor-none min-h-[400px] flex flex-col justify-between hover:bg-white/10 transition-colors">
                     
                    
                     <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.color} border border-white/5 mb-6 group-hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
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

           <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;