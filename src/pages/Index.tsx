import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <section className="container mx-auto px-4 py-16 relative">
        {/* Decorative Yellow Circles - Brightened */}
        <div className="absolute top-0 left-[10%] w-20 h-20 rounded-full bg-[#FEF7CD]/60"></div>
        <div className="absolute top-12 right-[35%] w-16 h-16 rounded-full bg-[#FEF7CD]/60"></div>
        <div className="absolute top-4 right-[20%] w-12 h-12 rounded-full bg-[#FEF7CD]/60"></div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Text Content */}
          <div className="flex-1 text-center">
            <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">HEADINGS</h1>
            <h2 className="text-2xl font-medium text-center">
              THE SIMPLEST <span className="text-white font-bold">(& CHEAPEST)</span><br />
              WAY TO TRACK
            </h2>
          </div>

          {/* Right side - Image Circles (30% smaller and centered) */}
          <div className="relative flex-1 h-[400px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-56 h-56 rounded-full overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Person working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20%] w-72 h-72 rounded-full overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Productivity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
            <h3 className="text-white mb-4 font-semibold">BUTTONS TO CONTROL</h3>
            <div className="space-y-4">
              {/* Moving From box with inputs */}
              <div className="bg-[#FEF7CD]/60 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Moving From</p>
                <div className="space-y-2">
                  <Input 
                    type="number" 
                    placeholder="Integer value"
                    className="bg-white/80"
                  />
                  <Input 
                    type="text" 
                    placeholder="String value"
                    className="bg-white/80"
                  />
                  <Input 
                    type="time" 
                    className="bg-white/80"
                  />
                </div>
              </div>
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
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Replace buttons with static boxes */}
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Left 1</div>
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Right 1</div>
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Left 2</div>
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Right 2</div>
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Left 3</div>
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Right 3</div>
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Left 4</div>
              <div className="bg-[#FEF7CD]/60 p-3 rounded-lg text-center">Right 4</div>
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
