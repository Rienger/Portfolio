import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Header() {
  return (
    // using <header></header> for SEO friendly
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center p-5'>

    {/* we are using framer motion to create animation */}
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            <SocialIcon 
            url="https://www.youtube.com" 
            fgColor='gray' 
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://www.facebook.com' 
            fgColor='gray' 
            bgColor='transparent'
            />
            <SocialIcon 
            url="https://www.instagram.com" 
            fgColor='gray' 
            bgColor='transparent'
            />
        </motion.div>

        {/* <Link href='#contact'> */}
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
           
           <a href='#contact'>
            
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400
            border-gray-400 border rounded-lg py-2 px-3
             hover:text-[#f7ab0a] hover:border-[#f7ab0a] '>
            Get In Touch
            </p>
            </a>
           
           
        </motion.div>
        {/* </Link> */}
    </header>

  )
}

export default Header