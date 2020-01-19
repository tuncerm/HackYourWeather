import React from 'react';
import './City.css';

function City({city}){
    return(
        <div className="City">
            <h4>{city.name}, {city.sys.country}</h4>
            <h5>{city.weather.main}</h5>
            <p>{city.weather.description}</p>
            <p>Temperature: Max/Min {city.main.temp_max}/{city.main.temp_min}</p>
            <p>Location: {city.coord.lon}, {city.coord.lat}</p>
        </div>
    )
}

export default City;