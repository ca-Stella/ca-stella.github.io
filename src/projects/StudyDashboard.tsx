import { ProjectPage } from "../layout/ProjectPage";
// import "@tableau/embedding-api";
import { useEffect } from "react";

export default function StudyDashboard() {

    useEffect(() => {
    // Dynamically load the Tableau embedding script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // clean up on unmount
    };
  }, []);
  return (
    
    <ProjectPage
      title="Study Pattern Dashboard"
      className="bg-white h-auto" // w-full max-w-full 
      textEmphasisColor="text-[#a188de]"
    >
        <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

      <div className="space-y-6 text-base text-gray-700 leading-relaxed">
        <p>
            I designed and developed an interactive analytics dashboard using Tableau to analyze and compare study patterns through subjective experiences and objective measures across four students throughout a semester. The goal of this project was to uncover study habits and patterns of each student that may influence our academic productivity and wellbeing.
        </p>
        <p>
            As students, we were particularly invested in this dataset because it offered us a way to reflect on our own study practices. With our final dashboard, we could start to identify which behaviors -- such as preferred study times, locations, or sleep habits -- are most strongly associated with effective study outcomes, namely productivity. We wanted to explore the inter-individual variability present in our study patterns and preferences that can help us gain a better understanding of strategies to optimize our wellbeing and performance. 
        </p>
<div
  style={{
    width: "70vw",         // 1000 * 0.5
    // maxWidth: "1000px",
    // height: "auto",
    height: 70 * 4 / 5 + "vw",
    // // height: "auto",        // 800 * 0.5
    // overflow: "hidden",
    position: "relative",
    transform: "scale(0.4)",
    transformOrigin: "top left", // keep position aligned top-left
  }}
>
  <div
    style={{
      transformOrigin: "top left",  // keep alignment top-left
      width: "1000px",              // original Tableau width
      height: "1100px",              // original Tableau height
    }}
  >
    <tableau-viz
      src="https://public.tableau.com/views/Studypatternsandproductivity-Updated/Dashboard12?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
      hide-tabs
      style={{width: "100%",        // fill the container width
      height: "auto",       // auto height to keep aspect ratio
      aspectRatio: "1000/1100", // 1000/800 simplified ratio
      display: "block",     // avoid inline element spacing issues
       }}
      
    />
  </div>
</div>





      </div>
    </ProjectPage>
  );
}


/*


 <div style={{ 
    display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // overflow: "hidden", 
  }}>
    <div
     style={{
              transform: "scale(0.5)",      // shrink to 50%
              transformOrigin: "top left",  // align top-left
            }}
  >
      <tableau-viz
      src="https://public.tableau.com/views/Studypatternsandproductivity-Updated/Dashboard12?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" 
       hide-tabs
        style={{ }}> </tableau-viz>
    </div>
        </div>

*/