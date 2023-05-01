import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import levi from '../public/images/levi.jpg'
import projectArray from '../public/projectArray'

function Projects() {


  return (
    <div className='h-screen relative overflow-hidden flex flex-col items-center justify-evenly text-left
    md:flex-row max-w-full mx-auto z-0'>
        <h3 className='absolute top-24 text-2xl tracking-[20px] text-gray-500 uppercase'>
        Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar-thin scrollbar-track-blue-400/20 scrollbar-thumb-[#f7ab0a]/80'>

          {projectArray.map((value, index) => (
            <motion.div key={value.id}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2}}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen'
            >

                  <motion.div
                  className=''
                    initial={{y:200, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    >
                    <Image 
                    className='h-[15rem] w-[25rem] border-4 border-[#f7ab0a] rounded-lg
                    xl:h-80 xl:w-[30rem] '
                    src={value.image}
                    alt='none'    
                    />
                    </motion.div> 

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                      <h4 className='text-4xl font-semibold text-center'>
                      Case Study {index+1} of {projectArray.length}
                      </h4>

                      <p className='text-lg text-center md:text-left'>
                        This is the project summary of the given thesis technology that has been used and frameworks and libraries from node package manager. Install break next js and react native.
                      </p>
                    </div>
      
            </motion.div>
          ))}
        </div>


        {/* make a background design by utilizing -skew (tailwind) to slant or angle a div's position */}
        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default Projects