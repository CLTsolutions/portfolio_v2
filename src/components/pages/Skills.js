import { SkillsList } from '../data'

const Skills = () => {
   const skillsMapper = () => {
      return SkillsList?.map((skill, id) => (
         <li
            className='uppercase text-3xl text-center tracking-wider leading-relaxed text-gray-600 md:hidden'
            key={id}
         >
            {skill}
         </li>
      ))
   }

   return (
      <section className='flex flex-col'>
         <h1 className='text-transform: capitalize font-shadows-into-light text-8xl text-center my-5 text-blue md:animate-fade-in'>
            skills
         </h1>
         <ul className='flex flex-col justify-center space-y-5 last:mb-5'>
            {skillsMapper()}
         </ul>
      </section>
   )
}

export default Skills
