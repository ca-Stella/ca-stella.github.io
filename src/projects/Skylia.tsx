import { ProjectPage } from "../layout/ProjectPage";

export default function About() {
  return (
    <ProjectPage
      title="Skylia"
      className="bg-white min-h-screen"
      textEmphasisColor="text-[#EEAAA7]"
    >
      <div className="space-y-6 text-base text-gray-700 leading-relaxed">
        <p>Description text</p>
      </div>
    </ProjectPage>
  );
}
