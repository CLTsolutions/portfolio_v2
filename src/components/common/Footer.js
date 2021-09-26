import { useLocation } from 'react-router'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
   const date = new Date().getFullYear()
   const location = useLocation()

   return (
      <>
         {location.pathname === '/home' ? null : (
            <footer className='h-40 flex flex-col justify-center'>
               <ul className='flex justify-center mb-6'>
                  <li>
                     <FaGithubSquare size={40} />
                  </li>
                  <li>
                     <FaLinkedin size={40} />
                  </li>
               </ul>
               <p className='text-2xl text-gray-600 uppercase tracking-wider'>
                  &copy; Chelsey Tschida {date}
               </p>
            </footer>
         )}
      </>
   )
}

export default Footer
