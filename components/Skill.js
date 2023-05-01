import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


function Skill({name, image}) {
  return (
    // the group in tailwind is for the group-hover later
    // allows you to give different hover effects to child referencing the state from parent
    <motion.div className=' relative group flex cursor-pointer'
    initial={{
        x: -200,
        opacity: 0
    }}
    whileInView={{
        x: 0,
        opacity: 1,
    }}
    transition={{
        duration: 1
    }} >

   
    
    <Image 
    className='rounded-full object-cover h-24 w-24 border-2 border-gray-500
    filter 
    md:w-28 md:h-28' 
    src={image}
    alt='none' 
    />
    
    
    


    {/* show name when on hover: set the position to absolute is the magic */}
    {/* reference to the parent element that has position relative */}
    <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 
    ease-in-out group-hover:bg-[#f7ab0a]/95 h-24 w-24 rounded-full
    md:w-28 md:h-28 z-0 group-hover:rotate-[360deg] rotate-[200deg]'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-xl font-bold text-black opacity-100'>
            {name}
            </p>
        </div>
    </div>



    </motion.div>
  )
}

export default Skill