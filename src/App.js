import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import {
   About,
   Contact,
   Error,
   Hero,
   Projects,
   Resume,
   Skills,
} from './components/pages'
import { Navbar, Footer, SideNav } from './components/common'

function App() {
   return (
      <main className='App'>
         {/* <Hero /> */}
         <Navbar />
         {/* <SideNav /> */}
         <Switch>
            <Route exact path='/'>
               <Redirect to='/home' />
            </Route>
            {/* <Route path='/home/#about' component={About} /> */}
            <Route path='/home' component={Hero} />
            <Route path='/about' component={About} />
            <Route path='/skills' component={Skills} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
         </Switch>
         <Footer />
      </main>
   )
}

export default App
