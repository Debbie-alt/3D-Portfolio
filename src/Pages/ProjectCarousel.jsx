import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Projects.css";
import Smarta from "../Components/ProjectsComponents/Gearlink.jsx";
import Movie from "../Components/ProjectsComponents/Movie.jsx";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // fade: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      // centerMode: true,
    };

    return (
      <motion.div
        className="w-screen  px-5 md:px-[3vw] py-3 space-y-4 carousel-page  relative "
        exit={{width:0}}
        transition={{  duration: 0.5 }}
        id="slider"
      >
        <h1 className="font-serif italic bg-gradient-to-tl from-purple-200 to-pink-700 text-transparent bg-clip-text text-center   text-3xl z-10 ">
          My favorite projects
        </h1>
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={1900}
          tiltEnable={true}
          scale={1}
          gyroscope={true}
          transitionSpeed={200}
        >
          <Slider {...settings}>
            <Movie />
            <Smarta />
          </Slider>
        </Tilt>
      </motion.div>
    );
  }
}
