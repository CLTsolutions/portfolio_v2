import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
   const date = new Date().getFullYear()

   return (
      <footer>
         <ul className='flex justify-center'>
            <li>
               <FaGithubSquare size={32} />
            </li>
            <li>
               <FaLinkedin size={32} />
            </li>
         </ul>
         <p className='text-2xl'>&copy; Chelsey Tschida {date}</p>
      </footer>
   )
}

export default Footer
