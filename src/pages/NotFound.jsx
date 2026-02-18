import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-ice-950 text-white">
      <h1 className="text-9xl font-display font-bold text-ice-800 opacity-20">404</h1>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute flex flex-col items-center gap-4"
      >
        <p className="text-2xl text-slate-300">This page has melted.</p>
        <Link to="/" className="rounded-full bg-white px-6 py-2 text-ice-950 font-bold hover:bg-ice-100 transition-colors">
            Return Home
        </Link>
      </motion.div>
    </div>
  );
}