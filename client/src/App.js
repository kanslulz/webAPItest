import React from 'react';
import Home from './Home.js';
import ToolBar from './ToolBar.js';

function App(props) {
  return (
    <div className="App">
      <ToolBar />
      <Home />
      <h1> {props.text || 'Default'} </h1>
    </div>
  );
}

export default App;
