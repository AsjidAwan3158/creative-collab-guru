
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ControlButtons from "@/components/ControlButtons";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFA726] to-[#FF8F00] text-black">
      <Navigation />
      <HeroSection />
      <ControlButtons />
      <HowItWorks />

      {/* About Us Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-black drop-shadow-lg">ABOUT US</h2>
            <p className="mb-4 text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/lovable-uploads/2c2c8199-1cf4-4921-a37d-f8bbd281a182.png"
              alt="About Us"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* More Information Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-black drop-shadow-lg">
          MORE INFORMATION ABOUT US
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-lg bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
          </p>
          <p className="text-lg bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center pb-8">
        <h2 className="text-3xl font-bold mb-4 text-black drop-shadow-lg">Contact</h2>
        <p className="text-lg">usman.ali555@gmail.com</p>
      </div>
    </div>
  );
};

export default Index;
