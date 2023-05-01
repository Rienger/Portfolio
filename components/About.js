import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import code from "../public/about-images/programmer.jpg";
import japan from "../public/about-images/aot.jpg";
import game from "../public/about-images/game.webp";

function About() {

 

  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}


 
    >
      {/* the absolute position is depending on the relative as the parent */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

    

      <div className="flex flex-row overflow-hidden space-x-7">

        <div
        className="min-w-[500px] space-y-3"
        >

        
          <Image
            className="h-40 w-[30rem] object-cover rounded-xl flex-shrink-0
            border border-[#f7ab0a] 
            "
            src={code}
            alt=""
          />
          
          <Image
            className="h-40 w-[30rem] object-cover rounded-xl flex-shrink-0 
            border border-[#f7ab0a]
            "
            src={game}
            alt=""
          />

          <Image
            className="h-40 w-[30rem] object-cover rounded-xl flex-shrink-0
            border border-[#f7ab0a]"
            src={japan}
            alt=""
          />
        
        </div>

        <div
        className="my-auto pr-16 text-lg tracking-wider text-gray-300"
        >
          <h1>
          I am a self-taught web developer who is passionate about what they do and
truly enjoys building websites and applications.

 

          </h1>
          <div className="py-8 my-8 border-y-2 border-[#f7ab0a]/40">
          Aside for my love for programming and exploring new technologies. I also enjoy watching anime,
         
 listening to music, and playing computer games.</div>
          <h1>
          
 Gaming has always been one of my favorite pastime since it allows me to showcase
 my competitive spirit XD.
          </h1>
        </div>

        {/* I am also an avid fan anime basically with 
        the Japanese culture, and currently learning the language. */}


      </div>
    </motion.div>
  )
}

export default About;