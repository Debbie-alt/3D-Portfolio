import React from "react";
import { useState, useEffect } from "react";
import Typed from 'typed.js';
import { motion, AnimatePresence } from "framer-motion";
import plop from '../assets/ploptrimmed.mp3'
import ContactForm from "../Components/ContactForm";




const Homepage = ({ mode }) => {
  const [textColor, setTextColor] = useState("white");
  const elx = React.useRef(null);

  useEffect(() => {
    if (mode == "dark") {
      setTextColor("white");
    }
  }, []);

  const playplopSound = () => {
    const audio = new Audio(plop); 
    audio.play();
  }

  useEffect(() => {
    playplopSound(); 
  }, []); 
  
  React.useEffect(() => {
    if (elx.current) {
      const typed = new Typed(elx.current, {
        strings: ['<span class="text animate-pulse tracking-tightest mx-32 text-[2.8em] md:text-[3.2em]" style:"whiteSpace: nowrap,wordBreak: keep-all">CONTACT ME</span>'
      ],
        typeSpeed: 90,
        contentType: 'html', 
        showCursor:false,
        preStringTyped: () => {
          elx.current.style.whiteSpace = 'nowrap';
        },
        onStringTyped: () => {
          elx.current.style.whiteSpace = 'nowrap';
        },
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  
  return (
        <motion.div
          className=""
          initial={{ width: 0 }}
          animate={{ width: "80vw" }}
          // animate={{width:window.innerWidth, opacity:1}}
         
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
           
          }}
          exit={{x: window.innerWidth, opacity:0}}>
        
        
        <div className="wall"></div>
        <div className="flex flex-col space-y-4  -mt-20 md:-mt-28 mx-24">
          
            <ContactForm/>
        </div>
        <div className="floor"></div>
      
        
        <motion.div>
          <p className="" ref={elx}></p>
        </motion.div>
        
       
      </motion.div>

  );
};

export default Homepage;
