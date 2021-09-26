import { useState } from 'react'
import { ShortBio, LongBio } from '../pages'

const About = () => {
   const [shortBio, setShortBio] = useState(true)

   return (
      <div>
         <h1 className='text-5xl'>About Chelsey!</h1>
         <button
            className='bg-transparent hover:bg-pink-300 text-pink-500 font-semibold hover:text-white py-2 px-4 border border-pink-300 hover:border-transparent rounded'
            onClick={() => setShortBio(true)}
         >
            Short
         </button>
         <button
            className='bg-transparent hover:bg-pink-300 text-pink-500 font-semibold hover:text-white py-2 px-4 border border-pink-300 hover:border-transparent rounded'
            onClick={() => setShortBio(false)}
         >
            Long
         </button>
         {shortBio === true ? <ShortBio /> : <LongBio />}
      </div>
   )
}

export default About
