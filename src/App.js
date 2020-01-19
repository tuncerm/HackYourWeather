import React from 'react';
import './App.css';
import cities from './city-weather.json';
import City from './City';

function App() {
  return (
    <div className="App">
      {cities.map(city=>{
        return <City key={city.id} city={city}/>
      })}
    </div>
  );
}

export default App;