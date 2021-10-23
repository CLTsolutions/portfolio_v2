import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Typewriter = ({ textToType }) => {
   const [text, setText] = useState('')
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      let timeout
      if (currentIndex < textToType.length) {
         timeout = setTimeout(() => {
            setText(prevText => prevText + textToType[currentIndex])
            setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
         }, 200)
         // } else if (loop) {
         //    // reset the text and the index
         //    setText('')
         //    setCurrentIndex(0)
      }
      return () => {
         timeout && clearTimeout(timeout)
      }
   }, [currentIndex, textToType])

   return <div>{text}</div>
}

Typewriter.propTypes = {
   textToType: PropTypes.string.isRequired,
   loop: PropTypes.bool,
   delay: PropTypes.number,
}

Typewriter.defaultProps = {
   loop: false,
   delay: 0,
}

export default Typewriter
