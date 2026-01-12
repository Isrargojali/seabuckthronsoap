import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Benefits from "@/components/Benefits";
import Collection from "@/components/Collection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Benefits />
      <Collection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
