import { useEffect, useState } from "react";
import darkstar from "/public/starry.jfif"; // Corrected import statement
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
    }, 6000);
  });
  
  return (
        <motion.div
          className="welcome-page w-screen h-screen relative box"
          style={backgroundStyle}
          initial={{ opacity:0, width:"100%" }}
          animate={{width:window.innerWidth, opacity:1}}
         
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
           
          }}
          exit={{x: window.innerWidth, opacity:0}}>
          <h1 className="h-first absolute " >
            Welcome
          </h1>
          <h1 className="text-center to-text absolute"> To </h1>
          <h1 className="mt-16 text-center bottom-40 absolute name">
            Funmi's
          </h1>
          <h1 className="mt-16 text-center bottom-14 absolute right-10 folio">
            Portfolio
          </h1>
{/*   
          <button
            className="cursor-pointer"
            onClick={() => {
              setBg(bg === darkstar ? lightstar : darkstar);
            }}>
           c
          </button> */}
        </motion.div>
       
    
  );
};

export default Welcome;
