import React from 'react';
import './card.style.css'

export const Card = ( props ) => (
    <div className="card-container">
        <img 
        src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`} 
        alt="monster" />
        <h1> {props.user.name} </h1>
        {/* <p> {props.user.email} </p> */}
        <p>{` @${props.user.post}`}</p>
        <p> {props.user.location}</p>
    </div>

);