import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Single from './components/Single';

import ReactVivus from 'react-vivus';
import top from './images/topography-jde-white.svg';
function App() {
  return (

    <Router>
    <ReactVivus
    id="foo"
    option={{
      file: top,
      animTimingFunction: 'EASE',
      type: 'sync',
      onReady: console.log,
      start: "autostart",
    
    }}
    
    callback={console.log}
  />
    <div className="wrapper">
    <Header />
    <Nav />
    <Route path="/" exact><Home /></Route>
    <Route path="/project"><Single /></Route>
    <Footer />
    </div>
    </Router>
    
  );
}

export default App;
