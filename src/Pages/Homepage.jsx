import React from "react";
import Resume from "../Components/Icons/Resume";
import Myself from "../AboutMe/Myself";
import Mail from "../Components/Icons/Mail";
import Linktree from "../AboutMe/Linktree";
import AboutMe from "../AboutMe/AboutMe";
import Social from "../AboutMe/Social";
import { useState, useEffect } from "react";
import Github from "../Components/Icons/Github";
import MySocials from "../AboutMe/MySocials";
import DigitalResume from "../AboutMe/DigitalResume";
import Scroll from "../Components/ScrollDown";
import Typed from 'typed.js';
import { motion, AnimatePresence } from "framer-motion";
import plop from '../assets/plopsound.mp3'





const Homepage = ({ mode }) => {
  const [textColor, setTextColor] = useState("white");
  const elx = React.useRef(null);

  useEffect(() => {
    if (mode == "dark") {
      setTextColor("white");
    }
  }, []);

  const playplopSound = () => {
    console.log("Attempting to play plop sound...");
    const audio = new Audio(plop); 
    audio.play();
  }

  useEffect(() => {
    playplopSound(); 
  }, []); 
  
  React.useEffect(() => {
    if (elx.current) {
      const typed = new Typed(elx.current, {
        strings: ['<span class="text animate-pulse tracking-tightest text-[2.2em] md:text-[3.7em]" style:"whiteSpace: nowrap,wordBreak: keep-all">FUNMIS PORTFOLIO</span>'
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
    <>
     
        <motion.div className=""
        initial={{width: 0}}
        animate={{width: "80vw"}}
        exit={{x:window.innerWidth}} >
        
        <div className="wall"></div>
        <div className="flex flex-col space-y-6  -mt-48  mx-5">
          <section className=" flex  space-x-12 ">

            <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            
            >
             <Resume />
            </motion.div>

          
            <DigitalResume/>
         
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                 delay: 1 ,
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            >
            <Myself />
            </motion.div>

               <AboutMe />

            <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{delay:0.7,
              duration: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001}
            }}>
              <Social />
            </motion.div>

              <MySocials/>
          </section>

          <section className=" flex space-x-12">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001}}}
            >
             <Mail />
             
            </motion.div>

            <motion.div className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay:0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001}}}>
              <Linktree />
            </motion.div>

            <motion.div className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay:0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001}}}>
             <Github />
            </motion.div>

          </section>
          <section className=" flex space-x-8"></section>
        </div>
        <div className="floor"></div>
        {/* <p className="text tracking-tightest text-[2.2em] md:text-[3.7em]">
          FUNMI'sPORTFOLIO
        </p> */}
        
        <motion.div
        >
          <p className="" ref={elx}></p>
        </motion.div>
        
        <figure
          className={`bg-[#ffffff1a] font-serif opacity-200 ${textColor} backdrop:blur-lg animate-pulse rounded-xl text-center p-2 mr-10 top-[78%] fixed left-[86vw] text-[10px] `}
        >
          {" "}
          Don't like {mode} mode? Click on <br /> the icon!
        </figure>
        <Scroll />
      </motion.div>
      
    </>

  );
};

export default Homepage;
