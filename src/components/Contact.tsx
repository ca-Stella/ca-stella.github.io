import {
  Heart,
  Coffee,
  School,
  Mail,
  HouseHeart,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "motion/react";
import { ContactCard } from "../layout/ContactCard";
import { FaGithub, FaDiscord } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pb-36 flex flex-col items-center bg-white px-4 md:px-12 max-w-5xl w-full"
      style={{ width: "100vw" }}
    >
      {/* Header */}
      <motion.div
        className="w-full max-w-5xl mt-24 px-12 text-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
      >
        <div className="flex flex-row items-center justify-center gap-4 mb-8">
          <motion.span
            animate={{ rotate: [15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Heart className="w-10 h-10 text-rose-400 fill-rose-300" />
          </motion.span>

          <h5 className="text-4xl font-semibold">Let's talk!</h5>

          <motion.div
            animate={{ rotate: [0, 15] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Coffee className="w-11 h-11 text-amber-600 fill-amber-500" />
          </motion.div>
        </div>
      </motion.div>

      <div className="px-12 flex flex-col items-center gap-8 max-w-5xl w-full">
        {/* Get in touch card */}
        <motion.div
          className="w-full py-6 px-12 md:px-8 md:py-8 rounded-3xl border-3 border-yellow-300 shadow-xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-row justify-between items-center mb-4">
            <h5 className="text-2xl font-semibold">Get in touch with me!</h5>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircleMore className="w-9 h-9 text-amber-500 fill-amber-200" />
            </motion.span>
          </div>
          <p className="text-left">
            I'm currently looking for an opportunity to learn and collaborate
            with others. I would love to chat about any software innovations,
            data science projects, and/or research collaborations!
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid md:grid-cols-2 gap-12 w-full">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
            >
              <ContactCard className="border-red-300">
                <h5 className="text-red-600 font-medium mb-3">Email</h5>
                <p className="flex flex-row gap-4 items-center mb-2">
                  <School className="text-red-400" /> in.heo@ucalgary.ca
                </p>
                <p className="flex flex-row gap-4 items-center">
                  <Mail className="text-red-400" /> stella.2532@gmail.com
                </p>
              </ContactCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
            >
              <ContactCard className="border-amber-400">
                <h5 className="text-orange-700 font-medium mb-3">Location</h5>
                <p className="flex flex-row gap-4 items-center">
                  <HouseHeart className="text-amber-500" /> Calgary, AB
                </p>
              </ContactCard>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
          >
            <ContactCard>
              <motion.a
                href="https://github.com/ca-Stella"
                className="relative w-14 h-14 flex items-center justify-center rounded-full p-0 outline-none focus:outline-none bg-transparent text-gray-800"
                whileHover={{ scale: 1.6, color: "#7C3AED" }}
                whileTap={{ scale: 1.6, color: "#7C3AED" }}
              >
                <FaGithub size={24}></FaGithub>
              </motion.a>
              <motion.a
                href="https://discord.com/users/stella2532"
                className="relative w-14 h-14 flex items-center justify-center rounded-full p-0 outline-none focus:outline-none bg-transparent text-gray-800"
                whileHover={{ scale: 1.6, color: "#5865F2" }}
                whileTap={{ scale: 1.6, color: "#5865F2" }}
              >
                <FaDiscord size={24} />
              </motion.a>
            </ContactCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
