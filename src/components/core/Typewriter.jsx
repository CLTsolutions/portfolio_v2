import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ textToType, loop, delay }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let timeout;

    if (reverse || currentIndex < textToType.length) {
      timeout = setTimeout(() => {
        if (loop) {
          setReverse(true);
        }

        setText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
      }, delay);
    }

    return () => timeout && clearTimeout(timeout);
  }, [currentIndex, textToType]);

  return <h1>{ text }</h1>;
};

Typewriter.propTypes = {
  textToType: PropTypes.string.isRequired,
  delay: PropTypes.number,
  loop: PropTypes.bool,
};

Typewriter.defaultProps = {
  loop: false,
  delay: 200,
};

export default Typewriter;
