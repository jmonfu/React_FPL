import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import DashboardComponent from './components/Dashboard';
import TeamSummaryComponent from './components/TeamSummary';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={DashboardComponent} />
          <Route path='/team' component={TeamSummaryComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
