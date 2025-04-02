// pages/Services.tsx
// En tu archivo Services.tsx
const services = [
  {
    icon: "✂️",
    title: "Corte Clásico",
    description: "Técnicas tradicionales con acabado perfecto",
    price: "$25.000"
  },
  {
    icon: "🪒",
    title: "Afeitado Tradicional",
    description: "Navaja caliente + toalla caliente",
    price: "$20.000"
  },
  {
    icon: "🧴",
    title: "Botox Capilar",
    description: "Reconstrucción intensiva para cabello",
    price: "$60.000"
  },
  {
    icon: "🌈",
    title: "Balayage",
    description: "Mechas naturales con degradado",
    price: "$90.000"
  },
  {
    icon: "💇",
    title: "Peinado Novia",
    description: "Recogidos elegantes para ocasiones",
    price: "$70.000"
  },
  {
    icon: "💅",
    title: "Manicure Spa",
    description: "Incluye masaje y cuidado profesional",
    price: "$20.000"
  }
  // Agrega más servicios según necesites
];


export const Services = () => {
  return (
    <section className="py-20 bg-black-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair text-gold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-black border border-gold/20 p-6 rounded-lg hover:shadow-gold/10 transition">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-2xl font-playfair text-gold mt-4">{service.title}</h3>
              <p className="text-white mt-2">{service.description}</p>
              <p className="text-gold font-bold mt-4">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};