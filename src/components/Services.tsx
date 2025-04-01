const services = [
    {
      title: "Corte Clásico",
      price: "$45.000",
      icon: "✂️",
      description: "Corte de pelo con técnicas tradicionales y acabado perfecto.",
    },
    // ...otros servicios
  ];
  
  export const Services = () => {
    return (
      <section id="servicios" className="py-20 bg-black-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair text-gold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-black border border-gold/20 p-6 rounded-lg hover:shadow-lg hover:shadow-gold/10 transition">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-2xl font-playfair text-gold mt-4">{service.title}</h3>
                <p className="text-white font-montserrat mt-2">{service.description}</p>
                <p className="text-gold font-bold mt-4">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };