
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ControlButtons from "@/components/ControlButtons";
import HowItWorks from "@/components/HowItWorks";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFA726] to-[#FF8F00] dark:from-[#1A1F2C] dark:to-[#2C1810] text-black dark:text-white transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <div id="controls">
        <ControlButtons />
      </div>
      <HowItWorks />

      {/* About Us Section */}
      <motion.div 
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white drop-shadow-lg">ABOUT US</h2>
            <p className="mb-4 text-lg bg-white/10 dark:bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              Lorem ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took.
            </p>
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/20 dark:bg-black/20 px-4 py-2 rounded-lg hover:bg-white/30 dark:hover:bg-black/30 transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/lovable-uploads/2c2c8199-1cf4-4921-a37d-f8bbd281a182.png"
              alt="About Us"
              className="rounded-2xl w-64 h-64 object-cover mx-auto shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* More Information Section */}
      <motion.div 
        id="more-info"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white drop-shadow-lg">
          MORE INFORMATION ABOUT US
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-lg bg-white/10 dark:bg-black/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem ipsum has been the industry's standard dummy text 
              ever since the 1500s.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-lg bg-white/10 dark:bg-black/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem ipsum has been the industry's standard dummy text 
              ever since the 1500s.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center pb-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white drop-shadow-lg">Get in Touch</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/10 px-6 py-3 rounded-lg backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" />
            <span>usman.ali555@gmail.com</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/10 px-6 py-3 rounded-lg backdrop-blur-sm"
          >
            <Phone className="w-5 h-5" />
            <span>+1 234 567 890</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/10 px-6 py-3 rounded-lg backdrop-blur-sm"
          >
            <MapPin className="w-5 h-5" />
            <span>New York, USA</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
