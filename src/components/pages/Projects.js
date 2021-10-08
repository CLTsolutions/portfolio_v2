import { projects } from '../data'

const Projects = () => {
   return (
      <div>
         <h1>Projects live here!</h1>
         {projects.map(project => (
            <>
               <img src={project.image} />
               <h1>{project.title}</h1>
               <p>{project.description}</p>
            </>
         ))}
      </div>
   )
}

export default Projects
