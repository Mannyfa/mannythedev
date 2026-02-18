import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ice-950/90 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-ice-900 p-8 shadow-2xl"
          >
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-white/5 p-2 text-white hover:bg-white/20"
            >
                <X size={20} />
            </button>

            <h3 className="text-3xl font-display font-bold text-white mb-2">Let's talk.</h3>
            <p className="text-slate-400 mb-6">Tell me about your project.</p>

            <form action="https://formspree.io/f/xdaldaow" method="POST" className="space-y-4">
                <div>
                    <label className="block text-sm text-slate-400 mb-1">Name</label>
                    <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-ice-500 transition-colors" />
                </div>
                <div>
                    <label className="block text-sm text-slate-400 mb-1">Email</label>
                    <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-ice-500 transition-colors" />
                </div>
                <div>
                    <label className="block text-sm text-slate-400 mb-1">Message</label>
                    <textarea name="message" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-ice-500 transition-colors"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-white text-ice-950 font-bold py-4 rounded-lg hover:bg-ice-200 transition-colors flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                </button>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}