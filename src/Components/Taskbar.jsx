import { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";



const Taskbar = ({ mode, toggleMode }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalid);
  });
  const formattedTime = time.toLocaleTimeString();
  const lightIcon =  <MdLightMode className="md:text-lg md:mt-0.5" onClick={toggleMode} />

  // <FaLightbulb  className="text-lg mt-0.5" onClick={toggleMode}/>
  const darkIcon =
   <MdDarkMode className="md:text-lg md:mt-0.5" onClick={toggleMode} />


  return (
    <div>

      <footer className=" taskbar text-[10px] md:text-sm bottom-[0px] fixed flex items-center justify-between px-5 md:px-20 bg-gradient-to-r from-neutral-800 via-pink-400 to-neutral-800 w-screen h-8  ">
        <p>FAYEMI FUNMILAYO, FRONTEND DEVELOPER</p>
        <div className="flex space-x-4">
          <p>{formattedTime}</p>
              {  mode == "dark" ? (lightIcon) : (darkIcon)}
 
        </div>
      </footer>
    </div>
  );
};

export default Taskbar;
