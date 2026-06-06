import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import { Process, TechStack, Team, Testimonials } from "./components/Sections";
import Contact from "./components/Contact";
import { CtaBanner, Footer } from "./components/Footer";
import Maintaincebar from "./components/Utiliz";

export default function App() {
  
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <div className="fixed inset-0 animated-grid pointer-events-none z-0 opacity-40" />
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="relative z-10">
        
        <Navbar />

        <main>

          <Hero />
          <Maintaincebar />
          <Services />
          <WhyUs />
          <Portfolio />
          <Process />
          <TechStack />
          <Team />
          <Testimonials />
          <Contact />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </div>
  );
}
