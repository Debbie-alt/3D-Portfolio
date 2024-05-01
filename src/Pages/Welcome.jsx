import { useEffect, useState } from "react";
import darkstar from "/public/starry.jfif"; // Corrected import statement
import lightstar from "/public/whitestars.jfif";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import transition from "../Transition"

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
    }, 4000);
  });
  
  
  return (
 
        <motion.div
          className="welcome-page w-screen h-screen relative"
          style={backgroundStyle}
          initial={{width: 0}}
          animate={{width:window.innerWidth}}
          exit={{x: window.innerWidth}}
        >
          <h1 className="h-first absolute" >
            Welcome
          </h1>

          <h1
            className="text-center to-text absolute">
            To
          </h1>
          <h1 className="mt-16 text-center bottom-40 absolute name">
            Funmi's
          </h1>
          <h1 className="mt-16 text-center bottom-14 absolute right-10 folio">
            Portfolio
          </h1>
  
          <button
            className="cursor-pointer"
            onClick={() => {
              setBg(bg === darkstar ? lightstar : darkstar);
            }}
          >
            Change color
          </button>
        </motion.div>
       
    
  );
};

export default transition(Welcome);
