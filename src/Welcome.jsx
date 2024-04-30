import { useEffect, useState } from "react";
import darkstar from "/public/starry.jfif"; // Corrected import statement
import lightstar from "/public/whitestars.jfif";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  const [bg, setBg] = useState(darkstar); // State variable for the background

  const scrollHome = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${bg})`, // Fixed background image URL
    backgroundSize: "contain",
  };

  useEffect(() => {
    setTimeout(() => {
      const scrollIntoHome = () => {
        scrollHome("/home");
      };
      scrollIntoHome();
    }, 5000);
  });

  return (
 
      <AnimatePresence mpde="wait">
        <motion.div
          className="welcome-page w-screen h-screen relative"
          style={backgroundStyle}
          exit={{ opacity: 0, transition: { duration: 1 } }} // Define exit animation
        >
          <motion.h1
            className="h-first absolute"
           
          >
            Welcome
          </motion.h1>
          <motion.h1
            className="text-center to-text absolute"
            
          >
            To
          </motion.h1>
          <motion.h1
            className="mt-16 text-center bottom-40 absolute name"
           
          >
            Funmi's
          </motion.h1>
          <motion.h1
            className="mt-16 text-center bottom-14 absolute right-10 folio"
           
          >
            Portfolio
          </motion.h1>
  
          <button
            className="cursor-pointer"
            onClick={() => {
              setBg(bg === darkstar ? lightstar : darkstar);
            }}
          >
            Change color
          </button>
        </motion.div>
      </AnimatePresence>
    
  );
};

export default Welcome;
