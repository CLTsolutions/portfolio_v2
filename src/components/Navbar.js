import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='absolute h-16 w-100 bg-transparent uppercase tracking-wider text-gray-700'>
      {/* <FontAwesomeIcon icon={faBars} /> */}
      <ul className='flex justify-end self-center space-x-5 mr-4'>
        <li>
          {/* home is hero component */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
