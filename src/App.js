import './App.css'
import { Route, Switch } from 'react-router-dom'
import {
   About,
   Contact,
   Hero,
   Projects,
   Resume,
   Skills,
} from './components/pages'
import { Navbar, Footer } from './components/common'

function App() {
   return (
      <div className='App'>
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
