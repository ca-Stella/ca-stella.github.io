import './App.css'
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import GoosePark from './projects/GoosePark';
import Skylia from './projects/Skylia';
import StudyDashboard from './projects/StudyDashboard';

export default function App() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center">
      
    <Hero />
    <About />
    <Projects />
    <GoosePark />
    <Skylia />
    <StudyDashboard />
    </div>
  )
}
