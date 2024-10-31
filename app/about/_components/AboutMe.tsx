"use client"

import React from "react"
import { motion } from "framer-motion"
import userProps from "@/config/user"
import Image from "next/image"
import archImage from "@/public/img/dev_enviroment.png"
import archImage2 from "@/public/img/arch_rofi.png"
import aboutMe from "@/public/img/about_me.jpeg"
import PersonalInfo from "./PersonalInfo"
import SocialButtons from "@/app/_components/SocialButtons"

type Props = {}

export default function AboutMe({ }: Props) {

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      }
    },
    delay: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.3
      }
    },
  };
  return (
    <div
      className="flex flex-col mt-16 md:px-6 mx-4 max-w-4xl items-center justify-center md:w-full z-10"
    >
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h1 className="text-3xl font-semibold mb-2 tracking-widest">Abdilaahi Dhaqane</h1>
        <p className="text-zinc-400 mb-6 text-justify md:text-left">Hello! Here you can find out more about me, my interests, the tools I use to develop projects and how you can get in touch with me for a relaxed chat or even discuss possible collaboration or interview opportunities. I'm looking forward to sharing a little more about who I am and how I can contribute to future projects. Let's connect and explore new possibilities together!</p>
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Basic Information</h2>
        <PersonalInfo />
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="delay"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Hello, it's a pleasure to meet you!</h2>
        <Image src={aboutMe} alt="Imagem da minha área de trabalho" className="rounded-xl mb-8 w-auto h-auto" />
        <p className="text-zinc-400 text-justify md:text-left mb-4">{userProps.moreAbout}</p>
        <p className="text-zinc-400 text-justify md:text-left">{userProps.aboutWork}</p>
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="delay"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h2 className="text-blue-400 font-semibold text-xl mb-4 flex flex-col">
          By the way, I use Arch linux
          <span className="text-zinc-400 text-xs">| {'"I use Arch, btw"'}</span>
        </h2>
        <p className="text-zinc-400 text-justify md:text-left">{userProps.aboutArch}</p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex flex-col items-center justify-center">
            <Image src={archImage} alt="Imagem da minha área de trabalho" className="rounded-xl md:max-w-[425px] md:h-auto" />
            <p className="text-zinc-600 text-xs italic text-center">A little about my development environment</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={archImage2} alt="Imagem da minha área de trabalho" className="rounded-xl md:max-w-[425px] md:h-auto" />
            <p className="text-zinc-600 text-xs italic text-center">My working area</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="delay"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h2 className="text-blue-400 font-semibold text-xl mb-4 flex flex-col">Let's work together?</h2>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-4 text-zinc-400 mb-8 text-justify md:text-start">
            <p>
              As I continue to improve my skills as a fullstack developer, I am looking for opportunities that allow me to apply my passion for technology and innovation to challenging and impactful projects. My goal is not only to contribute to the development of cutting-edge solutions, but also to create meaningful digital experiences that improve people's lives and drive business growth. I am ready to collaborate on exciting projects and tackle new challenges that allow me to expand my knowledge and skills.
            </p>
            <p>
              If you are looking for a dedicated, creative, and motivated developer, do not hesitate to contact me. I am eager to participate in engaging conversations about how we can work together to achieve incredible results. Feel free to use the contact information below to connect with me. I am open to job opportunities, collaborations, and inspiring discussions about the fascinating world of technology and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row items-center justify-between w-full">
            <SocialButtons
              variants="outline"
              classes="w-36 h-30 md:w-44 md:h-25 flex flex-row justify-between group"
              iconLink={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
