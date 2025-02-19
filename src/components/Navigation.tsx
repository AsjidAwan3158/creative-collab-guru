
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Info, Users, Clock, Home, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-6 backdrop-blur-sm bg-black/10 dark:bg-white/10 sticky top-0 z-50">
      <ul className="flex justify-center gap-8 items-center">
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="flex items-center gap-2 text-black dark:text-white hover:text-white transition-colors duration-300 font-medium">
            <Home className="w-4 h-4" />
            Home
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="link" 
            className="text-black dark:text-white hover:text-white transition-colors duration-300 font-medium p-0"
            onClick={() => document.getElementById('controls')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Clock className="w-4 h-4 mr-2" />
            Start Project
          </Button>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="link" 
            className="text-black dark:text-white hover:text-white transition-colors duration-300 font-medium p-0"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Users className="w-4 h-4 mr-2" />
            About Us
          </Button>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="link" 
            className="text-black dark:text-white hover:text-white transition-colors duration-300 font-medium p-0"
            onClick={() => document.getElementById('more-info')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Info className="w-4 h-4 mr-2" />
            More Information
          </Button>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navigation;
