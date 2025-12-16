import { Section } from "../layout/Section";
export default function Projects() {
  // Projects!

  const projects = [
    {
      title: "Study Habit Data Visualization Dashboard",
      description:
        "Interactive dashboard showcasing study habits of four different students.",
      tags: ["Tableau"],
      bgColor: "bg-rose-100",

    },
    {
      title: "Goose Park",
      description:
        "Online multiplayer board game platform.",
      tags: ["Java", "JavaFX", "Maven", "JUnit", "TestFX"],
      bgColor: "bg-purple-100",
    },
    {
      title: "Skylia - Ongoing",
      description:
        "Day-to-day symptom tracker, exploring its connection to your environment.",
      tags: ["Typescript", "Next.js", "TailwindCSS", "Vite"],
      bgColor: "bg-sky-50",
    },
  ];

  return (
    <Section title="Featured Projects">
    
      <div className="max-w-4xl">
        {projects.map((project) => (
          // <div className="space-y-16">
          <div className={`relative ${project.bgColor} p-10`}>
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <div className="flex gap-3 flex-col">
              <p className="">{project.description}</p>

              <div className="flex flex-wrap gap-2">{project.tags}</div>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </Section>
  );
}
