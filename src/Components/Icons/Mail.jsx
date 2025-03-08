import React from 'react'
import icon from '../../assets/gmailorig.png'
import Tilt from 'react-parallax-tilt';

const Mail = () => {
  return (
    <Tilt
    className="parallax-effect-glare-scale"
    perspective={1900}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
    gyroscope={true}
  >

      <div className="">
     <a href="mailto:fayemi.funmilayo55@gmail.com">
     <img
        src={icon}
        alt="Resume link"
        id="myResume"
        className=" w-10 md:w-14"
        role="button"

      />

     </a>
     
      <label htmlFor="myResume" className=' text-sm'>Gmail</label>
    </div>
    </Tilt>
      )
}

export default Mail