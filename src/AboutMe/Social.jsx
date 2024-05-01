import React from 'react'
import image from '../assets/phone_media.png'
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import MySocials from './MySocials';


const Social = () => {
  const openSocial = () => {
    socials.classList.add("prod");
  };
  return (
    <Tilt
    className="parallax-effect-glare-scale"
    perspective={1900}
    tiltEnable={true}
    scale={1.02}
    gyroscope={true}
    transitionSpeed= {200} >
     
   <div className=" top-[0px]  ">
      <img src={image} alt="about-me-female"       
        id="myResume"
        className="  w-[50px] md:w-16 "
        role="button"
        onClick={openSocial} />
      
      <label htmlFor="myResume" className="tracking-tighter text-sm mt-20">
        My Socials
      </label>
    

    </div>
    </Tilt>
  )
}

export default Social