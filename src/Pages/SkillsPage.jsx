"use client";

import React from "react";
import { motion } from "framer-motion";
import js from "../assets/js_rounded.png";
import css from "../assets/css_icon.png";
import git from "../assets/github.png";
import framer from "../assets/framer_motion.png";
import reactv from "../assets/icons8-react.gif";
import react from "../assets/react.png";
import next from "../assets/next.png";
import rust from "../assets/icons8-rust-logo.gif";
import solana from "../assets/solana.png";
import tailwind from "../assets/tailwind.png";
import angular from "../assets/angular.png";
import bootstrap from "../assets/bts.png";
import starknet from "../assets/starknet.png";
import ts from "../assets/ts.png";

const SkillsPage = () => {
  const skills = [js, css, git, solana, rust, react, next, ts, tailwind, angular, bootstrap, starknet];

  return (
    <div className="flex gap-5 items-center justify-center  ">
  
    <div className="grid grid-cols-4 items-center justify-center gap-8 p-16  mt-20  w-[70vw]  ">
      {skills.map((skill, index) => (
      <div className='ball bubble flex items-center justify-center'>
        <motion.img
          key={index}
          src={skill}
          className="box cursor-pointer w-[70%] "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2, // Delay each image by 0.5s multiplied by index
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
            type: "spring",
              damping: 5,
               stiffness: 100,
                restDelta: 0.001
              }}}
        />
         </div>  
      ))}
      
    </div>

    <p className=" text-7xl  text-center my-skills">My Skills </p>
  
    </div>
  );
};

export default SkillsPage;
