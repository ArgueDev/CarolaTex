import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src="/img/logo_nav.png" alt="logo" className="w-32 h-auto" />
        </NavLink>
        
        {/* Botón de menú para móviles */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación */}
        <nav
          className={`md:flex gap-4 absolute md:static bg-white md:bg-transparent w-full left-0 md:w-auto md:flex-row flex-col p-4 md:p-0 top-16 shadow-md md:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >

          <NavLink to="/" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta)">Inicio</NavLink>
          <NavLink to="/nosotros" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta)">Nosotros</NavLink>
          <NavLink to="/servicios" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta)">Servicios</NavLink>
          <NavLink to="/contactanos" className="block font-bold  py-2 px-4 md:p-0 hover:text-(--verde-menta)">Contáctanos</NavLink>
          
        </nav>
      </div>
    </header>
  );
}
