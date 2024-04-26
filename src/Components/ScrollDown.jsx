import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Projects from "../Projects/Projects";
import { FaArrowCircleRight } from "react-icons/fa";

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
  
      <FaArrowCircleRight 
        className="text-lg text-[#e94d79] cursor-pointer fixed top-[5%] 
      left-[10%]  animate-bounce z-40  mx-[80vw]"
        onClick={()=>{
          scrolltoPage('/projects')
        }}
      />      
     </div>
  );
}
export default Scroll;