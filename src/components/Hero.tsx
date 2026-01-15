import castella from "./../assets/castella.png";
import { easeOut, motion } from "motion/react";

export default function Hero() {
  return (
    <div id="hero" className="pt-10 flex flex-col justify-center items-center min-h-screen w-full max-w-full overflow-x-hidden rounded-xl">
      <motion.img
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
        className="mb-2 relative max-w-[20%] min-w-[100px] h-auto"
        src={castella}
      />

      <h1
        className="overflow-hidden text-center font-bold
               text-6xl sm:text-7xl md:text-7xl lg:text-8xl
                     max-w-full break-words">
        {/* For exact gradient and animation combination, I had to hardcode these ;-; */}
        <motion.span
          className="inline-block bg-gradient-to-r from-amber-600 to-[#ea7800] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.4,
            ease: easeOut,
          }}
        >C</motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#eb7800] to-[#f37e00] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.65,
            duration: 0.4,
            ease: easeOut,
          }}
        >a</motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#ec7901] to-[#f88200] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.4,
            ease: easeOut,
          }}
        >
          {" "}
          -{" "}
        </motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#f98200] to-[#ff8800] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.75,
            duration: 0.4,
            ease: easeOut,
          }}
        >S</motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#ff8904] to-[#ff9000] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.4,
            ease: easeOut,
          }}
        >t</motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#ff9200] to-[#fb9b02] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.85,
            duration: 0.4,
            ease: easeOut,
          }}>e</motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#fb9c01] to-[#f9a100] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.4,
            ease: easeOut,
          }}>l</motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#f8a203] to-[#f6a600] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.95,
            duration: 0.4,
            ease: easeOut,
          }}
        >l</motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-[#f5a700] to-yellow-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 1,
            duration: 0.4,
            ease: easeOut,
          }}
        >a</motion.span>
      </h1>

      <motion.h2
        className="text-center font-bold text-cinnamon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.4 }}
      >
        Computer Science & Data Science Student
      </motion.h2>
      <motion.div
        className="mt-1 text-center text-cinnamon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.4 }}
      >
        <h3>🥣 Baking data into delightful insights</h3>
        <h3>🍰 Making tech as sweet as cake</h3>
      </motion.div>
    </div>
  );
}
