import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <p>{10*5}</p>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          RAJPAAL React
        </a>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
