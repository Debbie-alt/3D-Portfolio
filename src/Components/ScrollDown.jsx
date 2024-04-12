import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Projects from "../Projects/Projects";
import { FaArrowAltCircleDown } from "react-icons/fa";
import SimpleSlider from "../ProjectCarousel";

 function Scroll() {
  // const ref = useRef(null);
  // const returnToHome = useNavigate();
  // const handleClick = () => {
  //   // alert('scrolling started')
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };
  const scrolltoPage = useNavigate();

 

  return (
    <div className="relative">
  
      <FaArrowAltCircleDown
        className="text-lg text-[#e94d79] cursor-pointer fixed top-[5%] 
      left-[10%]  animate-bounce z-40  mx-[80vw]"
        onClick={()=>{
          scrolltoPage('/test2')
        }}
      />
      <div style={{ height: "100rem" }} />
      <div 
      // ref={ref}
      >
        <SimpleSlider
        //  handleClick={handleClick} 
         />
      </div>
      
     </div>
  );
}
export default Scroll;