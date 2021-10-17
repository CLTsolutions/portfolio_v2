import { Link } from 'react-router-dom'
import { AdventureMap } from '../../assets/images'

const Error = () => {
   return (
      <section className='flex flex-col xl:flex-row-reverse xl:justify-evenly 2xl:items-center space-y-14 md:space-y-0'>
         <div className='flex flex-col justify-center items-center space-y-20 2xl:w-2/5'>
            <h1 className='font-southgirl mt-6 text-9xl md:text-14xl'>
               Oopsie Daisy...
            </h1>
            <p className='font-bold text-7xl md:text-9xl'>404</p>
            <p className='text-2xl md:text-3xl'>
               Let's go back{' '}
               <Link
                  to='/'
                  className='text-rose-400 rounded focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
               >
                  home
               </Link>
               .
            </p>
         </div>
         <div className='2xl:w-full 2xl:h-full'>
            <img src={AdventureMap} alt={AdventureMap} />
         </div>
      </section>
   )
}

export default Error
