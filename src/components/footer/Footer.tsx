import { Heart, Coffee } from "lucide-react";

import { motion } from "motion/react";

export default function Footer() {
    return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{opacity : 1}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center pt-4 border-t-4 border-amber-200/50"
        >
          <p className="text-amber-700 flex items-center justify-center gap-2 flex-wrap">
            <img src="src/assets/castella.png" className="inline h-5"/>© {new Date().getFullYear()} Ca-Stella. All rights reserved.</p>
        </motion.div>    
        </footer>
  
    )}

