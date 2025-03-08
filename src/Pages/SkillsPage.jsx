"use client";

import React from "react";
import { motion } from "framer-motion";
import js from "../assets/js_rounded.png";
import css from "../assets/css_icon.png";
import git from "../assets/github.png";
import framer from "../assets/framer_motion.png";
// import docker from "../assets/docker.png";
// import react from "../assets/react.png";
// import next from "../assets/nextjs.png";
import bootstrap from "../assets/bootstrap_icon.png";
import sql from "../assets/sql.png";

const floatingAnimation = {
  y: [0, -10, 10, -5, 0], // Moves up/down
  x: [0, 10, -10, 5, 0], // Moves left/right
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const SkillsPage = () => {
  const skills = [js, css, git, sql, framer,  bootstrap];

  return (
    <div className="grid grid-cols-4 items-center justify-center gap-5 p-16 h-screen w-screen">
      {skills.map((skill, index) => (
        <motion.img
          key={index}
          src={skill}
          className="w-24"
          animate={floatingAnimation}
        />
      ))}
    </div>
  );
};

export default SkillsPage;
