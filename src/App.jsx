import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import { TestimonialSection, ProductSections } from "./components/Grids";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <TestimonialSection />
        <ProductSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
