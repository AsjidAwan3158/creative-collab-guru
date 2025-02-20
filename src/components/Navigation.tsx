
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Info, Users, Clock, Home } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="p-6 backdrop-blur-sm bg-white/10 sticky top-0 z-50">
      <ul className="flex justify-center gap-8">
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors duration-300 font-medium">
            <Home className="w-4 h-4" />
            Home
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="link" 
            className="text-black hover:text-white transition-colors duration-300 font-medium p-0"
            onClick={() => document.getElementById('controls')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Clock className="w-4 h-4 mr-2" />
            Start Project
          </Button>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="link" 
            className="text-black hover:text-white transition-colors duration-300 font-medium p-0"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Users className="w-4 h-4 mr-2" />
            About Us
          </Button>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="link" 
            className="text-black hover:text-white transition-colors duration-300 font-medium p-0"
            onClick={() => document.getElementById('more-info')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Info className="w-4 h-4 mr-2" />
            More Information
          </Button>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navigation;
