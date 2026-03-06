import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Barbers from '@/components/Barbers';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Barbers />
        <Gallery />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
