import { ProjectPage } from "../layout/ProjectPage";

export default function StudyDashboard() {
  return (
    <ProjectPage
      title="Study Pattern Dashboard"
      className="bg-white w-full max-w-full h-auto"
      textEmphasisColor="text-[#a188de]"
    >
      <div className="space-y-6 text-base text-gray-700 leading-relaxed">
        <p>I designed and developed an interactive analytics dashboard using Tableau to analyze and compare study patterns through subjective experiences and objective measures across four students throughout a semester. The goal of this project was to uncover study habits and patterns of each student that may influence our academic productivity and wellbeing.</p>
        <p>
            As students, we were particularly invested in this dataset because it offered us a way to reflect on our own study practices. With our final dashboard, we could start to identify which behaviors -- such as preferred study times, locations, or sleep habits -- are most strongly associated with effective study outcomes, namely productivity. We wanted to explore the inter-individual variability present in our study patterns and preferences that can help us gain a better understanding of strategies to optimize our wellbeing and performance. 
        </p>
      </div>
    </ProjectPage>
  );
}
