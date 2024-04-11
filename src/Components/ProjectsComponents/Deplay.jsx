import React from "react";
import js from "../../assets/js_rounded.png";
import css from "../../assets/css_icon.png";
import framermotionbg from "../../assets/framer_motion.png";
import Tilt from 'react-parallax-tilt';
import wina from '../../assets/ProjectPhotos/winnas.jpg'


const Deplay = () => {
  const languages_icon = [ { id: 1, logo: js, alt: "javascript_logo",},
    { id: 2, logo: css, alt: "css_logo" },
    { id: 3, logo: framermotionbg, alt: "framer_logo" }];
 
    return (
    //   <Tilt
    //   className="parallax-effect-glare-scale"
    //   perspective={1900}
    //   tiltEnable={true}
    //   scale={1.02}
    //   gyroscope={true}
    //   transitionSpeed= {200}
    // >
    <section className="cardContainer relative w-full flex justify-center  px-10  h-[75vh]  ">
     
      <figure className="card w-full h-[70vh]   flex flex-col px-4  rounded-md">
       <img src={wina} alt="" className="" />
        <button className="text-white bg-pink-500  font-serif  italic p-2 hover:opacity-80 rounded-xl">
          View Demo
        </button>

        <div className="flex fixed bottom-8  space-x-5 rounded-full">
          {languages_icon.map((icons) => (
            <img
              src={icons.logo}
              alt={icons.alt}
              className=" w-8 md:w-12 rounded-full"
            />
          ))}
        </div>
      </figure>
    </section>
    // </Tilt>
  );
};

export default Deplay;
