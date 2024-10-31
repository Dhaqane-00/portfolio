"use client";

import { projectProps } from "@/config/projects";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/app/_components/ProjectCard";

type Props = {}

export default function MyProjects() {
  const myProjects = projectProps.map((props) => (
    <ProjectCard
      key={props.name}
      direction={props.direction}
      name={props.name}
      img={props.img}
      description={props.description}
      stacks={props.stacks}
      link={props.link}
      source={props.source}
    />
  ))
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col mt-16 mx-4 max-w-4xl items-center justify-center z-10"
    >
      <div className="m-8">
        <h1 className="text-3xl font-semibold pb-2 tracking-widest">Projects</h1>
        <p className="text-zinc-400 text-justify md:text-start">
          Discover the projects that are part of my portfolio and explore the universe of my creations! In this section, I present a selection of my most recent and relevant works, demonstrating my experience and skills in areas such as software development, interface design, data analysis, and much more. Each project reflects my commitment to excellence, creativity, and delivering impactful and effective solutions to the challenges of the digital world. Come see what I can offer and how I can add value to your projects and initiatives!
        </p>
      </div>
      <div className="mx-8 text-center md:text-start">
        {myProjects}
      </div>
    </motion.div>
  )
}
