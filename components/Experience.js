import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

function Experience() {
  return (
    <motion.div 
    className='h-screen flex relative flex-col overflow-hidden text-left 
    md:flex-row max-w-full px-10 justify-evenly items-center mx-auto'
    initial={{opacity: 0,}}
    whileInView={{opacity: 1,}}
    transition={{duration: 1.4,}}
    viewport={{once: true}}
    >

    <h3 className='absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500'>
    Experience
    </h3>
   

    {/* snap parent */}
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
    scrollbar-thin scrollbar-track-blue/20 scrollbar-thumb-[#f7ab0a]/80'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
     
       

    </div>
    <p className='absolute bottom-12 uppercase text-gray-300 text-sm'>shift key + mouse scroll = horizontal scroll</p>
    </motion.div>
  )
}

export default Experience