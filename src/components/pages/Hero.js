import { HelloWorldLogo } from '../../assets'
import '../styles/Hero.css'
import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
   const buttonTest = () => {
      console.log('button is firing')
   }

   return (
      <section className='hero'>
         <div className='hero__content'>
            <img src={HelloWorldLogo} alt='Logo' className='hero--logo' />
            <button
               className='bg-transparent py-2 px-4 border border-pink-300 hover:border-transparent rounded-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-blush-light focus:ring-opacity-50 md:text-2xl text-white uppercase tracking-wider hover:bg-white active:bg-blue active:border-none hover:text-gray-500 active:text-white'
               onClick={buttonTest}
            >
               About me <FiChevronDown />
            </button>
         </div>
      </section>
   )
}

export default Hero
