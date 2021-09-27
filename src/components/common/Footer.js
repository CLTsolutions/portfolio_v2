import { useLocation } from 'react-router'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
   const date = new Date().getFullYear()
   const location = useLocation()

   return (
      <>
         {location.pathname !== '/home' && (
            <footer className='h-40 flex flex-col justify-center'>
               <ul className='flex justify-center mb-6'>
                  <li className='hover:text-white'>
                     <FaGithubSquare
                        style={{ opacity: '65%', cursor: 'pointer' }}
                        size={40}
                     />
                  </li>
                  <li className='hover:text-white'>
                     <FaLinkedin
                        style={{ opacity: '65%', cursor: 'pointer' }}
                        size={40}
                     />
                  </li>
               </ul>
               <Link to='/resume'>
                  <p className='text-2xl text-gray-600 uppercase tracking-wider hover:underline'>
                     &copy; Chelsey Tschida {date}
                  </p>
               </Link>
            </footer>
         )}
      </>
   )
}

export default Footer
