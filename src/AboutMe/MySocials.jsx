import React, { forwardRef, useEffect } from "react";
import whatsapp from '../assets/socialicons/wassap.png'
import linktree from '../assets/linktree.svg'
import linkedin from '../assets/linkedin3.png'

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
          w-full md:w-[50vw] rounded-sm  hidden  flex-col "
        id="socials">
          
          <section>

          <div className=" flex flex-col   w-full text-center  p-5 font-[300] ">
              <h1  className="font-serif italic">My Social Media Accounts</h1>
            </div>

              <div className="rounded-full  mx-auto h-[250px] w-[250px] flex items-center ">
              <img src={whatsapp} alt="whaatsapp link icon"  width='50' className="mx-auto"  />
              <img src={linktree} alt="linktree link icon"  width='50' className="mx-auto"  />
              <img src={linkedin} alt="linkedin link icon"  width='50' className="mx-auto"  />


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
