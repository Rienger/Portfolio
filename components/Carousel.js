import React from 'react'
import Image from 'next/image'
import test from '../public/project-images/download.jpeg'
import test1 from '../public/project-images/download1.jpg'

function Carousel() {
  return (
    <div className='h-screen relative overflow-hidden flex flex-col items-center justify-evenly text-left
    md:flex-row max-w-full mx-auto z-40'>
    {/* <div className='h-screen relative overflow-hidden flex flex-col items-center justify-evenly text-left
    md:flex-row max-w-full mx-auto z-40'>

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
    
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={test} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
     
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={test1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
     
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/public/project-images/download2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." 
                width={300}
                height={300}
            />
        </div>
      
      
    </div>
 
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
       
    </div>
  
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


    </div> */}

    <div className='group text-center justify-center items-center flex flex-row' >
    <h1 className='group-hover:text-blue-300'>Hello</h1>
    <h1 className='group-hover:text-red-500'>How</h1>
    <h1 className='group-hover:text-yellow-700'>Are you?</h1>

   
</div>
 <div className='h-20 w-20 absolute top-4 rounded-full border-2 border-white '>
        <h1> Test </h1>
    </div>
    <div className= 'h-20 w-20 absolute top-4 rounded-full border-2 border-white  opacity-0 hover:opacity-100 bg-green-400'>
        <h1> Elevate</h1>
    </div>

    </div>
  )
}

export default Carousel