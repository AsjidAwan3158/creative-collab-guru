 import  "./Waves.css";

const HeroSection = () => {
  return (
    <section className="bottom-wave  container mx-auto px-4 py-10 relative ">
      {/* Decorative Yellow Circles */}
      <div className=" absolute top-3 w-[50%] right-5 z-1">
        <div className="absolute top-2 right-20 w-16 h-16 rounded-full bg-[#EEA21D]/90"></div>
        {/* <div className="absolute top-12 right-32 w-16 h-16 rounded-full bg-black/40"></div> */}
        <div className="absolute top-14 left-36 w-16 h-16 rounded-full bg-[#EEA21D]/90"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10  min-h-[500px]">
        {/* Left side - Text Content */}
        <div className="relative flex-1  pb-20 ">
          <h1 className="text-8xl font-black mb-14 ml-6 text-black ">
            HEADINGS
          </h1>
          <div className="text-4xl font-bold items-left  md:text-left">
            <p className="relative w-fit text-center">
              THE SIMPLEST <span className="text-white">(& CHEAPEST)</span>
              <br />
              WAY TO TRACK
            </p>
          </div>
        </div>

        {/* Right side - Image Circles with Numbers */}
        <div className="relative flex-1 h-[400px] ">
          <div className="md:absolute right-20">
            <div className="absolute right-0">
              <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-[#ffa318] flex items-center justify-center text-white font-bold z-10">
                3
              </div>
              <div className="relative right-0 top-0 w-60 h-60  rounded-full overflow-hidden border-4 border-white/20 ">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Person working"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            <div className="absolute  right-44  top-10 rounded-full ">
              <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-[#ffa318] flex items-center justify-center text-white font-bold z-10">
                3
              </div>
              <div className=" w-60 h-60 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Productivity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
