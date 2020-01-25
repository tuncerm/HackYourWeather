import React from 'react';
import './Button.css';


export default function Button({action}){
    return <button className="btn" type="button"  onClick={action}>Search</button>
}