import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ToolBar from './ToolBar.js';
import Home from './Home.js';
import BgfMain from './features/background-fetch/Main.js';
import BsMain from './features/background-sync/Main.js';


const routing = (
  <Router>
    <ToolBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/backgroundfetch" component={BgfMain} />
      <Route exact path="/backgroundsync" component={BsMain} />
      <Route render= {_ => <h1> 404 </h1>} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
