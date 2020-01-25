import React from 'react';
import './ShowMessage.css';

export default function ShowMessage({message, type}){
    return(
        <div className="message-container">
            <p className={type}>{message}</p>
        </div>
    )
}