// import { useRef } from 'react'
import { Works } from '../data';
import { FlipCards, Typewriter } from '../core';

const Projects = () => {
  const buttonStyle = 'bg-transparent hover:bg-lavender-dark text-blue text-font-semibold hover:text-white transition ease-out duration-300 py-2 px-4 border border-blue hover:border-transparent rounded text-2xl focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-opacity-50 shadow-md';

  const skillMapper = (work) => work.stack.map((skill) => (
    <li key={ skill.id } className="text-xl md:text-2xl lg:text-3xl text-gray-800">
      {skill}
    </li>
  ));

  const cardsMapper = () => Works.map((work) => (
    <FlipCards
      skillMapper={ skillMapper }
      buttonStyle={ buttonStyle }
      work={ work }
      key={ work.id }
    />
  ));

  return (
    <main>
      <h1 className="h-20 capitalize font-lucky-typewriter text-7xl 2xl:text-8xl text-center mt-8 text-blue-light md:animate-fade-in">
        <Typewriter textToType="projects" />
      </h1>
      <div className="flex flex-wrap justify-center w-full md:p-10 xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:justify-items-center xl:gap-y-16 animate-slide-up">
        {cardsMapper()}
      </div>
    </main>
  );
};

export default Projects;
