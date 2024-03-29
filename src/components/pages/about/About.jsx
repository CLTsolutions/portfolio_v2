import { useState } from 'react';
// import { useRouteMatch } from 'react-router'
import { Typewriter } from '../../core';
import { ShortBio, LongBio } from './bios';

const About = () => {
  const [shortBio, setShortBio] = useState(true);
  // const { url } = useRouteMatch()
  const buttonStyle = 'bg-transparent hover:bg-lavender-dark text-blue font-semibold hover:text-white transition ease-out duration-300 py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50 shadow-md';
  const activeButtonStyle = 'bg-lavender-dark active:bg-lavender text-white active:text-lavender-dark font-semibold transition ease-out duration-300 py-2 px-4 border border-lavender-dark rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50 shadow-md';

  return (
    <section className="bg-concrete bg-white flex flex-col justify-center items-center">
      <h1 className="h-20 capitalize font-lucky-typewriter text-7xl 2xl:text-8xl text-center mt-8 text-blush-dark">
        <Typewriter textToType="about me" />
      </h1>
      <ul className="space-x-5 pt-16">
        <button
          type="button"
          className={ shortBio ? activeButtonStyle : buttonStyle }
          onClick={ () => setShortBio(true) }
        >
          Short Bio
        </button>
        <button
          type="button"
          className={ !shortBio ? activeButtonStyle : buttonStyle }
          onClick={ () => setShortBio(false) }
        >
          Long Bio
        </button>
      </ul>
      {shortBio ? <ShortBio /> : <LongBio />}
    </section>
  );
};

export default About;
