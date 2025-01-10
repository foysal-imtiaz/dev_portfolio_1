import React from 'react'
import {PROJECTS} from "../constants"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Code and Live Buttons */}
              <a
                href="#_" target='_blank'
                class="relative inline-flex items-center justify-start inline-block px-4 py-1 overflow-hidden font-light text-sm rounded-full group"
              >
                <span class="w-22 h-22 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gray-300 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-gray-300 transition-colors duration-200 ease-in-out group-hover:text-black">
                  Code
                </span>
                <span class="absolute inset-0 border border-gray-500 rounded-full"></span>
              </a>
              <span className='px-1'></span>
              <a
                href="#_" target='_blank'
                class="relative inline-flex items-center justify-start inline-block px-4 py-1 overflow-hidden font-light text-sm rounded-full group"
              >
                <span class="w-22 h-22 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gray-300 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-gray-300 transition-colors duration-200 ease-in-out group-hover:text-black">
                  Live
                </span>
                <span class="absolute inset-0 border border-gray-500 rounded-full"></span>
              </a>


            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects