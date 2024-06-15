import { useState, useEffect } from "react";
import Taskbar from "./Components/Taskbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SimpleSlider from "./Pages/ProjectCarousel";
import Welcome from "./Pages/Welcome";
import { motion, AnimatePresence } from "framer-motion";
import plop from './assets/happy-pop.mp3'

function App() {
  const [mode, setMode] = useState("dark");
  const location = useLocation();

  const toggleMode = () => {
    setMode((current) => (current === "light" ? "dark" : "light"));
  };
  
 

  return (
    <>
      <main className=" flex flex-col" id={mode}>
      <AnimatePresence mode="wait"> 
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Homepage mode={mode} />} />
         <Route path="/projects" element={<SimpleSlider/>}></Route>
        </Routes>
      </AnimatePresence>
    
           {location.pathname !== '/' ? (
              <Taskbar mode={mode} toggleMode={toggleMode} />  ): null}
        
         
        
      </main>
    </>
  );
}
export default App;
