// import { useRef } from 'react'
import { Works } from '../data'
import { FlipCards } from '../core'
import { Typewriter } from '../core'

const Projects = () => {
   // const ref = useRef()
   const buttonStyle =
      'bg-transparent hover:bg-lavender-dark text-blue text-font-semibold hover:text-white transition ease-out duration-300 py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50  shadow-md'

   const cardsMapper = () => {
      return Works.map(work => (
         <FlipCards
            skillMapper={skillMapper}
            buttonStyle={buttonStyle}
            work={work}
            key={work.id}
         />
      ))
   }

   const skillMapper = work => {
      return work.stack.map((skill, id) => (
         <li key={id} className='text-xl md:text-2xl lg:text-3xl text-gray-800'>
            {skill}
         </li>
      ))
   }

   return (
      <main>
         <h1 className='text-transform: capitalize font-lucky-typewriter text-7xl 2xl:text-8xl text-center mt-8 text-blue-light md:animate-fade-in'>
            <Typewriter textToType={'projects'} />
         </h1>
         <div className='flex flex-wrap justify-center w-full md:p-10 xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:justify-items-center xl:gap-y-16 animate-slide-up'>
            {cardsMapper()}
         </div>
      </main>
   )
}

export default Projects
