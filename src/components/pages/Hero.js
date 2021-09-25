import Image from '../../assets/helloWorldLogo.png'
import '../styles/Hero.css'

const Hero = () => {
   return (
      <div className='hero'>
         <div className='hero__content'>
            <img src={Image} alt='Logo' className='hero--logo' />
         </div>
      </div>
   )
}

export default Hero
