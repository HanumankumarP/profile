import React from 'react';
import './App.css';
import logo from './profile.jpeg';
import facebook from './icons/facebook.svg';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';

import Skills from './components/Skills';
import {BrowserRouter,Route,Link} from 'react-router-dom';

function App() {
  return (
    <section>
      <BrowserRouter>
     
      
      <div className="parent">
        <header className="header parent1">
        <Link to="/"><i className="fas fa-home"></i></Link>
        <Link to="/summary"><i className="fas fa-calendar-week"></i></Link>
        <Link to="/education"><i className="fas fa-user-graduate"></i></Link>
        <Link to="/experience"><i className="fas fa-user-tie"></i></Link>
        <Link to="/skill"> <i class="fas fa-laptop-code"></i> </Link>
        </header>
      </div> 
    <Route exact path="/"> <Home> </Home></Route>
    <Route exact path="/summary"> <Summary> </Summary></Route>
    <Route exact path="/education"> <Education></Education></Route>
    <Route exact path="/skill"> <Skills> </Skills> </Route>
    <Route exact path="/experience"> <Experience></Experience> </Route>

    </BrowserRouter>
    </section>
  );
}

let Home=()=>{
  return(
    <div className="parent">
      <div className="child">
        <img src={logo} alt="profile" className="profileImage"></img>
        <h2> HANUMAN KUMAR P </h2>
        <h3 className="role"> Multi Skill Trainer</h3>
        <hr></hr>
        <a href="mailto:hanumankumar035@gmail.com" className="link"> hanumankumar035@gmail.com </a>
        <a href="tel:+8374614212" className="link"> +91 8374614212 </a>
        <a href="https://www.facebook.com/hanuman.kumar.5"><img src={facebook} className="socialIcon" alt="facebook"></img></a>
        <a href="https://github.com/hanumankumarp"><img src={github} className="socialIcon" alt="github"></img> </a>
       <a href="https://www.linkedin.com/in/hanumankumar/"> <img src={linkedin} className="socialIcon" alt="linkedin"></img></a>
        <a href="https://twitter.com/darlingparents"><img src={twitter} className="socialIcon" alt="twitter"></img></a>
      </div>
    </div>
  )
}

export default App;
