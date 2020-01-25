import React from 'react';
import './Input.css';
import search from './search.png'

export default function Input({action, value}){
    return(
        <div className="input-container">
            <img className="icon" src={search} alt="search"/>
            <input className="input-field" type="text" placeholder="Search City" value={value} onChange={action}/>
        </div>
    )
}