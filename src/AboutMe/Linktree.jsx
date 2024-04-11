import React from "react";
import linkedin from "../assets/linkedin1.png";
import { Link } from "react-router-dom/dist";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import linkedin2 from "../assets/linkedin2.png";
import linkedin3 from "../assets/linkedin3.png";

const Linktree = () => {
  const [icon, setIcon] = useState(linkedin);
  const iconList  =[linkedin, linkedin2,  linkedin3]

  useEffect(() => {
    //    setInterval(() => {
    //        iconList.forEach(i => {
    //         setIcon(i)
          
    //       })
    // }, 9000);

    // return () => clearInterval(intervalid);
  },  );
  
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={1900}
      tiltEnable={true}
      scale={1.02}
      gyroscope={true}
      transitionSpeed={200}
    >
      <div className="">
        <Link to="https://linktr.ee/fayemi.funmilayo55" target="blank">
          <img
            src={icon}
            alt="Resume link"
            id="myResume"
            className="w-8 md:w-14"
            role="button"
            // onMouseEnter={changeicon}
          />
        </Link>

        <label htmlFor="myResume" className="tracking-tight  text-sm">
          {" "}
             LinkedIn
        </label>
      </div>
    </Tilt>
  );
};

export default Linktree;
