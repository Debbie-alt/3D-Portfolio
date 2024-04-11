import React, { forwardRef, useEffect } from "react";
import SocialContent from "./SocialContent";

const MySocials = React.forwardRef((props, ref) => { 
  const remMenu = () => {
    socials.classList.remove("prod");
  };
  useEffect(() => {
  },[]);

  return (
    <>
      <section
          ref={ref}
        className=" Aboutme  border-2 left-[13.5%] h-[40%] lg:h-[70vh]  relative shadow-xl lg:top-10 
          w-full md:w-[50%] rounded-sm  hidden"
        id="socials">
          
          <section className="w-full flex">
          <figure className="bg-gradient-to-b from-[#eb6389] to-slate-300 h-full w-1/4 backdrop-blur-lg mx-1">
          </figure>

            <div className=" flex flex-col w-screen text-center p-5 font-[300] ">
              <h1 >My Social Media Accounts</h1>
              <SocialContent/>
             </div>
           </section>

        <button
          className=" text-white absolute top-[0%] left-[95.5%] bg-[#eb6389] opacity-100 p-1 h-6 text-xs rounded-sm cursor-pointer"
          onClick={remMenu}>esc</button>
        <div className="w-full h-full p-5 text-sm font-serif tracking-wide font-extralight italic">
        </div>
      </section>
    </>
  );
});

export default MySocials;
