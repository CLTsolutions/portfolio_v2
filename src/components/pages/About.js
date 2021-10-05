import { useState } from 'react'
import { ShortBio, LongBio } from '../pages'

const About = () => {
   const [shortBio, setShortBio] = useState(true)

   return (
      <section className='flex flex-col justify-center items-center'>
         <h1 className='text-transform: capitalize font-shadows-into-light text-8xl text-center mt-8 text-blush-dark md:animate-fade-in'>
            about me
         </h1>
         <ul className='space-x-5 pt-16'>
            <button
               className='bg-transparent hover:bg-lavender-dark text-blue font-semibold hover:text-white transition ease-out duration-300 py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
               onClick={() => setShortBio(true)}
            >
               Short Bio
            </button>
            <button
               className='bg-transparent hover:bg-lavender-dark text-blue font-semibold hover:text-white transition ease-out duration-300 py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
               onClick={() => setShortBio(false)}
            >
               Long Bio
            </button>
         </ul>
         {shortBio ? <ShortBio /> : <LongBio />}
      </section>
   )
}

export default About
