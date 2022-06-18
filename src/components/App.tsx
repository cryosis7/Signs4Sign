import React, {useEffect, useMemo} from 'react';
import logo from '../logo.svg';
import './App.css';
import NZSL from '../dictionary/nzsl.json';

interface Sign {
  english: string;
  description: string;
  maori?: string;
  videoUrl: string;
  handShape: number;
  location: string;
}

const App = () => {
  const signData = useMemo(() => NZSL.map(sign => {

  }), [NZSL])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
