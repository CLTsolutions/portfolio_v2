import { Link } from 'react-router-dom'
import { ChelseyParis } from '../../../assets/images'

const LongBio = () => {
   return (
      <article className='flex flex-col lg:flex-row md:justify-center md:items-center my-10 lg:my-4 space-y-10'>
         <img
            className='bg-white mx-5 md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4 p-5 lg:hidden rounded-xl shadow-lg border-double border-4 2xl:border-8 border-gray-400'
            src={ChelseyParis}
            alt='About Me Chelsey in Paris'
         />
         <p className='p-7 2xl:p-48 md:w-3/5 md:px-20 text-3xl text-justify leading-relaxed 2xl:leading-loose'>
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
               className='text-blue focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
            >
               Eleven Fifty's
            </a>{' '}
            web development program. I found the six months I spent in the
            program quite fulfilling and exciting. The course took me on a
            journey from basic HTML/CSS to building full PERN stack applications
            (check them out in my{' '}
            <Link
               to='/projects'
               className='text-blue focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
            >
               project
            </Link>{' '}
            section!). I fell in love with programming, and after I graduated, I
            jumped at the chance to become a learning assistant with Eleven
            Fifty so I could give back to the program that brought me so much
            joy.
            <br />
            <br />I cannot wait to see what this next adventure brings! Find out
            more on
            <a
               href='https://www.linkedin.com/in/cltschida'
               target='blank'
               className='text-blue focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
            >
               {' '}
               LinkedIn
            </a>
            , and make sure to check out my{' '}
            <Link
               to='/skills'
               className='text-blue focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50'
            >
               skills!
            </Link>
         </p>
         <img
            className='md:w-1/4 md:h-1/4 p-5 hidden lg:block rounded-xl shadow-lg border-double border-4 2xl:border-8 border-gray-400'
            src={ChelseyParis}
            alt='About Me Chelsey in Paris'
         />
      </article>
   )
}

export default LongBio
