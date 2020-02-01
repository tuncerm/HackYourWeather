import React from 'react';
import './Button.css';


export default function Button({text, action, isDisabled}){
    return <button className="btn" type="button"  onClick={action} disabled={isDisabled}>{text}</button>
}