import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import skillArray from '../public/skillArray'



function Skills() {
  return (
    // motion.div is set to relative to be the parent element of the absolute position 
    <motion.div className='h-screen relative flex flex-col 
    mx-auto text-center items-center md:text-left xl:flex-row max-w-[2000px] 
    xl:px-10 justify-center xl:space-y-0'
    initial={{opacity: 0,}}
    whileInView={{opacity: 1,}}
    transition={{duration: 1.4,}}
    >
        <h3 className='absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5 '>

            {skillArray.map((value) => 
              <Skill key='' name={value.name} image={value.image}/>
              
            )}
         
        </div>
    </motion.div>
  )
}

export default Skills