import Flippy, { FrontSide, BackSide } from 'react-flippy'

const FlipCards = ({ skillMapper, buttonStyle, work }) => {
   return (
      <Flippy
         flipOnHover={true}
         flipOnClick={true}
         flipDirection='horizontal'
         style={{ width: '40rem', height: '40rem', margin: '2rem' }}
      >
         <FrontSide
            style={{ backgroundColor: '#CBC0D3' }}
            className='overflow-hidden'
         >
            <div className='flex flex-col items-center space-y-4 text-gray-500 overflow-hidden'>
               <div className='flex justify-between xl:justify-center items-center w-full'>
                  <h2 className='text-4xl font-lucky-typewriter'>
                     {work.title}
                  </h2>
                  <p className='block xl:hidden text-gray-700 text-2xl'>
                     Tap for more...
                  </p>
               </div>
               <img
                  src={work.image}
                  alt={`Thumbnail of ${work.title}`}
                  className='h-350 w-350 object-cover pb-4 shadow-md'
               />
            </div>
         </FrontSide>
         <BackSide style={{ backgroundColor: '#CBC0D3', padding: '20px' }}>
            <div className='h-full flex flex-col justify-between space-y-3 bg-concrete bg-cream py-4 px-2 md:p-6 shadow-sm md:shadow-md'>
               <div className='flex justify-center sm:pt-10 space-x-4'>
                  <a
                     href={work.deployedUrl}
                     target='_blank'
                     className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
                  >
                     <button className={buttonStyle}>Go To Project</button>
                  </a>
                  <a
                     href={work.github}
                     target='_blank'
                     className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
                  >
                     <button className={buttonStyle}>View Raw Code</button>
                  </a>
               </div>
               <div className='flex justify-between items-center'>
                  <h3 className='font-shadows-into-light md:font-southgirl font-semibold md:font-normal text-4xl md:text-10xl text-gray-800'>
                     Tech Stack:
                  </h3>
                  <ul className='flex flex-wrap justify-center space-x-3'>
                     {skillMapper(work)}
                  </ul>
               </div>
               <div>
                  <p className='text-justify text-2xl text-gray-800'>
                     {work.description}
                  </p>
               </div>
            </div>
         </BackSide>
      </Flippy>
   )
}

export default FlipCards
