import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <FaGithubSquare />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className='text-2xl'>&copy; Chelsey Tschida 2021</p>
    </footer>
  )
}

export default Footer
