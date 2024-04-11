import { useRef, useEffect } from "react";
import AboutMePage from "../AboutMe/AboutMePage";
import { useNavigate } from "react-router-dom/dist";
import Projects from "../Projects/Projects";
import { FaArrowAltCircleDown } from "react-icons/fa";
import SimpleSlider from "../test2";

export default function Scroll() {
  const ref = useRef(null);
  const returnToHome = useNavigate();
  const handleClick = () => {
    // alert('scrolling started')
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {}, []);

  return (
    <div className="relative">
      <FaArrowAltCircleDown
        className="text-lg text-[#e94d79] cursor-pointer fixed top-[5%] 
      left-[10%]  animate-bounce z-40  mx-[80vw]"
        onClick={handleClick}
      />

      <div style={{ height: "100rem" }} />
      <div ref={ref}>
        <SimpleSlider handleClick={handleClick} />
      </div>
      
     

      <div style={{ height: "150rem" }}  />
      {/* <SimpleSlider/> */}

    </div>
  );
}
