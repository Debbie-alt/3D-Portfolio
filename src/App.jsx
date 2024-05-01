import { useState, useEffect } from "react";
import Taskbar from "./Components/Taskbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SimpleSlider from "./Pages/ProjectCarousel";
import whistle from './assets/sound-effect-twinkle.mp3'
import Welcome from "./Pages/Welcome";
import Testslider from "./Pages/Testslider";
import { motion, AnimatePresence } from "framer-motion";
import plop from './assets/happy-pop.mp3'

function App() {
  const [mode, setMode] = useState();
  const location = useLocation();

  const toggleMode = () => {
    setMode((current) => (current === "light" ? "dark" : "light"));
  };
  
  useEffect(() => {
    const clickHandler = () => {
      const audio = new Audio(plop); 
      audio.play(); 
    };

    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler); 
     };
  }, []); 

  return (
    <>
      <main className=" flex flex-col" id={mode}>
      <AnimatePresence mode="wait"> 
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Homepage mode={mode} />} />
          <Route path="/h" element={<Testslider/>} />
         <Route path="/projects" element={<SimpleSlider/>}></Route>
        </Routes>
      </AnimatePresence>
      <Taskbar mode={mode} toggleMode={toggleMode} />
      </main>
    </>
  );
}
export default App;
