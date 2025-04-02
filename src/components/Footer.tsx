import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importa íconos

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gold/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <img src="/images/logo.jpg" alt="Estilo Infinity" className="h-10 mx-auto md:mx-0" />
            <p className="text-gold/80 font-montserrat mt-2">Precisión. Estilo. Infinito.</p>
          </div>
          
          {/* Redes Sociales con íconos profesionales */}
          <div className="flex space-x-6">
            <a 
              href="https://wa.me/56984669764" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition text-2xl"
              aria-label="WhatsApp"
            >
              <div className="relative group">
  <FaWhatsapp className="text-2xl" />
  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
    Escríbenos
  </span>
</div>
            </a>
            
            <a 
              href="https://instagram.com/estilo_infinity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram /> {/* Ícono Instagram */}
            </a>
            
            <a 
              href="https://facebook.com/tupagina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook /> {/* Ícono Facebook */}
            </a>
          </div>
        </div>
        
        {/* Derechos de autor */}
        <div className="mt-8 pt-8 border-t border-gold/10 text-center text-white/60 font-montserrat text-sm">
          <p>© {new Date().getFullYear()} Estilo Infinity. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};