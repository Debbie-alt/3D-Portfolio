import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Projects.css"
import Smarta from "../Components/ProjectsComponents/Smarta.jsx";
import Movie from "../Components/ProjectsComponents/Movie.jsx";
import Deplay from "../Components/ProjectsComponents/Deplay.jsx";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      centerMode: true,
    };

    return (
     <motion.div className="w-screen  px-[5vw] py-3 space-y-4 carousel-page  relative" 
     initial={{width: 0}}
     animate={{width:window.innerWidth}}
     exit={{x: window.innerWidth}}
     id="slider">
        <h1 className="font-serif italic bg-gradient-to-tl from-purple-200 to-pink-700 text-transparent bg-clip-text text-center   text-3xl z-10 ">
          My favorite projects
        </h1>
        {/* <Tilt
      className="parallax-effect-glare-scale"
      perspective={1900}
      tiltEnable={true}
      scale={1.02}
      gyroscope={true}
      transitionSpeed= {200}
      > */}
      
          

      
        <Slider {...settings}>
          <Deplay />
          <Movie />
          <Smarta />
        </Slider>
        {/* </Tilt> */}
      </motion.div>

    );
  }
}
