
import { motion } from "framer-motion";

const GlassCard = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10 ${className}`}
    >
      
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-ice-500/10 blur-3xl" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
export default GlassCard;