import { chelseyParis } from '../../assets'

const LongBio = () => {
   return (
      <article className='flex justify-center items-center'>
         <p className='w-1/2 px-20 text-3xl text-justify flex-wrap'>
            Hey there! I'm Chelsey! For the past decade, I have been a flight
            attendant. It has been a unique and rewarding experience as I have
            been able to travel all over the world, live in several different
            cities and states, and interact with people from all walks of life.
            After the Coronavirus pandemic left me grounded for most of 2020, I
            found myself with an amazing opportunity to pursue a career in web
            development, an interest I have had for the past several years.
            <br />
            <br />
            During my down time, I enrolled in{' '}
            <a
               href='https://elevenfifty.org/'
               target='blank'
               className='text-pink-700'
            >
               Eleven Fifty's
            </a>{' '}
            web development program. I found the six months I spent in the
            program quite fulfilling and exciting. The course took me on a
            journey from basic HTML/CSS to building full stack PERN applications
            (check them out in my project section below!). I fell in love with
            programming, and after I graduated, I jumped at the chance to become
            a learning assistant with Eleven Fifty so I could give back to the
            program that brought me so much joy.
            <br />
            <br />I cannot wait to see what this next adventure brings! Find out
            more on
            <a
               href='https://www.linkedin.com/in/cltschida'
               target='blank'
               className='text-pink-700'
            >
               {' '}
               LinkedIn.
            </a>
         </p>
         <img
            className='w-1/4 h-1/4 rounded'
            src={chelseyParis}
            alt='About Me (Chelsey in a Plane'
         />
      </article>
   )
}

export default LongBio
