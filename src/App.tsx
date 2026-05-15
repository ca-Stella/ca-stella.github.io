import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage"
import StudyDashboard from "./projects/StudyDashboard"
// import GoosePark from "./projects/GoosePark"
// import EaseTrace from "./projects/EaseTrace"
import ComingSoon from "./projects/ComingSoon"
import Cognia from "./projects/Cognia"

export default function App() {
  useEffect(() => {
    // Prevent browser from restoring scroll on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/projects/skylia" element={<Skylia />} /> */}
      <Route path="/projects/easetrace" element={<ComingSoon />} />
      {/* <Route path="/projects/goose-park" element={<GoosePark />} /> */}
      <Route path="/projects/goose-park" element={<ComingSoon />} />
      <Route path="/projects/study-dashboard" element={<StudyDashboard />} />
      <Route path="/projects/cognia" element={<Cognia />} />
      {/* <Route path="/projects/study-dashboard" element={<ComingSoon />} /> */}
    </Routes>
  );
}
