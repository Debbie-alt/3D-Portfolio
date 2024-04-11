import React from "react";
import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext } from "react-icons/gr";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    // fade:true,
    // centerMode:true
  };

  return (
    <section className="carousel-page w-screen h-screen flex  relative text-white  ">
      <div className="flex flex-col">
        <h1 className="font-serif italic bg-gradient-to-tl from-purple-200 to-pink-700 text-transparent bg-clip-text text-center my-3 mt-2 text-3xl z-10 ">
          My favorite projects
        </h1>
        {/* <Slider {...settings}> */}
        <div className="cardContainer  w-screen flex justify-center space-x-28 h-[75vh]  ">
          <figure className="card w-1/3 h-[70vh] flex flex-col px-4  rounded-xl">
            my favorite project Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tenetur, quasi minima, dicta impedit voluptatibus
            placeat odit quaerat adipisci molestias ullam dolor facilis
            recusandae unde corporis cupiditate rem. Reiciendis, nulla
            voluptatum.
            <button className="text-white bg-pink-500  font-serif  italic p-2 hover:opacity-80 rounded-xl">
              View Demo
            </button>
          </figure>
          <figure className="card flex flex-col h-[70vh] w-1/3 px-4 rounded-xl">
            project my favorite project Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tenetur, quasi minima, dicta impedit voluptatibus
            placeat odit quaerat adipisci molestias ullam dolor facilis
            recusandae unde corporis cupiditate rem. Reiciendis, nulla
            voluptatum.
            <button className="text-white bg-pink-500  font-serif  italic p-2 hover:opacity-70 rounded-xl">
              View Demo
            </button>
          </figure>
        </div>
        {/* </Slider>   */}
      </div>

      {/* <figure className=" carousel-button bg-white rounded-full font-semibold text-xl  p-2 absolute bottom-[50%] z-10 left-[93vw]">
         <GrFormNext />
      </figure> */}
    </section>
  );
};

export default Projects;
