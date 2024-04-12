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


const Homepage = ({ mode }) => {
  const [textColor, setTextColor] = useState("white");

  

  useEffect(() => {
    if (mode == "dark") {
      setTextColor("white");
    }
  }, []);

  return (
    <>
      <main className="">
        
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
        <p className="text tracking-tightest text-[2.2em] md:text-[3.7em]">
          FUNMI'sPORTFOLIO
        </p>
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
