import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Callscreen from './pages/Callscreen';
import Reports from './pages/Reports';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Callscreen} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
