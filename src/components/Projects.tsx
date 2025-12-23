import { Section } from "../layout/Section";
export default function Projects() {
  // Projects!

  const projects = [
    {
      title: "Study Pattern Dashboard",
      description:
        "Interactive dashboard showcasing study patterns of four students across a semester.",
      tags: ["Tableau", "Excel"],
      bgColor: "bg-purple-100",
    },
    {
      title: "Goose Park",
      description: "Online multiplayer board game platform with an intense game of tic-tac-toe.",
      tags: ["Java", "JavaFX", "Maven", "JUnit", "TestFX"],
      bgColor: "bg-sky-100",
    },
    {
      title: "Skylia",
      description:
        "Day-to-day symptom tracker, exploring its connection to your environment.",
      tags: ["Typescript", "Next.js", "TailwindCSS", "Vite"],
      bgColor: "bg-rose-100",
    },
  ];

  return (
    <Section title="Featured projects" className=" px-12" id="projects">
      <div className="space-y-6 text-lg text-gray-700 relative">
        {projects.map((project) => (
          // <div className="space-y-16">

          <div className={`${project.bgColor} p-8 rounded-3xl border-3 border-white shadow-lg`}>
            <h5 className="text-2xl font-semibold mb-4">{project.title}</h5>

            <div className="flex gap-3 flex-col">
              <p className="mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                    <span
                    key={tagIndex} 
                    className="px-5 py-1 bg-white/90 text-amber-900 rounded-full text-sm shadow-md border-2 border-yellow-400">{tag}</span>
                ))}</div>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </Section>
  );
}
