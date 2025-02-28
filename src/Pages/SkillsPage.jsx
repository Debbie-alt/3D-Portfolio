import React from 'react'
import js from '../assets/js_rounded.png'
import css from '../assets/css_icon.png'
import git from '../assets/github.png'
import framer from '../assets/framer_motion.png'
import docker from '../assets/js_rounded.png'
import react from '../assets/js_rounded.png'
import next from '../assets/js_rounded.png'
import bootstrap from '../assets/bootstrap_icon.png'
import sql from '../assets/sql.png'
// import js from '../assets/js_rounded.png'
// import js from '../assets/js_rounded.png'
// import js from '../assets/js_rounded.png'


const SkillsPage = () => {
  return (
    <div className='grid grid-cols-4 items-center justify-center gap-5 p-16 h-screen w-screen'>
      <img src={js} className='w-24'/>
      <img src={css} className='w-20'/>
      <img src={git} className='w-24'/>
      <img src={sql} className='w-28'/>
      <img src={framer} className='w-24'/>
      <img src={css} className='w-20'/>
      <img src={git} className='w-24'/>
     
      

         
    </div>
  )
}

export default SkillsPage