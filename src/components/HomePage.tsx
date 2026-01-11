import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./../App.css";
import Navbar from "./nav/Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./footer/Footer";
import Wave from "./../layout/Wave";

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
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center grow overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Wave />
      <Contact />
      <Footer />
    </div>
  );
}
