import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import {
  Contact,
  Error,
  Hero,
  Projects,
  Resume,
  Skills,
} from './components/pages';
import { About } from './components/pages/about';
import { Navbar, Footer } from './components/common';

// not fat arrow because not using hooks in app component
const App = () => {
  const location = useLocation();
  const isNotHomePath = location.pathname !== '/home';

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={ Hero } />
        <Route path="/about" component={ About } />
        <Route path="/skills" component={ Skills } />
        <Route path="/resume" component={ Resume } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Route component={ Error } />
      </Switch>
      { isNotHomePath ? <Footer /> : null }
    </div>
  );
};

export default App;
