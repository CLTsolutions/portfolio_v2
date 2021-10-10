import { useRef } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { Works } from '../data'

const Projects = () => {
   const ref = useRef()
   const buttonStyle =
      'bg-transparent hover:bg-lavender-dark text-blue text-font-semibold hover:text-white transition ease-out duration-300 py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'

   return (
      <main>
         <h1 className='text-transform: capitalize font-shadows-into-light text-8xl text-center mt-8 text-blue-light md:animate-fade-in'>
            Projects
         </h1>
         <div className='flex justify-center flex-wrap md:p-10'>
            {Works.map(work => (
               // <li key={work.id}>
               //    <img src={work.image} />
               //    <h1>{work.title}</h1>
               //    <p>{work.description}</p>
               // </li>
               <Flippy
                  flipOnHover={true}
                  flipOnClick={true}
                  flipDirection='horizontal'
                  style={{ width: '40rem', height: '40rem', margin: '2rem' }}
                  key={work.id}
               >
                  <FrontSide
                     style={{ backgroundColor: '#CBC0D3' }}
                     className='overflow-hidden'
                  >
                     <div className='flex flex-col items-center space-y-4 text-gray-700 overflow-hidden'>
                        <h2 className='text-4xl font-shadows-into-light'>
                           {work.title}
                        </h2>
                        <img
                           src={work.image}
                           alt={`Thumbnail of ${work.title}`}
                           // className='flex flex-shrink-0 object-cover h-full w-full mb-2'
                           className='h-350 w-350 object-cover pb-4'
                        />
                     </div>
                  </FrontSide>
                  <BackSide
                     style={{ backgroundColor: '#CBC0D3', padding: '20px' }}
                  >
                     <div className='h-full flex flex-col justify-between'>
                        <div className='flex flex-wrap justify-center pt-10 space-x-4'>
                           <a href={work.deployedUrl} target='_blank'>
                              <button className={buttonStyle}>
                                 Go To Project
                              </button>
                           </a>
                           <a href={work.github} target='_blank'>
                              <button className={buttonStyle}>
                                 View Raw Code
                              </button>
                           </a>
                        </div>
                        <div className='flex justify-between items-center'>
                           <h3 className='font-semibold font-shadows-into-light text-4xl md:text-5xl text-gray-800'>
                              Tech Stack:
                           </h3>
                           <ul className='flex flex-wrap justify-center space-x-6'>
                              {work.stack.map((skill, id) => (
                                 <li
                                    key={id}
                                    className='text-2xl md:text-3xl text-gray-800'
                                 >
                                    {skill}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div>
                           <p className='text-justify text-3xl text-gray-800'>
                              {work.description}
                           </p>
                        </div>
                     </div>
                  </BackSide>
               </Flippy>
            ))}
         </div>
      </main>
   )
}

export default Projects
