import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux'
import ToolBar from './ToolBar.js';
import Home from './Home.js';
import featureDescriptors from './features/feature-descriptors.js';
import store from './redux/store.js'
import { navigateToFeature } from './redux/actions.js';

function mapDispatchToProps(dispatch) {
  return { 
    navigate: fd => dispatch(navigateToFeature(fd)),
  };
};

function connectFeatureComponent(component, fd) {
  const FeatureComponent = connect(null, mapDispatchToProps)(component);
  return () => (<FeatureComponent fd={fd} />)
}

const WrappedToolBar = connect(state => ({fd: state.navigateToFeature.featureDescriptor}))(ToolBar);

function IndexRouting() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <WrappedToolBar />
        <Switch>
          <Route exact path='/' 
                 render={(props) => <Home history={props.history} onRender={() => store.dispatch(navigateToFeature(null))} />} />
          {featureDescriptors.map(fd => (
            <Route exact path={fd.path} 
                   component={connectFeatureComponent(fd.component, fd)}
            />))}
          <Redirect from="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<IndexRouting />, document.getElementById('root'));
