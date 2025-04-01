import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};