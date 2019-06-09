import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import ToolBar from './ToolBar.js';
import Home from './Home.js';
import featureDescriptors from './features/feature-descriptors.js';

function IndexRouting() {
  return (
    <BrowserRouter>
      <ToolBar />
      <Switch>
        <Route exact path='/' component={Home} />
        {featureDescriptors.map(fd => (<Route exact path={fd.path} component={fd.component} />))}
        <Redirect from="/*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<IndexRouting />, document.getElementById('root'));
