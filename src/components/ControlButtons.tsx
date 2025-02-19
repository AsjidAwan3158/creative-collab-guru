
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

const ControlButtons = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("12:00");
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [videoOn, setVideoOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
    
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [videoStream]);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      setVideoOn(true);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopVideo = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
      setVideoOn(false);
      
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
        <h3 className="text-white mb-4 font-semibold">BUTTONS TO CONTROL</h3>
        <div className="space-y-4">
          <Select>
            <SelectTrigger className="w-full bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 border-none">
              <SelectValue placeholder="Moving From" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="london">London</SelectItem>
              <SelectItem value="haripur">Haripur</SelectItem>
              <SelectItem value="peshawar">Peshawar</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 border-none">
              <SelectValue placeholder="Moving To" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="islamabad">Islamabad</SelectItem>
              <SelectItem value="karachi">Karachi</SelectItem>
              <SelectItem value="newyork">New York</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
                <Clock className="h-4 w-4" />
                {date ? format(date, "PP") : "DD/MM/YYYY"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full text-left flex items-center gap-2 bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black border-none">
                <Clock className="h-4 w-4" />
                {time || "Select Time"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-4 bg-white" align="start">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border rounded p-2"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FFB74D] to-[#FFA726] p-6 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center gap-4 mb-4">
          <Button 
            variant="secondary" 
            className="bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black flex items-center gap-2"
            onClick={videoOn ? stopVideo : startVideo}
          >
            <ArrowRight className="h-4 w-4" />
            {videoOn ? "Stop Video" : "Start Video"}
          </Button>
          <Button 
            variant="secondary" 
            className="bg-[#FEF7CD]/60 hover:bg-[#FEF7CD]/80 text-black flex items-center gap-2"
          >
            <ArrowRight className="h-4 w-4" />
            Start Tracking
          </Button>
        </div>
        <div className="aspect-video bg-[#FEF7CD]/20 rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
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
