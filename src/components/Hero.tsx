export const Hero = () => {
    return (
      <section className="relative h-screen flex items-center justify-center bg-black-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-playfair text-gold mb-4">
            Estilo Infinity
          </h1>
          <p className="text-xl md:text-2xl text-white font-montserrat mb-8">
            Precisión. Elegancia. Tradición.
          </p>
          <button className="bg-gold text-black px-8 py-3 rounded-md font-bold hover:bg-gold/80 transition text-lg">
            Reserva tu Cita
          </button>
        </div>
      </section>
    );
  };