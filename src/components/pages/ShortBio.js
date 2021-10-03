import { ChelseyPlane } from '../../assets'

const ShortBio = () => {
   return (
      <article className='md:flex md:justify-center md:items-center my-4'>
         <img
            className='md:w-1/4 md:h-1/4 rounded-3xl p-5'
            src={ChelseyPlane}
            alt='About Me Chelsey in a Plane'
         />
         <p className='md:w-1/2 md:px-20 text-3xl p-5 text-justify leading-relaxed'>
            Hi, I'm Chelsey! I'm a flight attendant turned web developer.
            <br />
            <br />
            It thrills me to experiment with new technologies, build small
            projects, or tinker with vanilla Javascript. When I'm not at my
            computer, you can find me reading a book, listening to podcasts, or
            traveling.
         </p>
      </article>
   )
}

export default ShortBio
