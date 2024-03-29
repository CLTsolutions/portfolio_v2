import { Link } from 'react-router-dom';

const HeroAbout = () => (
  <section>
    <h1>I&apos;m thrilled you&apos;ve stopped by!</h1>
    <p>
      Learn more about
      {' '}
      <Link to="/about">me</Link>
    </p>
    <p>
      Check out my
      {' '}
      <Link to="/projects">projects</Link>
    </p>
  </section>
);

export default HeroAbout;
