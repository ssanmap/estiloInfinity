import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const images = [
  { id: 1, src: '/images/f1.jpg', alt: 'Corte de cabello profesional' },
  { id: 2, src: '/images/f2.jpg', alt: 'Afeitado clásico con navaja' },
  { id: 3, src: '/images/f3.jpg', alt: 'Arreglo de barba' },
  { id: 4, src: '/images/f4.jpg', alt: 'Tinte para cabello' },
  { id: 5, src: '/images/f5.jpg', alt: 'Peinado moderno' },
  { id: 6, src: '/images/f6.jpg', alt: 'Tratamiento capilar' },
  { id: 7, src: '/images/f7.jpg', alt: 'Servicio de barbería' },
];

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 bg-black-light relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair text-gold text-center mb-12">Galería</h2>
        
        {/* Carrusel principal */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="!pb-12"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div 
                className="relative group overflow-hidden rounded-lg cursor-zoom-in"
                onClick={() => setSelectedImg(img.id)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-montserrat translate-y-4 group-hover:translate-y-0 transition-transform">
                    {img.alt}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox (modal) */}
        {selectedImg !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh]">
              <img 
                src={images.find(img => img.id === selectedImg)?.src || ''} 
                alt={images.find(img => img.id === selectedImg)?.alt || ''}
                className="w-full h-full object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-gold hover:text-white text-4xl z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(null);
                }}
                aria-label="Cerrar"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};