import { motion, AnimatePresence } from "motion/react";
import { Section } from "../layout/Section";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skylia from "../projects/Skylia";
import GoosePark from "../projects/GoosePark";
import StudyDashboard from "../projects/StudyDashboard";
import ComingSoon from "../projects/ComingSoon";
export default function Projects() {
  // Projects!

  const projects = [
    {
      title: "Study Pattern Dashboard",
      description:
        "Interactive dashboard showcasing study patterns of four students across a semester!",
      tags: ["Tableau", "Excel"],
      bgColor: "bg-purple-100",
      slug: "study-dashboard",
      fileName: "StudyDashboard",
      expanded: StudyDashboard,
    },
    {
      title: "Goose Park",
      description:
        "Online multiplayer board game platform with an intense game of tic-tac-toe.",
      tags: ["Java", "JavaFX", "Maven", "JUnit", "TestFX"],
      bgColor: "bg-sky-100",
      slug: "goose-park",
      fileName: "GoosePark",
      expanded: GoosePark,
    },
    {
      title: "Skylia",
      description:
        "Day-to-day symptom tracker, exploring its connection to your environment.",
      tags: ["Typescript", "Next.js", "TailwindCSS", "Vite"],
      bgColor: "bg-rose-100",
      slug: "skylia",
      fileName: "Skylia",
      expanded: Skylia,
    },
  ];

  const [cardActives, setCardActives] = useState(
    Array(projects.length).fill(false)
  );

  // Scroll to section when button clicked
  const clickCard = (index: number) => {
    setCardActives((prev) =>
      prev.map((active, i) => (i === index ? !active : active))
    );
  };
  // TODO: Add project
  return (
    <>
      <section
        id="contact"
        className="pb-36 flex flex-col items-center  md:px-12 w-full -mb-20"
        style={{ width: "100vw" }}
      >
        <motion.div
          className="w-full max-w-6xl mt-24 mb-8 text-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
        >
          <h5 className="text-4xl font-semibold">Featured projects</h5>
        </motion.div>

        <motion.div
          layout
          className="flex flex-col gap-4 space-y-6 text-lg text-gray-700 relative"
          transition={{
            ease: "easeInOut",

            layout: { type: "spring", stiffness: 200, damping: 220 },
          }}
        >
          {projects.map((project, i) => {
            const Expanded = project.expanded;
            // <div className="space-y-16">
            // <Link
            //   key={project.title}
            //   to={`/projects/${project.slug}`}
            //   className="block"
            // >
            return (
              <div key={project.slug} className="col-span-full w-full">
                <motion.div
                  key={i}
                  className={`${project.bgColor} p-8 w-full rounded-3xl border-3 border-white shadow-lg z-10 relative`}
                  // onClick={() => alert("Coming soon! 😔")}
                  onClick={() => clickCard(i)}
                  initial={{opacity:0, y:80}}
                  whileHover={{ scale: 1.05 }}
                  whileInView={{opacity:1, y:0}}
                  transition={{
                    duration: 0.6,delay: 0.05, 
                    scale: {duration: 0.25}
                    // ease: "easeInOut"
                  }}
                >
                  <h5 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h5>
                  <div className="flex gap-3 flex-col">
                    <p className="mb-8">{project.description}</p>
                    <div className="flex flex-wrap justify-between">
                      <div
                        className="flex flex-wrap gap-2"
                        // TODO: add hover for tags specifically
                      >
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-5 py-1 bg-white/90 text-amber-900 rounded-full text-sm shadow-md border-2 border-yellow-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* <AnimatePresence>
                    {cardActives[i] && (
                      <motion.p
                        className="mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        🚧 Details coming soon...
                      </motion.p>
                    )}
                  </AnimatePresence> */}
                    </div>
                  </div>
                </motion.div>
                <AnimatePresence>
                  {cardActives[i] && (
                    <motion.div
                      className="mt-4 rounded-2xl bg-gray-50 shadow-md w-full z-0 origin-top"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.25 },
                      }}
                    >
                      {/* <Expanded /> */}
                      <div>
                        <ComingSoon />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* </Link> */}
              </div>
            );
          })}
        </motion.div>
      </section>{" "}
    </>
  );
}
