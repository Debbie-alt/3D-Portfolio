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
        className=" Aboutme rounded-xl shadow-pink-300 left-[-10%] md:left-[13.5%] py-0 md:py-2.5   relative shadow-xl top-[10%] lg:top-10 
           w-[90vw] md:w-[500px]  hidden  flex-col "
        id="socials">
          
          <section>

           {/* <div className=" flex flex-col   w-full text-center  p-5 font-[300] "> */}
              <h1  className="font-serif italic  text-center text-xl mt-5  ">My Social Media </h1>
          
              <div className="rounded-full mx-5 s-icon-cont  mt-10   w-[85%] flex flex-wrap  items-center ">
              <a width='55' href="https://x.com/Funmi565" >
              <img src={twitter} alt="twitter link icon"  width='60' className=" mx-auto -mt-5 animate-pulse  hover:w-[80px] whatsapp"  />
              </a>
              <a width='55' href="">
              <img src={whatsapp} alt="whatsapp link icon"  width='70' className="mx-auto -mt-5 animate-bo iconone animate-bounce hover:w-[90px] " />
              </a>
              <a width='55' href="https://linktr.ee/fayemi.funmilayo55"  >
              <img src={linktree} alt="linktree link icon"  width='50' className="mx-auto mt-3 animate-bounce hover:w-[80px]"  />
              </a>
              <a width='55' href="https://" >
              <img src={linkedin} alt="linkedin link icon"  width='100' className=" hover:w-[140px] mx-auto animate-pulse"  />
              </a>

              <a width='55' href="" target="_blank" >
               <img src={discord} alt="discord link icon"  width='55' className="mx-auto  animate-bounce hover:animate-none hover:w-[80px] discord "  />
              </a>
              <a width='55' >
              <img src={instagram} alt="whaatsapp link icon"  width='75' className=" animate-pulse hover:w-[93px]  "  /> 
              </a>
              
              </div>    

               <h1  className="font-serif italic  text-center text-2xl mt-5 ">Accounts </h1>
          
          </section>
  
          <button
          className=" text-white absolute top-[0%] right-[5%] bg-[#eb6389] opacity-100 p-1 h-6 text-xs rounded-sm cursor-pointer"
          onClick={remMenu}>&times;</button>
        <div className="w-full h-full p-5 text-sm font-serif tracking-wide font-extralight italic">
        </div>
      </section>
    </>
  );
});

export default MySocials;
