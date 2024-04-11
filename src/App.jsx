import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import Taskbar from "./Components/Taskbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Scroll from "./Components/ScrollDown";
import Responsive from "./test2";
import whistle from './assets/sound-effect-twinkle.mp3'

function App() {
  const [mode, setMode] = useState();
  const toggleMode = () => {
    setMode((current) => (current === "light" ? "dark" : "light"));
  };

   const playWhistleSound = () => {
    const audio = new Audio(whistle); 
    audio.play();

  }
  useEffect(() => {
    
    const clickHandler = () => {
      playWhistleSound();
    };


    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []); 

  return (
    <>
    
      <main className=" flex flex-col" id={mode}>

        <Routes>
          <Route path="/" element={<Homepage mode={mode} />} />
          <Route path="/e" element={<AboutMe />} />
          <Route path="/new" element={<Taskbar />} />
         <Route path="/projs" element={<Projects />}></Route>
         <Route path="/test2" element={<Responsive/>}></Route>
        </Routes>
        <Scroll />
        <Taskbar mode={mode} toggleMode={toggleMode} />
      </main>
  
    </>
  );
}

export default App;
