
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import "./Waves.css"

const ControlButtons = () => {
  return (
    <section className="bottom-wave2 py-16 pb-28 flex flex-col md:flex-row  justify-center gap-4 mb-16 bg-[#fecd81]">
      <div className="bg-gradient-to-br mt-6 from-[#ffbd59] to-[#ffbd59] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
        <h3 className="text-white mb-4 font-semibold">BUTTONS TO CONTROL</h3>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <ArrowRight className="h-4 w-4" />
            Moving From
          </Button>
          <Button
            variant="outline"
            className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <ArrowRight className="h-4 w-4" />
            Moving To
          </Button>
          <Button
            variant="outline"
            className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <Clock className="h-4 w-4" />
            DD/MM/YYYY
          </Button>
          <Button
            variant="outline"
            className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <Clock className="h-4 w-4" />
            Desired Time
          </Button>
        </div>
      </div>

      <div className=" w-[60%] p-6 pb-2 rounded-lg   transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center gap-4 mb-4">
          <Button
            variant="secondary"
            className="bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black flex items-center gap-2"
          >
            <ArrowRight className="h-4 w-4" />
            Start Video
          </Button>
          <Button
            variant="secondary"
            className="bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black flex items-center gap-2"
          >
            <ArrowRight className="h-4 w-4" />
            Start Tracking
          </Button>
        </div>
        <div className="aspect-video bg-[#EEA21D]/40 rounded-lg"></div>
      </div>

      <div className="bg-gradient-to-br mt-6 from-[#ffbd59] to-[#ffbd59] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
        <h3 className="text-white mb-4 font-semibold">MEASUREMENTS</h3>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <span>78m | Object</span>
            <span>9:27AM</span>
          </Button>
          <Button
            variant="outline"
            className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <span>78m | Object</span>
            <span>9:27AM</span>
          </Button>
          <Button
            variant="outline"
            className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <span>78m | Object</span>
            <span>9:27AM</span>
          </Button>
          <Button
            variant="outline"
            className="w-full text-left flex items-center justify-between bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none"
          >
            <span>78m | Object</span>
            <span>9:27AM</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ControlButtons;
