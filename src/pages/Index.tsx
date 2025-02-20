
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ControlButtons from "@/components/ControlButtons";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import  Footer  from "@/components/Footer";
 
const Index = () => {
  
  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#ffbd59] to-[#ffbd59] text-black   ">
      <Navigation />
   
        <HeroSection />
        <ControlButtons />
        <HowItWorks />
        <About />
        <Footer />
      </div>
   
  );
};

export default Index;
