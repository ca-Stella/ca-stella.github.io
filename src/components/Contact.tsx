import { Section } from "../layout/Section";
import { Heart, Coffee } from "lucide-react";
import { easeOut, motion } from "motion/react";

export default function Contact() {
  return (
    <section
      className="min-h-screen max-h-fit flex flex-col items-center bg-white"
      style={{ width: "100vw" }}
    >
            <div className="max-w-5xl w-full px-12  my-24">

      <div className="flex flex-row items-center justify-center gap-4">
        <motion.span
          // animate={{ scale: [1, 1.1, 1] }}
          // transition={{ duration: 2, repeat: Infinity }}>
          animate={{ rotate: [15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
          <Heart className="w-10 h-10 text-rose-400 fill-rose-300" />
        </motion.span>
        <h5 className="text-4xl font-semibold"> Let's talk!</h5>
        <motion.div
              animate={{ rotate: [0, 15] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <Coffee className="w-11 h-11 text-amber-600 fill-amber-500" />
            </motion.div>
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
