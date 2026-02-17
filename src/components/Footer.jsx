import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ice-950 px-6 pb-10 pt-32 overflow-hidden">
        {/* Background Gradient for Depth */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-ice-900/40 to-transparent pointer-events-none" />

        <div className="container mx-auto relative z-10 border-t border-white/10 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                
                <div>
                    <h2 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
                        Have an idea? <br />
                        <span className="text-slate-500">Let's build it.</span>
                    </h2>
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-10 flex items-center gap-4 rounded-full bg-ice-600 px-8 py-4 text-xl font-bold text-white transition-colors hover:bg-ice-500"
                    >
                        Start a project <ArrowUpRight />
                    </motion.button>
                </div>

                {/* 2. Navigation Links */}
                <div className="flex flex-col justify-between gap-10 md:items-end">
                     <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-left md:text-right">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                className="group flex items-center gap-2 text-lg text-slate-400 transition-colors hover:text-white"
                            >
                                {link.name}
                                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                            </a>
                        ))}
                     </div>

                     <div className="text-slate-500 text-sm md:text-right">
                        <p>&copy; {new Date().getFullYear()} MannyTD Portfolio.</p>
                        <p>Designed in Figma. Built with React & Tailwind.</p>
                     </div>
                </div>
            </div>
            
            
            <div className="mt-24 select-none">
                <h1 className="text-[12vw] font-bold leading-none tracking-tighter text-white/5 text-center">
                    MANNYTHEDEV
                </h1>
            </div>
        </div>
    </footer>
  );
}