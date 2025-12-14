import castella from "./../assets/castella.png";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen">
      <motion.img
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
        className="mb-8 inline-block relative"
        style={{ maxWidth: "20%", height: "auto" }}
        src={castella}
      />
      
      <motion.h1 className="-mt-5 -mb-1 text-center bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: "easeOut",
              }}> Ca-Stella
      </motion.h1>

      <h2 className="text-center font-bold text-cinnamon">
        Computer Science & Data Science Student
      </h2>
      <div className="mt-1">
        <h3 className="text-center text-cinnamon">
          🥣 Baking data into delightful insights
        </h3>
        <h3 className="text-center text-cinnamon">
          🍰 Making tech as sweet as cake
        </h3>
      </div>
    </div>
  );
}
