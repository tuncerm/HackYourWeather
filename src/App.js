import React, { useState } from 'react';
import './App.css';
import City from './City';
import Input from './Input';
import Button from './Button';
import ShowMessage from './ShowMessage';

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&q=`;
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState([]);
  function getCity(){
    fetch(url+search)
      .then(res=>{
        setSearch("");
        if(res.ok){
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(data=>{
        setCities([...cities, data]);
        setErrors([]);
      })
      .catch(error => setErrors([...errors, error.message]));
  }

  function getSearch(e){
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div className="menu">
        <Input action={getSearch} value={search}/>
        <Button action={getCity}/>
      </div>
      <hr/>
      <div className="body">
        {errors.length ? errors.map(error=><ShowMessage type="error" message={error}/>) : null}
        {cities.length ? cities.map(city=><City key={city.id} city={city}/>): <ShowMessage message="Please search for a city!" type="info" />}
      </div>
    </div>
  );
}

export default App;