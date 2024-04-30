import React, { Component } from "react";
import "./Projects/Projects.css";
import Smarta from "./Components/ProjectsComponents/Smarta.jsx";
import Movie from "./Components/ProjectsComponents/Movie.jsx";
import Deplay from "./Components/ProjectsComponents/Deplay.jsx";
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';




 const Testslider =()=> {


    return (
      <AwesomeSlider
    animation="foldOutAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
  >
     <div className="w-screen  px-[5vw] py-3 space-y-4 carousel-page  relative" id="slider">
        <h1 className="font-serif italic bg-gradient-to-tl from-purple-200 to-pink-700 text-transparent bg-clip-text text-center   text-3xl z-10 ">
          My favorite projects
        </h1>
        
      
          <Deplay />
          <Movie />
          <Smarta />
       
            </div>
      </AwesomeSlider>

    );
  }
export default testslider;
