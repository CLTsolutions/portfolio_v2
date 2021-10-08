import { HelloWorldLogo } from '../../assets'
import '../styles/Hero.css'
import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
   return (
      <div className='hero'>
         <div className='hero__content'>
            <img src={HelloWorldLogo} alt='Logo' className='hero--logo' />
            <button className='bg-transparent text-2xl text-white uppercase tracking-wider hover:bg-white active:bg-blue hover:text-gray-500 active:text-white py-2 px-4 border border-pink-300 hover:border-transparent rounded-lg'>
               About me <FiChevronDown />
            </button>
         </div>
      </div>
   )
}

export default Hero
