import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // Reemplazar con envío a API
  };

  return (
    <section id="contacto" className="py-20 bg-black-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair text-gold text-center mb-12">Contacto</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <input
              {...register("name", { required: "Nombre es requerido" })}
              placeholder="Nombre"
              className="w-full bg-black border-b border-gold/50 py-3 px-4 text-white focus:border-gold focus:outline-none"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-6">
            <input
              {...register("email", { 
                required: "Email es requerido",
                pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
              })}
              placeholder="Email"
              className="w-full bg-black border-b border-gold/50 py-3 px-4 text-white focus:border-gold focus:outline-none"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-8">
            <textarea
              {...register("message", { required: "Mensaje es requerido" })}
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
      </div>
    </section>
  );
};