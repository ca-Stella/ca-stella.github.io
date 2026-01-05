
import { ChefHat, User, Briefcase, Code, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
  { icon: ChefHat, label: 'Home', color: 'from-amber-200 to-orange-200' },
  { icon: User, label: 'Skills', color: 'from-orange-200 to-yellow-200' },
  { icon: Code, label: 'Projects', color: 'from-yellow-200 to-rose-200' },
  { icon: Briefcase, label: 'Experience', color: 'from-rose-200 to-pink-200' },
  { icon: Mail, label: 'Contact', color: 'from-pink-200 to-amber-200' },
];


  return (

    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border-3 rounded-4xl border-yellow-400 "
    style={{
          boxShadow: '0 10px 40px rgba(251, 191, 36, 0.3)'
        }}>
      <div className="max-w-6xl mx-auto px-6 h-16 gap-20 flex items-center justify-between">
        {navItems.map((item, index) => (
          <button key={index}
          className=" rounded-full p-2"
          onClick={() => setActiveIndex(index)}>
            <item.icon className="w-5 h-5 text-amber-600 rounded-full"/>



          </button>
)        )}
        
        </div>

       </nav> 
      );}


/* 
        <ul className="flex gap-8 text-sm">
          <li>
            <a href="#hero" aira-label="Home" >
              <ChefHat className="text-amber-600"/>
            </a>
          </li>
          <li>
            <a href="#about" aira-label="About me">
              <User  className="text-amber-600"/>
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
    </nav> */