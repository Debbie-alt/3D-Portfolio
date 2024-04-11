import React, { forwardRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const AboutMe = React.forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const [printing, setPrinting] = useState(false);


  const startPrinting = () => {
    if (!printing) {
      setPrinting(true);
    }  };
  
  const removeMenu = () => {
    makeorder.classList.remove("prod");
  };
  useEffect(() => {
    const content = '  Hi!, I am Fayemi Funmilayo, a Frontend web developer based in Lagos, Nigeria. '    
    if (printing) {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        setText((prevText) => prevText + content[currentIndex]);

        currentIndex += 1;

        if (currentIndex === content.length) {
          clearInterval(intervalId);
          setPrinting(false);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [printing]);


  return (
    <>
      <figure
          ref={ref}
        className=" Aboutme border-2 left-[13.5%] h-[40%] lg:h-[70vh]  relative shadow-xl lg:top-10 
          w-full md:w-[50%] rounded-sm  hidden   "
        id="makeorder"
      >
        <button
          className=" text-white absolute top-[0%] left-[94.5%] bg-pink-500 opacity-100 p-1 h-6 text-xs rounded-sm cursor-pointer"
          onClick={removeMenu}>
          esc
        </button>
        <div className="w-full h-full p-5 text-sm font-serif tracking-wide font-extralight italic">
         <p >{text}</p>
        </div>
       {startPrinting()}
      </figure>
    </>
  );
});

export default AboutMe;
