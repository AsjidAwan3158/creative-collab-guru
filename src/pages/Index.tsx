import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, ArrowRight, ArrowLeft, Lightbulb, Keyboard, CheckCircle, MousePointer } from "lucide-react";

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
      <section className="container mx-auto px-4 py-16 relative">
        {/* Decorative Yellow Circles */}
        <div className="absolute top-0 right-4 w-24 h-24 rounded-full bg-[#FFA726]/40"></div>
        <div className="absolute top-12 right-32 w-16 h-16 rounded-full bg-[#FFA726]/40"></div>
        <div className="absolute top-0 right-64 w-12 h-12 rounded-full bg-[#FFA726]/40"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text Content */}
          <div className="flex-1">
            <h1 className="text-8xl font-black mb-6 text-black">HEADINGS</h1>
            <div className="text-3xl font-bold text-center md:text-left">
              THE SIMPLEST <span className="text-white">(& CHEAPEST)</span><br />
              WAY TO TRACK
            </div>
          </div>

          {/* Right side - Image Circles with Numbers */}
          <div className="relative flex-1 h-[400px]">
            <div className="absolute right-0 top-0 w-80 h-80 rounded-full overflow-hidden border-4 border-white/20">
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold z-10">3</div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Person working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-32 top-32 w-80 h-80 rounded-full overflow-hidden border-4 border-white/20">
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold z-10">3</div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Productivity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Control Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
          <h3 className="text-white mb-4 font-semibold">BUTTONS TO CONTROL</h3>
          <div className="space-y-4">
            <Button variant="outline" className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <ArrowRight className="h-4 w-4" />
              Moving From
            </Button>
            <Button variant="outline" className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <ArrowRight className="h-4 w-4" />
              Moving To
            </Button>
            <Button variant="outline" className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <Clock className="h-4 w-4" />
              DD/MM/YYYY
            </Button>
            <Button variant="outline" className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <Clock className="h-4 w-4" />
              Desired Time
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center gap-4 mb-4">
            <Button variant="secondary" className="bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Start Video
            </Button>
            <Button variant="secondary" className="bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Start Tracking
            </Button>
          </div>
          <div className="aspect-video bg-[#FEF7CD]/20 rounded-lg"></div>
        </div>

        <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
          <h3 className="text-white mb-4 font-semibold">MEASUREMENTS</h3>
          <div className="space-y-4">
            <Button variant="outline" className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <span>78m | Object</span>
              <span>9:27AM</span>
            </Button>
            <Button variant="outline" className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <span>78m | Object</span>
              <span>9:27AM</span>
            </Button>
            <Button variant="outline" className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <span>78m | Object</span>
              <span>9:27AM</span>
            </Button>
            <Button variant="outline" className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
              <span>78m | Object</span>
              <span>9:27AM</span>
            </Button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-12 text-black">That's how project works</h2>
        
        {/* Top Row */}
        <div className="flex justify-center items-center gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#FEF7CD]/60 flex items-center justify-center">
                <MousePointer className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">1</div>
            </div>
            <span className="mt-4 font-medium">Step 1</span>
          </div>
          <ArrowRight className="w-8 h-8 text-black" />
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#FEF7CD]/60 flex items-center justify-center">
                <Keyboard className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">2</div>
            </div>
            <span className="mt-4 font-medium">Step 2</span>
          </div>
          <ArrowRight className="w-8 h-8 text-black" />
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#FEF7CD]/60 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">3</div>
            </div>
            <span className="mt-4 font-medium">Step 3</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#FEF7CD]/60 flex items-center justify-center">
                <MousePointer className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">6</div>
            </div>
            <span className="mt-4 font-medium">Step 6</span>
          </div>
          <ArrowLeft className="w-8 h-8 text-black" />
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#FEF7CD]/60 flex items-center justify-center">
                <Keyboard className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">5</div>
            </div>
            <span className="mt-4 font-medium">Step 5</span>
          </div>
          <ArrowLeft className="w-8 h-8 text-black" />
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#FEF7CD]/60 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">4</div>
            </div>
            <span className="mt-4 font-medium">Step 4</span>
          </div>
        </div>
      </div>

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
