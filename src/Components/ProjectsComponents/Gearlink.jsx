import React from "react";
import mov from "../../assets/ProjectPhotos/movattis.jpg";
import Tilt from "react-parallax-tilt";

const Smarta = () => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={1900}
      tiltEnable={true}
      scale={1}
      gyroscope={true}
      transitionSpeed={500}
    >
      <div className="flex  items-center space-x-14">
         <h1 className="font-bold text-3xl font-serif ">GearLink</h1>
      <section className="cardContainer mx-auto">
        <figure className="card  rounded-md">
          <div className="bezelanimation1" />
          <div className="bezelanimation2" />
          <img src={mov} alt="" className="w-sc block" />
        </figure>
        <a href="https://movatti.vercel.app" target="blank" className="text-white bg-gradient-to-tr from-black via-pink-400 to-black rounded-full font-serif  italic p-2 hover:opacity-70 cursor-pointer demobtn">
          View Demo
        </a>
      </section>
      </div>
    </Tilt>
  );
};

export default Smarta;
