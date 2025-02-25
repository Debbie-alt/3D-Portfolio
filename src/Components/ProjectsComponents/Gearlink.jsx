import React from "react";
import mov from "../../assets/ProjectPhotos/saasphoto.jpg";
import Tilt from "react-parallax-tilt";

const Gearlink = () => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={1900}
      tiltEnable={true}
      scale={1}
      gyroscope={true}
      transitionSpeed={500}>
        
      <div className=" pj-pag flex  flex-col md:flex-row h-[70vh] md:h-[80vh] justify-center items-center   shadow-2xl shadow-black  ">
         <h1 className="font-bold text-2xl font-serif italic mx-5 ">GearLinkoo</h1>
      <section className="  cardContainer  mx-auto shadow-2xl shadow-black ">
        <figure className=" card rounded-md screen-content  h-[97%] object-contain top-[2%] ">
          <div className="bezelanimation1" />
          <div className="bezelanimation2" />
          <img src={mov} alt="" className="w-screen block " />
        </figure>
        <a href="https://movatti.vercel.app" target="blank" className=" text-white bg-gradient-to-tr from-black via-pink-400 to-black rounded-full font-serif  italic p-2 hover:opacity-70 cursor-pointer demobtn ">
          View Demo
        </a>
      </section>
      </div>
    </Tilt>
  );
};

export default Gearlink;
