import React from "react";
import icon from '../../assets/resume.icon.png'
import Tilt from 'react-parallax-tilt';


const Resume = () => {
  const DisplayResume=()=>{
     dgresume.classList.add('prod')
  }
  
  return (

    <Tilt
    className="parallax-effect-glare-scale"
    perspective={1900}
    tiltEnable={true}
    scale={1.02}
    gyroscope={true}
    transitionSpeed= {200}
  >
    <div className=" top-[0px] ">
       <a href="https://drive.google.com/file/d/1UEp898jYNTJCkmJf6BMxCrq4J_Ndl_qY/view?usp=drive_link" download="Funmi's Resume" target="blank">
      <img
        src={icon}
        alt="Resume link"
        id="myResume"
        className="w-10 mt-2 md:w-12  "
        role="button"

        onClick={DisplayResume}
          />
      </a>
      <label htmlFor="myResume" className=" tracking-tighter">Resume</label>

  
    </div>
    </Tilt>
  );
};

export default Resume;
