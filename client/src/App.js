import React from 'react';

function App(props) {
  return (
    <div className="App">
      <h1> {props.text || 'Default'} </h1>
    </div>
  );
}

export default App;
