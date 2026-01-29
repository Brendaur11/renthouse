import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">RentHouse</h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-700">Inicio</Link>
          <Link to="/nosotros" className="hover:text-blue-700">Nosotros</Link>
          <Link to="/propiedades" className="hover:text-blue-700">Propiedades</Link>
          <Link to="/favoritos" className="hover:text-blue-700">Favoritos</Link>
          <Link to="/ayuda" className="hover:text-blue-700">Ayuda</Link>
        </ul>

        {/* Botón + hamburguesa */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            Contactanos
          </button>

          {/* Icono hamburguesa */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-blue-600"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
        `}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-semibold shadow-lg">
          <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/propiedades" onClick={() => setOpen(false)}>Propiedades</Link>
          <Link to="/favoritos" onClick={() => setOpen(false)}>Favoritos</Link>
          <Link to="/ayuda" onClick={() => setOpen(false)}>Ayuda</Link>

          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Contactanos
          </button>
        </ul>
      </div>
    </nav>
  );
}
