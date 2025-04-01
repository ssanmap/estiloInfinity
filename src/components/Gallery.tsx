import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  { id: 1, src: '/gallery/1.jpg', alt: 'Corte de cabello' },
  { id: 2, src: '/gallery/2.jpg', alt: 'Afeitado clásico' },
  { id: 3, src: '/gallery/3.jpg', alt: 'Estilo de barba' },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-black-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair text-gold text-center mb-12">Galería</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};