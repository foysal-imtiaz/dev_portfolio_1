import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/dp.jpg'
import {motion} from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 flex items-center justify-center md:justify-center md:flex md:items-center lg:mb-35 sm:justify-center sm:flex sm:items-center'>
     {/* <div className='flex flex-wrap justify-center items-center'>*/}

        {/* Hero Section Left Side */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-center'>
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
  
            className='text-center pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl sm:text-5xl'

            >Foysal Imtiaz Sabab</motion.h1>
            
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-4xl sm:text-4xl'
            >Full Stack Developer</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className=' text-center my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Hero Section Right Image */}

        {/*
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-end'>
            <motion.img 
            initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            src={profilePic} width={400} height={400} alt="kevin" />
          </div>
        </div>
        */}
      
    </div>
  )  
}

export default Hero