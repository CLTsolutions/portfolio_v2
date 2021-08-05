import './App.css'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <h1 className='text-8xl'>Chelsey's Portfolio</h1>
      </header> */}
      {/* <Hero /> */}
      <Navbar />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Resume /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Switch>
        <Route exact path='/' component={Hero} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
