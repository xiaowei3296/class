import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Cee from './components/Com';

function App() {
  return (
    <div className='App'>
      <div style={{ border: 'solid', height: '100px' }}>
        <p style={{ width: '50%', float: 'left' }}>1111</p>
        <p style={{ width: '50%', float: 'left' }}>1111</p>
      </div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <div>
        <Cee />
        dddff
      </div>
    </div>
  );
}

export default App;
