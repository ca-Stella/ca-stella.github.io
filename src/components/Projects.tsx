import { Section } from "../layout/Section";
export default function Projects() {
  // Projects!

  const projects = [
    {
      title: "Study Habit Dashboard",
      description:
        "Interactive dashboard showcasing study habits of four different students.",
      tags: ["Tableau"],
      bgColor: "bg-purple-100",

    },
    {
      title: "Goose Park",
      description:
        "Online multiplayer board game platform.",
      tags: ["Java", "JavaFX", "Maven", "JUnit", "TestFX"],
      bgColor: "bg-sky-100",
    },
    {
      title: "Skylia - Ongoing",
      description:
        "Day-to-day symptom tracker, exploring its connection to your environment.",
      tags: ["Typescript", "Next.js", "TailwindCSS", "Vite"],
      bgColor: "bg-rose-100",
    },
  ];

  return (
    <Section title="Featured Projects">
    
        {projects.map((project) => (
          // <div className="space-y-16">
          <div className={`relative ${project.bgColor} p-10`}>
            <h5 className="text-2xl font-semibold mb-4">{project.title}</h5>

            <div className="flex gap-3 flex-col">
              <p className="mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">{project.tags}</div>
            </div>
            {/* </div> */}
          </div>
        ))}
    </Section>
  );
}
