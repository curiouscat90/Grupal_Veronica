// src/App.js
import React from 'react';
import WeatherApp from './WeatherApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <WeatherApp />
      </main>
    </div>
  );
}

export default App;