import React from 'react'
import myphoto from '/myphoto.jpg'
import { FaRegTimesCircle } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PiDownloadBold } from "react-icons/pi";
import DigitalSkills from './DigitalSkills';




const DigitalResume = () => {


 
    const divStyle = {
      width: '300px',
      height: '150px',
      backgroundColor: '#6B7280', // Gray color
      clipPath: 'url(#wave)',
    };
  
    return (
    <section   
          className=" digitalresume Aboutme 
          border-2 border-transparent left-0  h-[70%]
          lg:h-[90vh]  relative shadow-xl lg:top-2 
          w-[90vw] md:w-[70%] rounded-md  hidden"
          id="dgresume">       
          <section className="w-full flex flex-col">

  
                <header className='flex space-x-24 py-5 resume-header'>
                    <img src={myphoto} alt="" className='  object-cover w-32 h-32 border-2  border-transparent bg-gradient-to-r from-pink-400 to-purple-400 mx-5 rounded-full' />
                   
                    <div className ="flex flex-col bg space-y-8">
                      <ol className='container flex  space-x-5 bg-red-40 '>
                        <li className=' frontend-eng= tracking-wide text-xs font-bold'>FRONTEND ENGINEER</li>
                        <li className='text-xs font-bold'><a href="tel:+@347038502924">+2347036502924</a></li>
                        <li className='text-xs text-underline'><a href="mailto:funmmy565@gmail.com">funmmy565@gmail.com</a></li>
                     </ol>
                      
                       <p className=' header-name font-serif text-left tracking-widest text-5xl leading-30'> FUNMILAYO 
                       <br /> FAYEMI
                   
                       </p>

                    </div>
          
                 </header>
              
               <hr className='w-screen hr' />

              <DigitalSkills/>  
                    

           </section>
           <a
        href="/Funmi's Resume.pdf"
        role='button'
        download=""
        target='_blank'
        className=" pdf-download-btn text-white text-md absolute top-[1%] left-[1.5%] cursor-pointer">
            {/* <IoCloudDownloadOutline /> */}
            <PiDownloadBold/>
         </a>

           <FaRegTimesCircle
           className='
            pdf-download-btn text-md absolute top-[2%] left-[97%] cursor-pointer'
           role='button'
              onClick={()=>{
            dgresume.classList.remove('prod')
           }}
           />

          
         
        
       
        
      </section>
  )
}

export default DigitalResume