import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black-light border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src="/assets/logo.svg" alt="Estilo Infinity" className="h-12" />
        <div className="hidden md:flex space-x-8">
          {["Inicio", "Servicios", "Galería", "Experiencia", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gold font-montserrat hover:text-white transition">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-gold text-black px-6 py-2 rounded-md font-bold hover:bg-gold/80 transition md:block hidden">
          Reservar
        </button>
        {/* Mobile menu */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden bg-black-light pb-4 px-6">
          {["Inicio", "Servicios", "Galería", "Experiencia", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-gold py-2 hover:text-white">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};