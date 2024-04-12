import React from 'react'
import myphoto from '/myphoto.jpg'
import { FaRegTimesCircle } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PiDownloadBold } from "react-icons/pi";




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

            <div className=" text-center font-[300] "
            >
              <div className='flex space-x-20 py-5'>
                  <img src={myphoto} alt="" className='  object-cover w-32 h-32 border-2  border-transparent bg-gradient-to-r from-pink-400 to-purple-400 mx-5 rounded-full' />
                <h1 className='text-center font-bold text-xl '>Fayemi Funmilayo</h1>

                </div>
              </div>  


              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            

              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            
              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            
              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            
              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            
              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            
              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            
              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            
              <div className="  text-center p-5 font-[300] ">
                DigitalResume 
                hgjnmrb 
              </div>
            

           </section>

           <FaRegTimesCircle
           className='
            pdf-download-btn text-pink-300 text-md absolute top-[1%] left-[0.8%] cursor-pointer'
           role='button'
              onClick={()=>{
            dgresume.classList.remove('prod')
           }}
           />

          
         
        
        <a
        href="/Funmi's Resume.pdf"
        role='button'
        download=""
        target='_blank'
        className=" pdf-download-btn text-white text-xl absolute top-[2%] left-[95.5%] cursor-pointer">
            {/* <IoCloudDownloadOutline /> */}
            <PiDownloadBold/>
         </a>
        
      </section>
  )
}

export default DigitalResume