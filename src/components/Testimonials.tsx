const testimonials = [
    {
      id: 1,
      name: "Carlos Méndez",
      text: "La mejor experiencia de barbería que he tenido. ¡El detalle en el acabado es increíble!",
      avatar: "/avatars/1.jpg"
    },
    // ...más testimonios
  ];
  
  export const Testimonials = () => {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair text-gold text-center mb-12">Clientes Satisfechos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-black-light p-6 rounded-lg border border-gold/20">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <h3 className="text-xl font-playfair text-gold">{testimonial.name}</h3>
                </div>
                <p className="text-white font-montserrat italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };