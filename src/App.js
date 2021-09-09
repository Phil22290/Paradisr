import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Pricing from './components/pages/Pricing';
import Story from './components/pages/Story';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component=
        {Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/story' component={Story} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
