import React from 'react';
import { Link } from 'react-router-dom';
import './City.css';
import Button from './Button';

function City({city, remove}){
    return(
        <div className="City">
            <Button text="X" action={remove} isDisabled={false}/>
            <Link to={'/' + city.id}>
                <h4>{city.name}, {city.sys.country}</h4>
                <h5>{city.weather[0].main}</h5>
                <p>{city.weather[0].description}</p>
                <p>Temperature: Max/Min {city.main.temp_max}/{city.main.temp_min}</p>
                <p>Location: {city.coord.lon}, {city.coord.lat}</p>
            </Link>
        </div>
    )
}

export default City;