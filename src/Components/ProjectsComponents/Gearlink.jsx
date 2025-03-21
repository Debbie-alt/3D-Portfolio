import React from "react";
import mov from "../../assets/ProjectPhotos/saasphoto.jpg";
import Tilt from "react-parallax-tilt";

const Gearlink = () => {
  return (
   
        
      <div className=" pj-pag flex flex-col md:flex-row h-[70vh] md:h-[80vh] justify-center items-center   shadow-2xl shadow-black ">
         <Tilt
      className="parallax-effect-glare-scale"
      perspective={1900}
      tiltEnable={true}
      scale={1}
      gyroscope={true}
      transitionSpeed={200}>
         <h1 className="font-bold text-2xl font-serif italic mx-5 ">Gearlink</h1>
      <section className="  cardContainer  mx-auto shadow-2xl shadow-pink-500 ">
        <figure className=" card rounded-md screen-content  h-[97%] object-contain top-[2%] ">
          <div className="bezelanimation1" />
          <div className="bezelanimation2" />
          <img src={mov} alt="" className="w-screen block " />
        </figure>
        <a href="https://movatti.vercel.app" target="blank" className=" text-black text-sm bg-white rounded-2xl  md:rounded-full font-serif  italic  px-2 hover:opacity-70 cursor-pointer demobtn text-center py-1 border border-black">
          View Demo
        </a>
      </section>
      </Tilt>


      </div>
  );
};

export default Gearlink;
