import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Projects.css";
import Gearlink from "../Components/ProjectsComponents/Gearlink.jsx";
import Movie from "../Components/ProjectsComponents/Movie.jsx";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
import { FaArrowCircleRight } from "react-icons/fa";


export default function SimpleSlider() {
  
    const settings = {
      // fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      // centerMode: true,
    };
      const navigate = useNavigate();

    return (
      <motion.div
        className="w-screen  px-5 md:px-[3vw] py-3 space-y-4 carousel-page  relative "
        exit={{width:0}}
        transition={{  duration: 0.5 }}
        id="slider">
        <h1 className="font-serif italic bg-gradient-to-tl from-purple-200 to-pink-700 text-transparent bg-clip-text text-center   text-3xl z-10 ">
          My favorite projects
        </h1>
        <FaArrowCircleRight   className="text-lg text-[#e94d79]  cursor-pointer fixed top-[5%] 
      left-[10%]  animate-bounce z-40  mx-[80vw]"
        onClick={()=>{
          navigate('/skills')
        }}/>
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={1900}
          tiltEnable={true}
          scale={1}
          gyroscope={true}
          transitionSpeed={200}>
          <Slider {...settings}>
            <Movie />
            <Gearlink />
          </Slider>
        </Tilt>
      </motion.div>
    );
  }

