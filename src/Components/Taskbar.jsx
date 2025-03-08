import { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";



const Taskbar = ({ mode, toggleMode }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalid);
  });
  const formattedTime = time.toLocaleTimeString();
  const lightIcon =  <MdLightMode className=" text-lg md:mt-0.5" onClick={toggleMode} />

  // <FaLightbulb  className="text-lg mt-0.5" onClick={toggleMode}/>
  const darkIcon =
   <MdDarkMode className=" text-lg md:mt-0.5" onClick={toggleMode} />


  return (
    <div>

      <footer className="  taskbar  bottom-[0px] fixed hid flex items-center justify-between px-5 md:px-20 bg-gradient-to-r from-neutral-800 via-pink-400 to-neutral-800 w-screen h-8  ">
        <p className="text-[16px] ">Funmilayo, Frontend Developer</p>
        <div className="flex space-x-4">
          <p className=" hidden md:block">{formattedTime}</p>
              {  mode == "dark" ? (lightIcon) : (darkIcon)}
 
        </div>
      </footer>
    </div>
  );
};

export default Taskbar;
