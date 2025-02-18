
const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
