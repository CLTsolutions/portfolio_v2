import { ChelseyPlane } from '../../../assets/images'

const ShortBio = () => {
   return (
      <article className='p-6 mb-10 md:mb-0 flex flex-col lg:flex-row lg:justify-center md:items-center lg:my-4'>
         <img
            className='p-4 my-12 bg-white md:w-1/2 lg:w-1/4 md:h-1/4 rounded-xl shadow-lg border-double border-4 2xl:border-8 border-gray-400'
            src={ChelseyPlane}
            alt='About Me Chelsey in a Plane'
         />
         <p className='p-2 md:p-0 lg:px-32 2xl:p-40 md:w-1/2 lg:w-1/2 text-3xl 2xl:text-5xl text-justify leading-relaxed 2xl:leading-loose filter drop-shadow-lg'>
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
