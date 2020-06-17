import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="weather-wrapper">
      <Weather />
      </div>
    </div>
  );
}

export default App;
