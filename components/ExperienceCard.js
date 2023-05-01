import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import levi from '../public/images/levi.jpg'


function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
        <motion.img 
            className='rounded-full h-20 w-20 xl:w-[130px] xl:h-[130px] object-cover object-center'
            src='https://www.wikihow.com/images/thumb/b/bc/Draw-Simple-Anime-Eyes-Step-13.jpg/-crop-375-300-375px-nowatermark-Draw-Simple-Anime-Eyes-Step-13.jpg.webp'
            initial={{y: -100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of Google</h4>
            <p className='font-bold text-2xl mt-1'>Rienger</p>

            <div className='flex space-x-2 my-2'>

            <Image 
            className='h-10 w-10 rounded-full object-cover'
            src={levi} 
            alt='none'/>

            <Image 
            className='h-10 w-10 rounded-full object-cover'
            src={levi} 
            alt='none'/>

            <Image 
            className='h-10 w-10 rounded-full object-cover'
            src={levi} 
            alt='none'/>

            


            </div>
            <p className='uppercase py-5 text-gray-300'>Started work ... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>This is the ultimate lead of lorem</li>
                <li>This is the ultimate lead of lorem </li>
                <li>This is the ultimate lead of lorem  </li>
                <li>This is the ultimate lead of lorem</li>
                
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard