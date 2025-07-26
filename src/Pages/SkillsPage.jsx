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

  // Generate random floating directions for each skill
  const randomFloats = skills.map(() => ({
    x: Math.random() * 80 - 40, // random between -40 and 40
    y: Math.random() * 80 - 40, // random between -40 and 40
    rotate: Math.random() * 30 - 15 // random between -15 and 15 degrees
  }));

  return (
    <div className="flex gap-5 items-center justify-center  ">
  
    <div className="grid grid-cols-4 items-center justify-center gap-8 p-16  mt-20  w-[70vw]  ">
      {skills.map((skill, index) => (
      <div className='ball bubble flex items-center justify-center' key={index}>
        <motion.img
          src={skill}
          className="box cursor-pointer w-[70%] "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, randomFloats[index].x, 0],
            y: [0, randomFloats[index].y, 0],
            rotate: [0, randomFloats[index].rotate, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2, // random duration between 3-5s
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        />
         </div>  
      ))}
      
    </div>

    <p className=" text-7xl  text-center my-skills">My Skills </p>
  
    </div>
  );
};

export default SkillsPage;
