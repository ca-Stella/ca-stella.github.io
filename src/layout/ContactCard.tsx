import type { ReactNode } from "react";
import { motion } from "motion/react";

type ContactCardProps = {
  children: ReactNode;
  className?: string;
};

export function ContactCard({ children, className = "" }: ContactCardProps) {
  return (
    <motion.div
      className={`px-8 py-8 rounded-3xl border-3 shadow-lg justify-center ${className}`}
      initial={{ scale: 1.0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", bounce: 0.6}}
    >
      {children}
    </motion.div>
  );
}
