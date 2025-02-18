
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const ControlButtons = () => {
  return (
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
  );
};

export default ControlButtons;
