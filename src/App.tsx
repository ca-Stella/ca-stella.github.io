import './App.css'
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GoosePark from './projects/GoosePark';
import Skylia from './projects/Skylia';
import StudyDashboard from './projects/StudyDashboard';

export default function App() {
  return (
    <body className=" overflow-x-hidden">
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center grow">
      
    <Hero />
    <About />
    <Projects />
    <Contact />

    </div></body>
  )
}
// End: Made using React, Vite, TypeScript, Tailwind CSS, Framer Motion