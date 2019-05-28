import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ToolBar from './ToolBar.js';
import Home from './Home.js';
import featureDescriptors from './features/feature-descriptors.js';

class IndexRouting extends React.Component {
  render() {
    return (
      <Router>
        <ToolBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {featureDescriptors.map(
            fd => <Route path={fd.path} component={fd.component} />
          )}
          <Route render= {_ => <h1> 404 </h1>} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<IndexRouting />, document.getElementById('root'))
