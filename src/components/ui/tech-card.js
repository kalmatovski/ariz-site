"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TechCard = ({ 
  children, 
  className, 
  glow = false, 
  hover = true,
  gradient = false,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative bg-card border border-border rounded-card p-6",
        "backdrop-blur-sm transition-all duration-300",
        glow && "shadow-glow",
        hover && "hover:shadow-glow-lg hover:border-primary/50",
        gradient && "bg-gradient-to-br from-card to-card-secondary",
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 rounded-card bg-gradient-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default TechCard;