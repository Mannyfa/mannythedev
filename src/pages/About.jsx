import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import Terminal from '../components/Terminal'; 

import profileImg from '../images/profile.jpg'; 

export default function About() {
  return (
    <section className="container mx-auto px-6 pt-32 pb-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* 1. Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 sticky top-32" // Makes the image stick while scrolling
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-ice-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                    src={profileImg} 
                    alt="Profile" 
                    className="relative z-10 w-full h-[500px] object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
            
            <div className="flex gap-4 pt-8">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white">3+</span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest">Years Exp.</span>
                </div>
                <div className="h-12 w-[1px] bg-white/10" />
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white">20+</span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest">Projects</span>
                </div>
            </div>
        </motion.div>

        {/* 2. Text & Interactive Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 space-y-8"
        >
            <div>
              <h1 className="text-5xl font-display font-bold text-white">
                  Behind the <span className="text-ice-400">Code.</span>
              </h1>
              <p className="mt-4 text-xl text-slate-400">
                I merge technical precision with aesthetic beauty. Get to know me by interacting with the terminal below.
              </p>
            </div>
            
            {/* The new Interactive Terminal */}
            <Terminal />

            <GlassCard>
                <p className="text-slate-300 text-lg leading-relaxed">
                    Hello! I'm a passionate developer based in Lagos. I specialize in building digital experiences that merge technical precision with aesthetic beauty.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mt-4">
                    When I'm not coding, I'm exploring new UI trends, contributing to open source, or gaming.
                </p>
            </GlassCard>
            
        </motion.div>
      </div>
    </section>
  );
}