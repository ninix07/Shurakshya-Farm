import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CropLifecycle from "@/components/CropLifecycle";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Stats />
      <CropLifecycle />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
