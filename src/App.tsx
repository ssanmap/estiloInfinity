import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/experiencia" element={<Testimonials />} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};