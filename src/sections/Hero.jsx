import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react"; 

const maskVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%", 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function Hero({ onContactClick }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-ice-800/20 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
          className="flex flex-col items-start gap-6"
        >
          
          {/* Status Badge */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-300">
              Available for new projects
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-display text-6xl font-bold leading-[1.1] tracking-tighter text-white md:text-8xl lg:text-9xl">
            
            <div className="overflow-hidden">
              <motion.div variants={maskVariants}>
                Building digital
              </motion.div>
            </div>
            
            <div className="overflow-hidden text-slate-500">
              <motion.div variants={maskVariants} className="flex items-center gap-4">
                <span>products,</span>
                <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: 100 }} 
                   transition={{ delay: 1, duration: 1 }} 
                   className="hidden h-2 bg-ice-800 md:block" 
                />
              </motion.div>
            </div>
            
            <div className="overflow-hidden">
              <motion.div variants={maskVariants}>
                brands, & Designs <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice-200 to-ice-600">experience.</span>
              </motion.div>
            </div>
          </h1>

          {/* Subtext */}
          <motion.p 
             variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1 } } }}
             className="mt-4 max-w-xl text-lg text-slate-400 md:text-xl"
          >
            I am a design engineer focused on crafting interfaces that feel natural, 
            responsive, and human.
          </motion.p>

          {/* Buttons Section - UPDATED */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 1.2 } } }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* 1. GitHub Link */}
            <a 
                href="https://github.com/Mannyfa" // Replace with your actual GitHub URL
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3 font-semibold text-ice-950 transition-all hover:bg-ice-100"
            >
              <Github className="relative z-10 h-4 w-4" />
              <span className="relative z-10">See my work</span>
            </a>
            
            {/* 2. Contact Modal Trigger */}
            <button 
                onClick={onContactClick} // Connected to the prop
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white/5"
            >
              Contact Me
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}