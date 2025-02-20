import React from "react";

function About() {
  return (
    <>
      <section className="bottom-wave2 py-14  bg-[#fecd81]">
        {" "}
        {/* About Us Section */}
        <div className=" mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 px-28">
              <h2 className="text-4xl font-bold mb-4 text-black drop-shadow-lg">
                ABOUT US
              </h2>
              <p className=" mb-4 text-lg">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/lovable-uploads/2c2c8199-1cf4-4921-a37d-f8bbd281a182.png"
                alt="About Us"
                className="rounded-full w-80 h-80 object-cover mx-auto shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      {/* More Information Section */}
      <section className="bottom-wave px-12 mt-16 pt-14 pb-28">
        <h2 className="text-4xl font-bold mb-8 text-center text-black drop-shadow-lg">
          MORE INFORMATION ABOUT US
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-lg bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-lg bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
