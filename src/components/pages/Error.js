import { Link } from 'react-router-dom'
import { AdventureMap } from '../../assets'

const Error = () => {
   return (
      <section className='flex flex-col xl:flex-row-reverse xl:justify-evenly 2xl:justify-between space-y-14'>
         <div className='flex flex-col justify-center items-center space-y-20 2xl:w-2/5'>
            <h1 className='mt-6 text-5xl md:text-7xl'>Oopsie Daisy...</h1>
            <p className='font-bold text-7xl md:text-9xl'>404</p>
            <p className='text-2xl md:text-3xl'>
               Let's go back{' '}
               <Link to='/' className='text-rose-400'>
                  home
               </Link>
               .
            </p>
         </div>
         <div className=''>
            <img src={AdventureMap} alt={AdventureMap} />
         </div>
      </section>
   )
}

export default Error
