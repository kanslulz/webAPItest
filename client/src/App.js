import React from 'react';
import ToolBar from './ToolBar.js';

function App(props) {
  return (
    <div className="App">
     <ToolBar />
      <h1> {props.text || 'Default'} </h1>
    </div>
  );
}

export default App;
