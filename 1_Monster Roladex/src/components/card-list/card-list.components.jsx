import React from 'react';
import { Card } from '../card/card.components'
import './card-list.style.css'
export const CardList = ( props ) => (

    <div className="card-list">
        {props.users.map(user =>(
            <Card key={user.id} user={user}/>
        ))}
    </div>
);