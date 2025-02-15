
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, ArrowLeft, Lightbulb, Keyboard, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFA726] text-black">
      {/* Navigation */}
      <nav className="p-6">
        <ul className="flex justify-center gap-8">
          <li><a href="#" className="hover:opacity-80 transition-opacity">Home</a></li>
          <li><a href="#" className="hover:opacity-80 transition-opacity">Start Project</a></li>
          <li><a href="#" className="hover:opacity-80 transition-opacity">About Us</a></li>
          <li><a href="#" className="hover:opacity-80 transition-opacity">Project Timeline</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">HEADINGS</h1>
          <h2 className="text-2xl">
            THE SIMPLEST <span className="text-white">(& CHEAPEST)</span><br />
            WAY TO TRACK
          </h2>
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#FFB74D] p-6 rounded-lg shadow-lg">
            <h3 className="text-white mb-4">BUTTONS TO CONTROL</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Moving From
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Moving To
              </Button>
              <Button variant="outline" className="w-full justify-start">
                DD/MM/YYYY
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Selected Time
              </Button>
            </div>
          </div>

          <div className="bg-[#FFB74D] p-6 rounded-lg shadow-lg">
            <div className="flex justify-center gap-4 mb-4">
              <Button variant="secondary">Start Video</Button>
              <Button variant="secondary">Start Tracking</Button>
            </div>
          </div>

          <div className="bg-[#FFB74D] p-6 rounded-lg shadow-lg">
            <h3 className="text-white mb-4">MEASUREMENTS</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                4.567ft
              </Button>
              <Button variant="outline" className="w-full justify-start">
                54.234 £
              </Button>
              <Button variant="outline" className="w-full justify-start">
                22.55/52
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Cases
              </Button>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">That's how project works</h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#FFB74D] rounded-full p-4 mb-2">
                <Lightbulb className="w-8 h-8" />
              </div>
              <span>Step 1</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FFB74D] rounded-full p-4 mb-2">
                <Keyboard className="w-8 h-8" />
              </div>
              <span>Step 2</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FFB74D] rounded-full p-4 mb-2">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span>Step 3</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#FFB74D] rounded-full p-4 mb-2">
                <Lightbulb className="w-8 h-8" />
              </div>
              <span>Step 6</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FFB74D] rounded-full p-4 mb-2">
                <Keyboard className="w-8 h-8" />
              </div>
              <span>Step 5</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FFB74D] rounded-full p-4 mb-2">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span>Step 4</span>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
              <p className="mb-4">
                Lorem ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/lovable-uploads/2c2c8199-1cf4-4921-a37d-f8bbd281a182.png"
                alt="About Us"
                className="rounded-full w-64 h-64 object-cover mx-auto"
              />
            </div>
          </div>
        </div>

        {/* More Information Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">MORE INFORMATION ABOUT US</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>usman.ali555@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
