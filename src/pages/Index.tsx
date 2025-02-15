
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, ArrowLeft, Lightbulb, Keyboard, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFA726] to-[#FF8F00] text-black">
      {/* Navigation */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
        <ul className="flex justify-center gap-8">
          <li>
            <a href="#" className="hover:text-white transition-colors duration-300 font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors duration-300 font-medium">
              Start Project
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors duration-300 font-medium">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors duration-300 font-medium">
              Project Timeline
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">HEADINGS</h1>
          <h2 className="text-2xl font-medium">
            THE SIMPLEST <span className="text-white font-bold">(& CHEAPEST)</span><br />
            WAY TO TRACK
          </h2>
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
            <h3 className="text-white mb-4 font-semibold">BUTTONS TO CONTROL</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                Moving From
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                Moving To
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                DD/MM/YYYY
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                Selected Time
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center gap-4 mb-4">
              <Button variant="secondary" className="bg-white/80 hover:bg-white transition-colors">
                Start Video
              </Button>
              <Button variant="secondary" className="bg-white/80 hover:bg-white transition-colors">
                Start Tracking
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
            <h3 className="text-white mb-4 font-semibold">MEASUREMENTS</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                4.567ft
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                54.234 £
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                22.55/52
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-white/20 transition-colors">
                Cases
              </Button>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12 text-white drop-shadow-lg">That's how project works</h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-full p-4 mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <span className="font-medium">Step 1</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-full p-4 mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
              <span className="font-medium">Step 2</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-full p-4 mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <span className="font-medium">Step 3</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-full p-4 mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <span className="font-medium">Step 6</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-full p-4 mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
              <span className="font-medium">Step 5</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-full p-4 mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <span className="font-medium">Step 4</span>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">ABOUT US</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
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
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Contact</h2>
          <p className="text-lg">usman.ali555@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
