import { ChefHat } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b-3 border-yellow-400">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-row  gap-2 justify-center text-4xl  bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
          <ChefHat size={32} className=" fill-orange-300 text-amber-800" />
          <h1>Ca-Stella</h1>
        </div>

        <ul className="flex gap-8 text-sm">
          <li>
            <a href="#about" className="hover:text-amber-600">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-amber-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-amber-600">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
