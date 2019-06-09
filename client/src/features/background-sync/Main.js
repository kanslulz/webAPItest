import React from 'react';
import Icon from '@material-ui/icons/Cached';

class Main extends React.Component {
  componentDidMount() {
    this.props.navigate(this.props.fd);
  }

  render() {
    return <h1> Background Sync </h1>;
  }
}

Main.Icon = Icon;

export default Main;