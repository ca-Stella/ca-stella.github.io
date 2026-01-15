import { useEffect } from "react";

import './App.css'
import Navbar from './components/nav/Navbar';
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';
import Wave from './layout/Wave';


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
    // <body className=" overflow--hidden">
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center grow overflow-x-hidden">
    <Navbar />

    <Hero />
    <About />
    <Projects />
    <Wave />
    <Contact />
    <Footer />

    </div>
    // </body>
  )
}
