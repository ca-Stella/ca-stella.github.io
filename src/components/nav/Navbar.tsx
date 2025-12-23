export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold">
          Ca-Stella
        </span>

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
