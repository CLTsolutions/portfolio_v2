import { useEffect, useState } from 'react'

const Typewriter = ({ textToType, delay, loop }) => {
   const [text, setText] = useState('')
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      if (currentIndex < textToType.length) {
         setTimeout(() => {
            setText(text + textToType[currentIndex])
            setCurrentIndex(currentIndex + 1)
         }, 200)
      } else if (loop) {
         // reset the text and the index
         setText('')
         setCurrentIndex(0)
      }
   }, [currentIndex])

   return <div>{text}</div>
}

export default Typewriter
