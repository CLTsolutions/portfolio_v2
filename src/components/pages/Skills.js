import React, { useEffect } from 'react'

// import { SkillsList } from '../utils'
import { SkillsList } from '../data'

const Skills = () => {
   const skillsMapper = () => {
      return SkillsList?.map((skill, id) => (
         <li
            className='uppercase text-xl text-center tracking-wider leading-relaxed text-gray-600 md:hidden odd:text-red-500 last:mb-24'
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
      <section className=''>
         <h1 className='text-6xl text-center mb-4'>Skills</h1>
         <ul className='flex flex-col justify-center space-y-5'>
            {skillsMapper()}
         </ul>
      </section>
   )
}

export default Skills
