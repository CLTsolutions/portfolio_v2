import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="h-40 flex flex-col justify-center bg-blush">
      <ul className="flex justify-center mb-6">
        <li className="hover:text-white transition ease-out duration-150">
          <a
            href="https://github.com/CLTsolutions"
            target="blank"
            className="focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50"
          >
            <FaGithubSquare
              style={ { opacity: '65%', cursor: 'pointer' } }
              size={ 40 }
            />
          </a>
        </li>
        <li className="hover:text-white transition ease-out duration-150">
          <a
            href="https://www.linkedin.com/in/cltschida/"
            target="blank"
            className="focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50"
          >
            <FaLinkedin
              style={ { opacity: '65%', cursor: 'pointer' } }
              size={ 40 }
            />
          </a>
        </li>
      </ul>

      <p className="text-center text-2xl text-gray-600 uppercase tracking-wider hover:underline transition ease-out duration-150">
        <Link
          to="/resume"
          className="focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50"
        >
          &copy; Chelsey Tschida
          {' '}
          {date}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
