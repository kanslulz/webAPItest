import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ToolBar from './ToolBar.js';
import Home from './Home.js';


const routing = (
  <Router>
    <ToolBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render= {_ => <h1> 404 </h1>} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
