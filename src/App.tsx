import './App.css'
import Navbar from './components/nav/Navbar';

import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';
import Wave from './layout/Wave';

export default function App() {
  return (
    <body className=" overflow-x-hidden">
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center grow">
    <Navbar />

    <Hero />
    <About />
    <Projects />
    <Wave />
    <Contact />
    <Footer />

    </div></body>
  )
}
