import { useParams } from "react-router-dom";

const projects = [
  { title: "Skylia", slug: "skylia", description: "Day-to-day symptom tracker..." },
  { title: "Goose Park", slug: "goose-park", description: "Online multiplayer board game..." },
  { title: "Study Pattern Dashboard", slug: "study-dashboard", description: "Interactive dashboard..." },
];

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Project not found 😅</p>;

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
