import { useEffect, useState } from "react";
import { Menu} from "lucide-react";
import { X } from "lucide-react";

import { NavLink, useLocation } from "react-router";

import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const location = useLocation();

  // Cambiar el tema de la pagina
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Mantener el header fijo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menu al cambiar de pagina en dispositivos móviles
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed bg-white/80 dark:bg-gray-400 backdrop-blur-md shadow-md"
          : "absolute bg-white/80 dark:bg-gray-400 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src="/img/logo_nav.png" alt="logo" className="w-32 h-auto" />
        </NavLink>
        
        {/* Botón de menú para móviles */}
        <button className="md:hidden" aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación */}
        <nav
          className={`text-black md:flex gap-4 absolute md:static bg-white dark:bg-gray-400 md:bg-transparent w-full left-0 md:w-auto md:flex-row flex-col p-4 md:p-0 top-16 shadow-md md:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >

          <NavLink to="/" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta) dark:hover:text-(--rosa-palo)">Inicio</NavLink>
          <NavLink to="/nosotros" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta) dark:hover:text-(--rosa-palo)">Nosotros</NavLink>
          <NavLink to="/servicios" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta) dark:hover:text-(--rosa-palo)">Servicios</NavLink>
          <NavLink to="/contactanos" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta) dark:hover:text-(--rosa-palo)">Contáctanos</NavLink>
          
          {/* Boton para cambiar el tema */}
          <button className="hover:cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <LuSun  size={24} /> : <IoMoon size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
