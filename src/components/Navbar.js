import { Link } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='absolute h-16 w-100 bg-transparent uppercase tracking-wider text-gray-700'>
      <ul className='flex justify-end self-center space-x-5 mr-4'>
        <li>
          {/* home is hero component */}
          <Link to='/home' /> Home
        </li>
        <li>
          <Link to='/about' /> About
        </li>
        <li>
          <Link to='/skills' /> Skills
        </li>
        <li>
          <Link to='/resume' /> Resume
        </li>
        <li>
          <Link to='/projects' /> Projects
        </li>
        <li>
          <Link to='/contact' /> Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
