import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-ice-900 p-8 shadow-2xl text-center"
          >
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-white/5 p-2 text-white hover:bg-white/20"
            >
                <X size={20} />
            </button>

            <h3 className="text-3xl font-display font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-slate-400 mb-8">Choose your preferred platform.</p>

            <div className="grid grid-cols-2 gap-4">
                {/* 1. X (Twitter) Button */}
                <a 
                    href="https://x.com/manny_ux" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/10 hover:scale-105"
                >
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    <span className="font-medium text-white">X / Twitter</span>
                </a>

                {/* 2. WhatsApp Button */}
                <a 
                    href="https://wa.me/2349065905546" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-green-900/20 p-6 transition-all hover:bg-green-900/40 hover:scale-105 hover:border-green-500/50"
                >
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-green-500 transition-transform group-hover:scale-110" aria-hidden="true">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.009.575 1.944.88 3.121.88 3.185 0 5.77-2.587 5.77-5.766.001-3.179-2.585-5.766-5.766-5.766zm9.956 1.482c-1.425-2.483-4.062-4.048-6.969-4.148h-.019c-4.408 0-7.999 3.59-8.003 7.999 0 1.41.368 2.787 1.066 3.996L6.5 21.499l6.096-1.599c1.171.639 2.508.979 3.849.98h.005c4.407 0 8.003-3.593 8.003-8.003 0-2.135-.83-4.142-2.336-5.648z"></path>
                    </svg>
                    <span className="font-medium text-green-400">WhatsApp</span>
                </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}