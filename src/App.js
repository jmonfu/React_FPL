import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import DashboardComponent from './components/Dashboard';
import TeamDetails from './components/Teams/TeamDetails';
import PlayerList from './components/Players/PlayerList';
import PlayerDetails from './components/Players/PlayerDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={DashboardComponent} />
          <Route path='/players/:id' component={PlayerList} />
          <Route path='/players' component={PlayerList} />
          <Route path='/playerDetails/:id' component={PlayerDetails} />
          <Route path='/teamDetails/:id' component={TeamDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
