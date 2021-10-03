import { useState } from 'react'
import { ShortBio, LongBio } from '../pages'

const About = () => {
   const [shortBio, setShortBio] = useState(true)

   return (
      <section className='flex flex-col justify-center items-center'>
         <ul className='space-x-5 mt-16'>
            <button
               className='bg-transparent hover:bg-lavender-dark text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
               onClick={() => setShortBio(true)}
            >
               Short
            </button>
            <button
               className='bg-transparent hover:bg-lavender-dark text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
               onClick={() => setShortBio(false)}
            >
               Long
            </button>
         </ul>
         {shortBio ? <ShortBio /> : <LongBio />}
      </section>
   )
}

export default About
