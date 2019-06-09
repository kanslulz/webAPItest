import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import ToolBar from './ToolBar.js';
import Home from './Home.js';
import featureDescriptors from './features/feature-descriptors.js';
import store from './redux/store.js'

function IndexRouting() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToolBar />
        <Switch>
          <Route exact path='/' component={Home} />
          {featureDescriptors.map(fd => (<Route exact path={fd.path} component={fd.component} />))}
          <Redirect from="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<IndexRouting />, document.getElementById('root'));
