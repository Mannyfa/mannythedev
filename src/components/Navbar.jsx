import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Notes", href: "#notes" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // 1. Detect scroll to toggle the "Glass" state
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50 && latest > previous) {
        setIsScrolled(true);
    } else {
        setIsScrolled(false);
    }
  });

  return (
    <motion.header
     
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-ice-950/70 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <a href="#" className="relative z-50 text-2xl font-display font-bold tracking-tighter text-white">
          MANNY THE DEV<span className="text-ice-500">.</span>
        </a>

        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }} 
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white hover:underline decoration-ice-500 decoration-2 underline-offset-4"
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="ml-4 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
          >
            Let's Talk
          </motion.button>
        </nav>

      
        <button 
          className="z-50 block md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

       
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-screen w-screen flex flex-col items-center justify-center gap-8 bg-ice-950/95 backdrop-blur-xl md:hidden"
          >
             {navLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.href} 
                 className="text-3xl font-display font-bold text-white"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
             ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}