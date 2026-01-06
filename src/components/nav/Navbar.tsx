import { ChefHat, User, Code, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: ChefHat, label: "Home", color: "from-amber-200 to-orange-200" },
    { icon: User, label: "Skills", color: "from-orange-200 to-yellow-200" },
    { icon: Code, label: "Projects", color: "from-yellow-200 to-amber-200" },
    { icon: Mail, label: "Contact", color: "from-amber-200 to-orange-200" },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 border-2 border-yellow-300 rounded-full bg-white/70 backdrop-blur-lg"
      style={{
        boxShadow: "0 8px 20px rgba(255, 199, 4, 0.4)",
      }}
    >
      <div className="flex items-center justify-center gap-3 px-2 py-2 rounded-full shadow-lg">
        {navItems.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              const sectionIds = ["hero", "about", "projects", "contact"];
              const el = document.getElementById(sectionIds[index]);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="relative w-14 h-14 flex items-center justify-center rounded-full p-0 outline-none focus:outline-none bg-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            {/* Gradient background for active button */}
            {activeIndex === index && (
              <motion.div
                layoutId="activeBackground"
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} z-0`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Icon */}
            <item.icon
              className={`w-10 h-10 z-10 ${
                activeIndex === index ? "text-amber-800" : "text-amber-600"
              }`}
            />
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
