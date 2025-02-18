
import { MousePointer, Keyboard, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const HowItWorks = () => {
  return (
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
  );
};

export default HowItWorks;
