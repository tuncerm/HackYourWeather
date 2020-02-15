import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Forecast from './Forecast';
import Home from './Home';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:cityID">
            <Forecast/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;