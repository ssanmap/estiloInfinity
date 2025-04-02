// components/VideoReel.tsx
import { FaPlay, FaInstagram, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const instagramReels = [
  {
    id: 1,
    title: "Tendencias 2024",
    thumbnail: "/videos/trends-thumb.jpg",
    reelUrl: "https://www.instagram.com/p/CzX2Z5YjK1P" // Usa URL de publicación
  }
];

export const VideoReel = () => {
  const [selectedReel, setSelectedReel] = useState<string | null>(null);

  return (
    <section className="py-20 bg-black">
      {/* ... (mismo encabezado) ... */}

      {/* Grid de Reels */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instagramReels.map((reel) => (
          <div key={reel.id} className="relative aspect-[9/16] group">
            <img 
              src={reel.thumbnail} 
              alt={reel.title}
              className="w-full h-full object-cover rounded-lg border border-gold/20"
            />
            <button 
              onClick={() => window.open(reel.reelUrl, '_blank')}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50"
            >
              <div className="bg-gold text-black p-4 rounded-full">
                <FaPlay className="text-xl" />
              </div>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-gold font-playfair text-xl">{reel.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje instructivo */}
      <div className="text-center mt-8 text-gold/80">
        <p>Los Reels se abrirán en Instagram para mejor experiencia</p>
        <a 
          href="https://instagram.com/estilo_infinity" 
          target="_blank"
          className="inline-flex items-center gap-2 mt-2 text-gold hover:text-white"
        >
          <FaInstagram /> @estilo_infinity
        </a>
      </div>
    </section>
  );
};