import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const useGreeting = () => {
  const [ greeting, setGreeting ] = useState([]);
  const fetchGreeting = async () => {
    const response = await fetch('http://localhost.thenbs.io:9000/graphql', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: '{ greeting }' })
    });
    const parsedResponse = await response.json();
    setGreeting(parsedResponse);
  };

  useEffect(() => {
    fetchGreeting();
  }, []);
  return greeting;
};


function App() {

  const greeting = useGreeting();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { JSON.stringify(greeting) }
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
