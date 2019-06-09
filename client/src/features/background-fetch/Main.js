import React from 'react';
import Icon from '@material-ui/icons/CompareArrows';

class Main extends React.Component {
  componentDidMount() {
    this.props.navigate(this.props.fd);
  }

  render() {
    return <h1> Background Fetch </h1>;
  }
}

Main.Icon = Icon;

export default Main;