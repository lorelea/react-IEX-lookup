import React from 'react';
import logo from './logo.svg';
import './App.scss';
import IEXInfoLookup from './IEXInfoLookup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <div className="App-component">
          <IEXInfoLookup />
        </div>
      </main>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://iexcloud.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data provided by IEX Cloud
        </a>
      </footer>
    </div>
  );
}

export default App;
