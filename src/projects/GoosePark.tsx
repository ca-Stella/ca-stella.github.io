import { ProjectPage } from "../layout/ProjectPage";

export default function GoosePark() {
  return (
    <ProjectPage
      title="Goose Park"
      className="bg-white min-h-screen"
      textEmphasisColor="text-[#87d3de]"
    >
      <div className="space-y-6 text-base text-gray-700 leading-relaxed">
        <p>Description text</p>
      </div>
    </ProjectPage>
  );
}
