
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

import { Inter } from 'next/font/google'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Carousel from '@/components/Carousel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    //snap is the scroll functionality in tailwind 
    <div className='bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory 
    overflow-scroll z-0 overflow-y-scroll overflow-x-hidden 
    scrollbar scrollbar-track-blue-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className=''>
      <Hero />
      </section>

      {/* About */}
      <section id='about' className=''>
        <About />
      </section>

      {/* Experience */}
      {/* <section id='experience' className='snap-center' >
        <Experience />
      </section> */}

      {/* Skills  */}
      <section id='skills' className=''>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className=''>
        <Projects />
      </section>


      {/* Contact Me */}
      <section id='contact' className=''>
        <Contact />
      </section>


      {/* <section className='snap-start'>
        <Carousel/>
      </section> */}
    </div>
  )
}
