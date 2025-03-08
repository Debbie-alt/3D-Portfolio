import React from "react";
import linkedin from "../assets/linkedin1.png";
import { Link } from "react-router-dom/dist";
import Tilt from "react-parallax-tilt";

const Linktree = () => {
  
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
            src={linkedin}
            alt="Resume link"
            id="myResume"
            className="w-10 md:w-14"
            role="button"
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
