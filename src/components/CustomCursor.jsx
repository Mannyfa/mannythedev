import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
   
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('.hover-trigger'); 

      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 8), 
        y: mousePosition.y - (isHovering ? 24 : 8),
        width: isHovering ? 48 : 16, 
        height: isHovering ? 48 : 16,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    />
  );
}