// components/WhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
  const phoneNumber = "56984669764"; // Reemplaza con tu número completo (sin +)
  const message = "Hola, quisiera reservar una cita en Estilo Infinity"; // Mensaje predeterminado

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 sm:bottom-6 sm:right-6"
      aria-label="Contactar por WhatsApp"
    >
      <div className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group">
        <FaWhatsapp className="text-2xl" />
        {/* Burbuja de texto (opcional) */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-gold px-3 py-1 rounded-md text-sm font-montserrat opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¡Reserva aquí!
        </span>
      </div>
    </a>
  );
};