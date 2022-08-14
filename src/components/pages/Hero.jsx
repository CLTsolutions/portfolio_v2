import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

import { HelloWorldLogo } from '../../assets/images';
import '../styles/Hero.css';
import { AboutHero } from './about';

const Hero = () => {
  const { path } = useRouteMatch();

  const buttonTest = () => {
    // console.log('button is firing');
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <img
          src={ HelloWorldLogo }
          alt="Logo"
          className="hero--logo animate-hero-fade-in"
        />
        <button
          type="button"
          className="inline-flex items-center bg-blue py-4 px-4 border border-blue hover:border-transparent rounded-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-blush focus:ring-opacity-50 md:text-2xl text-white uppercase tracking-wider hover:bg-white active:bg-lavender-dark active:lavender-dark hover:text-gray-500 active:text-white shadow-lg animation-delay-700 animate-btn-slide-up"
          onClick={ buttonTest }
        >
          About me
          {' '}
          <FiChevronDown className="ml-2" />
        </button>
      </div>

      <Switch>
        <Route exact path={ `${path}/about` }>
          <AboutHero />
        </Route>
      </Switch>
    </section>
  );
};

export default Hero;
