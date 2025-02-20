
import { MousePointer, Keyboard, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import "./Waves.css"
const HowItWorks = () => {
  return (
    <section className="bottom-wave mt-4 py-12 text-center  pb-28 ">
      <h2 className="text-4xl font-bold mb-12 text-black">
        That's how project works
      </h2>

      {/* Top Row */}
      <div className="flex justify-center items-center pt-6 gap-8 mb-16">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-[#ffbd59]/60 flex flex-col items-center justify-center gap-1 border-2 border-[#EEA21D] shadow-xl ">
              <MousePointer className="w-10 h-10 text-black " />
              <p className="font-bold text-[18px]">step1</p>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#EEA21D] flex items-center justify-center text-white font-bold">
              1
            </div>
          </div>
        </div>
        <ArrowRight className="w-8 h-8 text-black" />
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-[#ffbd59]/60 flex flex-col items-center justify-center border-2 border-[#EEA21D] shadow-xl">
              <Keyboard className="w-12 h-12 text-black" />
              <p className="font-bold text-[18px]">step2</p>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#EEA21D] flex items-center justify-center text-white font-bold">
              2
            </div>
          </div>
        </div>
        <ArrowRight className="w-8 h-8 text-black" />
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-[#ffbd59]/60 flex flex-col items-center justify-center  border-2 border-[#EEA21D] shadow-xl">
              <CheckCircle className="w-12 h-12 text-black" />
              <p className="font-bold text-[18px]">step3</p>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">
              3
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center items-center gap-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-[#ffbd59]/60 flex flex-col  items-center justify-center  border-2 border-[#EEA21D] shadow-xl">
              <MousePointer className="w-12 h-12 text-black" />
              <p className="font-bold text-[18px]">step6</p>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">
              6
            </div>
          </div>
        </div>
        <ArrowLeft className="w-8 h-8 text-black" />
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-[#ffbd59]/60 flex flex-col items-center justify-center  border-2 border-[#EEA21D] shadow-xl">
              <Keyboard className="w-12 h-12 text-black" />
              <p className="font-bold text-[18px]">step5</p>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">
              5
            </div>
          </div>
        </div>
        <ArrowLeft className="w-8 h-8 text-black" />
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-[#ffbd59]/60 flex flex-col items-center justify-center  border-2 border-[#EEA21D] shadow-xl">
              <CheckCircle className="w-12 h-12 text-black" />
              <p className="font-bold text-[18px]">step4</p>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#FFA726] flex items-center justify-center text-white font-bold">
              4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
