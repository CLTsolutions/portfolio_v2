import { useEffect, useState } from 'react'

const Typewriter = ({ textToType, delay, loop }) => {
   const [text, setText] = useState('')
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      let timeout
      if (currentIndex < textToType.length) {
         timeout = setTimeout(() => {
            setText(text + textToType[currentIndex])
            setCurrentIndex(currentIndex + 1)
         }, 200)
      } else if (loop) {
         // reset the text and the index
         setText('')
         setCurrentIndex(0)
      }
      return () => {
         console.info('clear timeout')
         timeout && clearTimeout(timeout)
      }
   }, [currentIndex])

   return <div>{text}</div>
}

export default Typewriter
