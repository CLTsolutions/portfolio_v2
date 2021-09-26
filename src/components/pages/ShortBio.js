import { chelseyPlane } from '../../assets'

const ShortBio = () => {
   return (
      <article className='flex justify-center items-center'>
         <img
            className='w-1/4 h-1/4 rounded'
            src={chelseyPlane}
            alt='About Me (Chelsey in a Plane'
         />
         <p className='w-1/2 px-20 text-3xl'>
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
