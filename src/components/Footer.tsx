export const Footer = () => {
    return (
      <footer className="bg-black py-12 border-t border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src="/assets/logo.svg" alt="Estilo Infinity" className="h-10" />
              <p className="text-gold/80 font-montserrat mt-2">Precisión. Estilo. Infinito.</p>
            </div>
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gold hover:text-white transition"
                  aria-label={social}
                >
                  {social === 'Facebook' && '📘'}
                  {social === 'Instagram' && '📸'}
                  {social === 'WhatsApp' && '💬'}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/10 text-center text-white/60 font-montserrat text-sm">
            <p>© {new Date().getFullYear()} Estilo Infinity. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };