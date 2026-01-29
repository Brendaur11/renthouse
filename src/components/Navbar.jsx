import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">RentHouse</h1>

        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          <Link to="/" className="cursor-pointer hover:text-blue-700">Inicio</Link>
          <Link to="/nosotros" className="cursor-pointer hover:text-blue-700">Nosotros</Link>
          <Link to="/propiedades" className="cursor-pointer hover:text-blue-700">Propiedades</Link>
          <Link to="/favoritos" className="cursor-pointer hover:text-blue-700">Favoritos</Link>
          <Link to="/ayuda" className="cursor-pointer hover:text-blue-700">Ayuda</Link>
        </ul>

        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-blue-700">
            Contactanos
          </button>
        </div>
      </div>
    </nav>
  );
}
