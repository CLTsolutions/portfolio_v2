// import { useRef } from 'react'
import { Works } from '../data'
import FlipCards from '../styles/FlipCards'

const Projects = () => {
   // const ref = useRef()
   const buttonStyle =
      'bg-transparent hover:bg-lavender-dark text-blue text-font-semibold hover:text-white transition ease-out duration-300 py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'

   const cardsMapper = () => {
      return Works.map(work => (
         <FlipCards
            skillMapper={skillMapper}
            buttonStyle={buttonStyle}
            work={work}
         />
      ))
   }

   const skillMapper = work => {
      return work.stack.map((skill, id) => (
         <li key={id} className='text-xl md:text-3xl text-gray-800'>
            {skill}
         </li>
      ))
   }

   return (
      <main>
         <h1 className='text-transform: capitalize font-shadows-into-light text-8xl text-center mt-8 text-blue-light md:animate-fade-in'>
            Projects
         </h1>
         <div className='flex justify-center flex-wrap md:p-10'>
            {cardsMapper()}
         </div>
      </main>
   )
}

export default Projects
