import React from 'react'
import mov from '../../assets/ProjectPhotos/saasphoto.jpg'
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import ProjectDetails from '../ProjectDetails';


const Movie = () => {
  const [open, setOpen] = useState('hidden')
  return (
  <>
    {/* <Tilt
    className="parallax-effect-glare-scale"
    perspective={1900}
    tiltEnable={true}
    scale={1}
    gyroscope={true}
    transitionSpeed={500}
  > */}
   
   <div className=" pj-pag flex items-center space-x-14 shadow-2xl shadow-black ">
       <h1 className="font-bold text-3xl font-serif "  onMouseOver={()=>{
          alert('yes')
        }}>GearLink</h1>
    <section className="cardContainer mx-auto shadow-2xl shadow-[#333]">
      <figure className="card  rounded-md">
        <div className="bezelanimation1" />
        <div className="bezelanimation2" />
        <img src={mov} alt="" className=" w-screen block" onMouseEnter={()=>{
          setOpen('flex')
        }} 
        
        
        />
      </figure>
      <a href="https://gearlink.vercel.app" target='blank' className="text-white bg-gradient-to-tr from-black via-pink-400 to-black rounded-full font-serif  italic p-2 hover:opacity-70 cursor-pointer demobtn">
        View Demo
      </a>
    </section>
    </div>
    {/* <ProjectDetails open={open}/> */}
  {/* // </Tilt> */}
  </>
  )
}

export default Movie