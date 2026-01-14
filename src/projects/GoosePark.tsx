import { ProjectPage } from "../layout/ProjectPage";

export default function GoosePark() {
  return (
    <ProjectPage
      title="Goose Park"
      className="bg-white w-full max-w-full h-auto"
      textEmphasisColor="text-[#87d3de]"
    >
      <div className="space-y-6 text-base text-gray-700 leading-relaxed">
        <p>Description text</p>
      </div>
    </ProjectPage>
  );
}
