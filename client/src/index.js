import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/p1" render={ _ => <App text={"p1"} />} />
      <Route render={ _ => <App text={"404"} />} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
