import { SkillsList } from '../data';
import { Typewriter } from '../core';

const Skills = () => {
  const skillsMapper = () => SkillsList?.map((skill) => (
    <li
      className="uppercase text-3xl text-center tracking-wider leading-relaxed text-gray-600 md:hidden"
      key={ skill.id }
    >
      {skill}
    </li>
  ));

  return (
    <section className="flex flex-col">
      <h1 className="h-20 capitalize font-lucky-typewriter text-7xl 2xl:text-8xl text-center my-5 text-blue">
        <Typewriter textToType="skills" />
      </h1>
      <ul className="flex flex-col justify-center space-y-5 last:mb-5">
        {skillsMapper()}
      </ul>
    </section>
  );
};

export default Skills;
