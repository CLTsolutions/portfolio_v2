import Image from '../assets/helloWorldLogo.png'
import './styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <img src={Image} alt='Logo' className='hero-logo' />
        </div>
      </div>
    </div>
  )
}

export default Hero
