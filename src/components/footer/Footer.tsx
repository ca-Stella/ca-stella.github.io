import { ChefHat } from "lucide-react";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center pt-4 border-t-4 border-amber-200/50"
      >
        <p className="text-amber-700 flex items-center justify-center gap-1.5 flex-wrap mb-2">
          <ChefHat size={24} className="-mt-1 inline fill-orange-300 text-amber-800" />
          © {new Date().getFullYear()} Ca-Stella. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 italic">
          Built with React & Typescript, powered by Vite, styled with Tailwind
          CSS, and animated using Motion.
        </p>
      </motion.div>
    </footer>
  );
}
