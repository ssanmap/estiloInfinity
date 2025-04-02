import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array de navegación REUTILIZABLE (incluye el botón de reserva)
  const navItems = [
    { path: "/", name: "Inicio" },
    { path: "/servicios", name: "Servicios" },
    { path: "/galeria", name: "Galería" },
    { path: "/experiencia", name: "Experiencia" },
    { path: "/contacto", name: "Contacto", isButton: true } // <- Nuevo campo
  ];

  return (
    <nav className="bg-black border-b border-gold/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.jpg" alt="Estilo Infinity" className="h-12" />
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            item.isButton ? (
              <Link
                key={item.path}
                to={item.path}
                className="bg-gold text-black px-6 py-2 rounded-md font-bold hover:bg-gold/80 transition"
              >
                Reservar
              </Link>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="text-gold hover:text-white transition font-montserrat"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Menú Hamburguesa (Mobile) */}
        <button 
          className="md:hidden text-gold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black-light border-t border-gold/20">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${item.isButton ? 'bg-gold text-black text-center' : 'text-gold'} 
                  hover:bg-gold/80 transition font-montserrat py-2 rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                {item.isButton ? 'Reservar' : item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};