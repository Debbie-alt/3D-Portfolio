import React from 'react'
import icon from  '../../assets/github.png'
import Tilt from 'react-parallax-tilt';

const Github = () => {
  return (
    <Tilt
    className="parallax-effect-glare-scale"
    perspective={1900}
    tiltEnable={true}
    scale={1.02}
    gyroscope={true}
    transitionSpeed= {200}
  >

      <div className="">
     <a href="https://github.com/Debbie-alt" target='_blank'>
     <img
        src={icon}
        alt="Resume link"
        id="myResume"
        className=" w-8 md:w-14"
        role="button"

      />

     </a>
     
      <label htmlFor="myResume" className=' text-sm'>Github</label>
    </div>
     </Tilt>
      )
}

export default Github