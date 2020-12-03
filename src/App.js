import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import { ProjectState } from './projectState';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import Nav from './components/Nav';
import WorkDetail from './pages/WorkDetail';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const [projects] = useState(ProjectState);

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutMe />
          </Route>
          <Route path='/work' exact>
            <MyWork projects={projects} />
          </Route>
          <Route path='/work/:id'>
            <WorkDetail projects={projects} />
          </Route>
          <Route path='/contact'>
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
