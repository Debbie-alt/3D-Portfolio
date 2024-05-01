import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


 const Testslider =()=> {
    return (
      <>
        <AwesomeSlider animation="cubeAnimation"  cssModule={AwesomeSlider}>
            <div className="w-screen  px-[5vw] py-3 space-y-4 carousel-page  relative" id="slider">
            <h1 className="font-serif italic bg-gradient-to-tl from-purple-200 to-pink-700 text-transparent bg-clip-text text-center   text-3xl z-10 ">
            My favorite projects
            </h1>
            
            </div>
            <div data-src="/public/starry.jfif" />
          <div data-src="/public/codebg.avif"  />
         <div data-src="/public/myphoto.jpg" />

       </AwesomeSlider>

       </>

 );
  }
export default Testslider;
