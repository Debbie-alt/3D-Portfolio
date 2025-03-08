import React, { forwardRef, useEffect } from "react";
import whatsapp from '../assets/socialicons/whatsapp.png'
import linktree from '../assets/socialicons/linkitree.png'
import linkedin from '../assets/socialicons/foliolinkedin.png'
import discord from '../assets/socialicons/discordp.png'
import instagram from '../assets/socialicons/insta3d.png'
import twitter from '../assets/socialicons/3dtweet.png'
import { RiTwitterXLine } from "react-icons/ri";
import {Link}  from "react-router-dom"
import { MdOutlineCancel } from "react-icons/md";



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
        className=" glass-box rounded-xl shadow-pink-300 left-[-10%] md:left-[13.5%] py-0 md:py-2.5   relative shadow-xl top-[10%] lg:top-10 
           w-[85vw] md:w-[550px]  hidden  flex-col px- "
        id="socials">
          
          <section>

           {/* <div className=" flex flex-col   w-full text-center  p-5 font-[300] "> */}
              <h1  className="font-serif italic  text-center text-xl mt-5  ">My Social Media </h1>
          
              <div className=" mx-5 s-icon-cont  mt-10 space-x-7 md:space-x-0 justify-center  w-[90%] flex flex-wrap  items-center ">
              <a width='55' href="https://x.com/Funmi565" >
              <img src={twitter} alt="twitter link icon"  className=" w-[60px] mx-auto -mt-5 animate-pulse  hover:w-[80px] whatsapp"  />
              </a>
              <a width='55' href="">
              <img src={whatsapp} alt="whatsapp link icon"  className=" w-[100px] md:w-[70px] mx-auto -mt-5 animate-bo iconone animate-bounce hover:w-[90px] " />
              </a>
              <a width='55' href="https://linktr.ee/fayemi.funmilayo55"  >
              <img src={linktree} alt="linktree link icon"  className=" w-[60px] md:w-[50px] mx-auto mt-3 animate-bounce hover:w-[70px]"  />
              </a>
              <a  href="https://www.linkedin.com/in/funmilayo-fayemi-7112ab272/" >
              <img src={linkedin} alt="linkedin link icon"   className=" w-[95px] hover:w-[120px] mx-auto animate-pulse"  />
              </a>

              <a width='55' href="" target="_blank" >
               <img src={discord} alt="discord link icon"   className=" w-[70px] md:w-[55px] mx-auto  animate-bounce hover:animate-none hover:w-[80px] discord "  />
              </a>
              <a href="" className=" p-0">
              <img src={instagram} alt="whaatsapp link icon"  className="w-[120px] md:w-[80px] animate-pulse hover:w-[95px]  "  /> 
              </a>
              
              </div>    

               <h1  className=" hidden sm:block font-serif italic  text-center text-2xl mt-5 ">Accounts </h1>
          
          </section>
  
          <button
          className=" text-white absolute top-[0%] text-base right-[5%] bg-[#eb6389] opacity-100 p-1 h-6 rounded-sm cursor-pointer"
          onClick={remMenu}><MdOutlineCancel/></button>
        <div className="w-full h-full p-5 text-sm font-serif tracking-wide font-extralight italic">
        </div>
      </section>
    </>
  );
});

export default MySocials;
