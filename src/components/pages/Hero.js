import Image from '../../assets/helloWorldLogo.png'
import '../styles/Hero.css'
import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
   return (
      <div className='hero'>
         <div className='hero__content'>
            <img src={Image} alt='Logo' className='hero--logo' />
            <button className='bg-transparent hover:bg-white text-white font-semibold hover:text-pink-500 py-2 px-4 border border-pink-300 hover:border-transparent rounded'>
               About me <FiChevronDown />
            </button>
         </div>
      </div>
   )
}

export default Hero
