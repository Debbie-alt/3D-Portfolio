import React, { forwardRef, useEffect } from "react";
import whatsapp from '../assets/socialicons/whatsapp.png'
import linktree from '../assets/socialicons/linkitree.png'
import linkedin from '../assets/socialicons/foliolinkedin.png'
import discord from '../assets/socialicons/discordp.png'
import instagram from '../assets/socialicons/insta3d.png'
import twitter from '../assets/socialicons/3dtweet.png'
import { RiTwitterXLine } from "react-icons/ri";
import {Link}  from "react-router-dom"


const MySocials = React.forwardRef((props, ref) => { 
  const remMenu = () => {
    socials.classList.remove("prod");
  };
  useEffect(() => {
  },[]);

  return (
    <>
      <section
          // ref={ref}
        className=" Aboutme rounded-xl shadow-pink-300 left-[13.5%] h-[40%] lg:h-[50vh]   relative shadow-xl lg:top-10 
          w-full md:w-[43vw]  hidden  flex-col "
        id="socials">
          
          <section>

           {/* <div className=" flex flex-col   w-full text-center  p-5 font-[300] "> */}
              <h1  className="font-serif italic  text-center text-xl mt-5  ">My Social Media </h1>
          
              <div className="rounded-full mx-5 s-icon-cont  mt-10   w-[85%] flex  items-center ">
              <a width='55' >
              <img src={twitter} alt="whaatsapp link icon"  width='60' className=" mx-auto -mt-5 animate-pulse hover:w-[80px] whatsapp"  />
              </a>
              <a width='55' >
              <img src={whatsapp} alt="whaatsapp link icon"  width='70' className="mx-auto -mt-5 animate-bo iconone animate-bounce hover:w-[90px] " />
              </a>
              <a width='55' >
              <img src={linktree} alt="linktree link icon"  width='60' className="mx-auto mt-3 animate-bounce hover:w-[40px]"  />
              </a>
              <a width='55' >
              <img src={linkedin} alt="linkedin link icon"  width='100' className=" hover:w-[120px] mx-auto animate-pulse"  />
              </a>

              <a width='55' >
               <img src={discord} alt="discord link icon"  width='55' className="mx-auto  animate-bounce hover:animate-none hover:w-[80px] discord "  />
              </a>
              <a width='55' >
              <img src={instagram} alt="whaatsapp link icon"  width='75' className=" animate-pulse hover:w-[93px]  "  /> 
              </a>
              
              </div>    

               <h1  className="font-serif italic  text-center text-2xl mt-5 ">Accounts </h1>
          
          </section>
  
          <button
          className=" text-white absolute top-[0%] left-[95%] bg-[#eb6389] opacity-100 p-1 h-6 text-xs rounded-sm cursor-pointer"
          onClick={remMenu}>esc</button>
        <div className="w-full h-full p-5 text-sm font-serif tracking-wide font-extralight italic">
        </div>
      </section>
    </>
  );
});

export default MySocials;
