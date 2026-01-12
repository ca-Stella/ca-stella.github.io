import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./../App.css";
import Navbar from "./nav/Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./footer/Footer";
import Wave from "./../layout/Wave";

export default function HomePage() {
      const { hash } = useLocation(); // grabs #projects if the URL is "/#projects"


  useEffect(() => {
    // Prevent browser from restoring scroll on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [hash]);


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
