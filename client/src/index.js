import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import ToolBar from './ToolBar.js';
import Home from './Home.js';
import featureDescriptors from './features/feature-descriptors.js';

const history = createBrowserHistory();

class IndexRouting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {path: history.location.pathname};
  }

  componentDidMount() {
    const unlisten = history.listen(location => this.setState({path: location.pathname}));
    this.setState({unlisten});
  }

  componentWillUnmount() {
    this.state.unlisten && this.state.unlisten();
  }

  render() {
    let IndexComponent = () => (<h1> 404 </h1>);
    if (this.state.path === '/') {
      IndexComponent = Home;
    } else {
      const features = featureDescriptors.filter(fd => fd.path === this.state.path);
      if (features.length) IndexComponent = features[0].component;
    }

    return (
      <>
        <ToolBar history={history}/>
        <IndexComponent history={history}/>
      </>
    );
  }
}

ReactDOM.render(<IndexRouting />, document.getElementById('root'));
