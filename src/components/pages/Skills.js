import React, { useEffect } from 'react'

// import { SkillsList } from '../utils'
import { SkillsList } from '../data'

const Skills = () => {
   const skillsMapper = () => {
      return SkillsList?.map((skill, id) => (
         <li
            className='uppercase text-xl text-center tracking-wider leading-relaxed text-gray-600 md:hidden'
            key={id}
         >
            {skill}
         </li>
      ))
   }

   useEffect(() => {
      console.log(SkillsList)
   })

   return (
      <section className='flex flex-col'>
         <h1 className='font-give-you-glory text-6xl text-center my-5 text-blue'>
            Skills
         </h1>
         <ul className='flex flex-col justify-center space-y-5 last:mb-5'>
            {skillsMapper()}
         </ul>
      </section>
   )
}

export default Skills
