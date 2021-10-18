import { ChelseyPlane } from '../../../assets/images'

const ShortBio = () => {
   return (
      <article className='flex flex-col lg:flex-row md:justify-center md:items-center my-10 lg:my-4 space-y-10'>
         <img
            className='bg-white mx-5 md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4 p-5 rounded-xl shadow-lg border-double border-4 2xl:border-8 border-gray-400'
            src={ChelseyPlane}
            alt='About Me Chelsey in a Plane'
         />
         <p className='p-7 2xl:p-48 md:w-3/5 md:px-20 text-3xl text-justify leading-relaxed 2xl:leading-loose'>
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
