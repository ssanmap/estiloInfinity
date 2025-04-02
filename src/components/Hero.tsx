// src/components/Hero.tsx
import { Link } from 'react-router-dom'; 
export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con opacidad */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-30"></div>
      
      {/* Overlay negro para contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-playfair text-gold mb-4 animate-fade-in">
          Estilo Infinity
        </h1>
        <p className="text-xl md:text-2xl text-white font-montserrat mb-8">
          Precisión. Elegancia. Tradición.
        </p>
        <Link 
          to="/contacto" 
          className="bg-gold text-black px-8 py-3 rounded-md font-bold hover:bg-gold/80 transition text-lg animate-pulse"
        >
          Reserva tu Cita
        </Link>
      </div>
    </section>
  );
};