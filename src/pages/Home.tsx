import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { VideoReel } from '../components/VideoReel';

export const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />   
      <Services /> 
      <Testimonials />
      <ContactForm /> 
      <VideoReel />
    </>
  );
};