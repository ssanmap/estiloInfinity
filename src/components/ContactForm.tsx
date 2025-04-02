// src/pages/Contact.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Validación con Zod
const schema = z.object({
  name: z.string().min(2, { message: "Nombre muy corto" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(9, { message: "Teléfono requerido" }),
  message: z.string().min(10, { message: "Mensaje muy breve" })
});

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data:any) => {
    console.log(data); // Reemplaza con tu API o servicio de email
    alert("¡Mensaje enviado con éxito! "+ data.name);
  };

  return (
    <section className="py-20 bg-black-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair text-gold text-center mb-12">Contacto</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register("name")}
                placeholder="Nombre"
                className="w-full bg-black border-b border-gold/50 py-3 px-4 text-white focus:border-gold focus:outline-none"
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full bg-black border-b border-gold/50 py-3 px-4 text-white focus:border-gold focus:outline-none"
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register("phone")}
                placeholder="Teléfono"
                className="w-full bg-black border-b border-gold/50 py-3 px-4 text-white focus:border-gold focus:outline-none"
              />
              {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Mensaje"
                rows={4}
                className="w-full bg-black border-b border-gold/50 py-3 px-4 text-white focus:border-gold focus:outline-none"
              ></textarea>
              {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-gold text-black px-8 py-3 rounded-md font-bold hover:bg-gold/80 transition w-full"
            >
              Enviar Mensaje
            </button>
          </form>

          {/* Mapa de Google */}
          <div className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.437750722783!2d-70.70086372462006!3d-33.56798177334317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dbe9487af0c3%3A0xf94649fc5adfa705!2sAv.%20Ochagavia%2001862%2C%208010000%20El%20Bosque%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1743553304370!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              className="min-h-[400px] border border-gold/20 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <p className="text-gold/80 text-sm mt-2">
            📍 Av. Ochagavía 01862, El Bosque
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};