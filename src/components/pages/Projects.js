import { useRef } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { projects } from '../data'

const Projects = () => {
   const ref = useRef()

   return (
      <div>
         <h1>Projects live here!</h1>
         <div className='flex flex-wrap'>
            {projects.map(project => (
               // <li key={project.id}>
               //    <img src={project.image} />
               //    <h1>{project.title}</h1>
               //    <p>{project.description}</p>
               // </li>
               <Flippy
                  flipOnHover={true}
                  flipOnClick={true}
                  flipDirection='horizontal'
                  style={{ width: '40rem', height: '40rem', margin: '40px' }}
               >
                  <FrontSide style={{ backgroundColor: '#E9C3C9' }}>
                     <img src={project.image} alt={project.title} />
                  </FrontSide>
                  <BackSide style={{ backgroundColor: '#E9C3C9' }}>
                     <img src={project.image} alt={project.title} />
                  </BackSide>
               </Flippy>
            ))}
         </div>
      </div>
   )
}

export default Projects
