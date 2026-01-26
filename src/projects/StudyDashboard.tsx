import { ProjectPage } from "../layout/ProjectPage";
import { useEffect, useState } from "react";

export default function StudyDashboard() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    // Dynamically load the Tableau embedding script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
    script.async = true;
    document.body.appendChild(script);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Tableau original dimensions
  const originalWidth = 1050;
  const originalHeight = 1150;
  const aspectRatio = originalHeight / originalWidth; // 1.1

  // Determine container width and scale based on breakpoints
  let containerWidth = 0.7 * windowWidth;
  let scale = 0.8;
  let heightAdd = 200;

  if (windowWidth < 300) { // 
    containerWidth = 0.3 * windowWidth;
    scale = 0.15;
    heightAdd = 80;
  } else if (windowWidth < 400) { // 
    containerWidth = 0.3 * windowWidth;
    scale = 0.25;
    heightAdd = 150;
  } else if (windowWidth < 535) { // sm
    containerWidth = 0.6 * windowWidth;
    scale = 0.3;
    heightAdd = 10;
  } else if (windowWidth < 590) { // sm
    containerWidth = 0.6 * windowWidth;
    scale = 0.4;
    heightAdd = 45;
  }  else if (windowWidth < 690) { // md
    containerWidth = 0.55 * windowWidth;
    scale = 0.45;
    heightAdd = 100;
  }  else if (windowWidth < 800) { // md
    containerWidth = 0.55 * windowWidth;
    scale = 0.5;
    heightAdd = 100;
  }  else if (windowWidth < 925) { // md
    containerWidth = 0.55 * windowWidth;
    scale = 0.6;
    heightAdd = Math.max(150, containerWidth * 0.1);
  } else if (windowWidth < 1024) { // md
    containerWidth = 0.55 * windowWidth;
    scale = 0.7;
    heightAdd = 190;
  }  

  let containerHeight = containerWidth * aspectRatio + heightAdd;

  if (windowWidth >= 1024) {
    containerWidth = 0.7 * windowWidth;
    scale = 0.8;
    containerHeight = 860;
  }

  return (
    <ProjectPage
      title="Study Pattern Dashboard"
      className="bg-white h-auto"
      textEmphasisColor="text-[#a188de]"
    >
      <div className="space-y-6 text-base text-gray-700 leading-relaxed">
        <p>
          I designed and developed an interactive analytics dashboard using Tableau to analyze and compare study patterns through subjective experiences and objective measures across four students throughout a semester. The goal of this project was to uncover study habits and patterns of each student that may influence our academic productivity and wellbeing.
        </p>
        <p>
          As students, we were particularly invested in this dataset because it offered us a way to reflect on our own study practices. With our final dashboard, we could start to identify which behaviors — such as preferred study times, locations, or sleep habits — are most strongly associated with effective study outcomes, namely productivity. We wanted to explore the inter-individual variability present in our study patterns and preferences that can help us gain a better understanding of strategies to optimize our wellbeing and performance.
        </p>

        {/* Tableau embed */}
        <div
          style={{
            width: containerWidth + "px",
            height: containerHeight + "px",
            // overflow: "hidden",
            position: "relative",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
                          justifyContent: "center"

          }}
        >
          <div
            style={{
              width: originalWidth + "px",
              height: originalHeight + "px",
              transformOrigin: "top left",
              justifyContent: "center"
            }}
          >
            <tableau-viz
              src="https://public.tableau.com/views/Studypatternsandproductivity-Updated/Dashboard12?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
              hide-tabs
              hide-toolbar
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </ProjectPage>
  );
}
