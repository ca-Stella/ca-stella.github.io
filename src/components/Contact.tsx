import { Section } from "../layout/Section";
import { Heart, Coffee, MessageCircleMore } from "lucide-react";
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
                <h5 className="text-red-600 font-medium">Email</h5>
                <p>in.heo@ucalgary.ca</p>
              </ContactCard>
              <ContactCard className="border-amber-400">
                <h5 className="text-amber-700 font-medium">Location</h5>
                <p>Calgary, AB</p>
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

    //   className={`min-h-screen max-h-fit flex flex-col items-center justify-center bg-amber-50 ${className}`}
    //   style={{ width: "100vw" }}
    // >
  );
}

{
  /*       <div className="max-w-5xl w-full px-12  my-24"></div>


  <Section title="Let's talk!" className="bg-white px-12">
        <span className="absolute animate-flashFace"></span>

        <div className="space-y-6 text-lg text-gray-700 relative">
          <p>
            I’ve always been fascinated by how we think, make decisions, and
            experience the world. That curiosity first drew me to neuroscience
            and psychology, and now drives my motivation in computer science, where I get to experiment, build, and solve problems at the crossroads of mind, behaviour, and technology.
          </p>

          <p>
            For me, programming and analysis aren’t just technical skills. I see data and code as tools to ask questions, uncover patterns, and derive insights from numbers and observations. I enjoy connecting abstract ideas and observations into something tangible, useful, and understandable.
          </p>

          <p>
            I aspire to bring together logic and creativity to craft thoughtful solutions. By layering ideas and experimenting with different approaches from a variety of fields, I aim to turn complex challenges into something elegant, satisfying, and memorable — like a recipe refined over time.
          </p>
        </div>
    </Section> */
}
