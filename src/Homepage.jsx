import React from "react";
import Resume from "./Components/Icons/Resume";
import Myself from "./AboutMe/Myself";
import Mail from "./Components/Icons/Mail";
import Linktree from "./AboutMe/Linktree";
import AboutMe from "./AboutMe/AboutMe";
import Social from "./AboutMe/Social";
import { useState, useEffect } from "react";
import Github from "./Components/Icons/Github";
import MySocials from "./AboutMe/MySocials";
import DigitalResume from "./AboutMe/DigitalResume";
import Scroll from "./Components/ScrollDown";
import Typed from 'typed.js';



const Homepage = ({ mode }) => {
  const [textColor, setTextColor] = useState("white");
  const elx = React.useRef(null);

  useEffect(() => {
    if (mode == "dark") {
      setTextColor("white");
    }
  }, []);
  
  React.useEffect(() => {
    // Check if el.current is not null before initializing Typed
    if (elx.current) {
      const typed = new Typed(elx.current, {
        strings: ['<span class="text animate-pulse tracking-tightest text-[2.2em] md:text-[3.7em]" style:"whiteSpace: nowrap,wordBreak: keep-all">FUNMIS PORTFOLIO</span>'],
        typeSpeed: 100,
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
      <main className="" >
        
        <div className="wall"></div>
        <div className="flex flex-col space-y-6  -mt-48  mx-5">
          <section className=" flex  space-x-12">
            <Resume />
          
            <DigitalResume/>
         
            
            <Myself />
            <AboutMe />
            <Social />
            <MySocials/>
          </section>
          <section className=" flex space-x-12">
            <Mail />
            <Linktree />
            <Github />
          </section>
          <section className=" flex space-x-8"></section>
        </div>
        <div className="floor"></div>
        {/* <p className="text tracking-tightest text-[2.2em] md:text-[3.7em]">
          FUNMI'sPORTFOLIO
        </p> */}
        <p className="" ref={elx}></p>
        <figure
          className={`bg-[#ffffff1a] font-serif opacity-200 ${textColor} backdrop:blur-lg animate-pulse rounded-xl text-center p-2 mr-10 top-[78%] fixed left-[86vw] text-[10px] `}
        >
          {" "}
          Don't like {mode} mode? Click on <br /> the icon!
        </figure>
        <Scroll />
      </main>
    </>
  );
};

export default Homepage;
