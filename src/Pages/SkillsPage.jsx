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
import rust from "../assets/icons8-rust-logo.gif"
import solana from "../assets/solana.png"
import tailwind from '../assets/tailwind.png'
import angular from '../assets/angular.png'
import bootstrap from '../assets/bts.png'
import starknet from '../assets/starknet.png'
import ts from '../assets/ts.png'
// const floatingAnimation = {
//   y: [0, -10, 10, -5, 0], // Moves up/down
//   x: [0, 10, -10, 5, 0], // Moves left/right
//   transition: {
//     duration: 5,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

const SkillsPage = () => {
  const skills = [js, css, git, solana, rust, react, next, ts, tailwind, angular, bootstrap, starknet];

  return (
    <div className="grid grid-cols-4 items-center justify-center gap-5 p-16 h-screen w-screen">
      {skills.map((skill, index) => (
        <motion.img
          key={index}
          src={skill}
          className="w-24"
        />
      ))}
    </div>
  );
};

export default SkillsPage;
