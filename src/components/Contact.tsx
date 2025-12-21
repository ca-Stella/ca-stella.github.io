import { Section } from "../layout/Section";
import { Heart, Coffee, School, Mail, HouseHeart, MessageCircleMore } from "lucide-react";
import { easeOut, motion } from "motion/react";
import { ContactCard } from "../layout/ContactCard";

export default function Contact() {
  return (
    <section
      className="min-h-screen max-h-fit flex flex-col items-center bg-white px-12"
      style={{ width: "100vw" }}
    >
      <div className="w-full px-12 mt-24 mb-8 max-w-5xl">
        <div className="flex flex-row items-center justify-center gap-4 mb-12">
          <motion.span
            // animate={{ scale: [1, 1.1, 1] }}
            // transition={{ duration: 2, repeat: Infinity }}>
            animate={{ rotate: [15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Heart className="w-10 h-10 text-rose-400 fill-rose-300" />
          </motion.span>
          <h5 className="text-4xl font-semibold"> Let's talk!</h5>
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
        <div className="flex flex-col items-center gap-8">
          <div className="px-12 py-8 rounded-3xl border-3 border-yellow-300 shadow-lg justify-center">
            <div className="flex flex-row gap-2  justify-between items-baseline">
              <h5 className="text-2xl font-semibold mb-2">
                Get in touch with me!{" "}
              </h5>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircleMore className="w-9 h-9 text-amber-500 fill-amber-200" />
              </motion.span>
            </div>
            <p>
              I'm currently looking for an opportunity to learn and collaborate
              with others. I would love to chat about any software innovations,
              data science projects, and/or research collaborations!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 w-full">
            <div className="space-y-8 ">
              <ContactCard className="border-red-300">
                <h5 className="text-red-600 font-medium mb-3">Email</h5>
                <p className="flex flex-row gap-4 mb-2"><School className="text-red-400"/>in.heo@ucalgary.ca</p>
                <p className="flex flex-row gap-4"><Mail className="text-red-400" />stella.2532@gmail.com</p>

              </ContactCard>
              <ContactCard className="border-amber-400">
                <h5 className="text-orange-700 font-medium mb-3">Location</h5>
                <p className="flex flex-row gap-4 mb-2"><HouseHeart className="text-amber-500"/>Calgary, AB</p>
              </ContactCard>
            </div>
              <div><ContactCard className="">
                <h5>Lol</h5>
                <h5>Lol</h5>
                <h5>Lol</h5>
              </ContactCard>
              </div>
          </div>
        </div>
      </div>
    </section>

  );
}
