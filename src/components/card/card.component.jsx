import React from 'react';
import './card.style.css';
export const Card = prop => (

    <div className='card-container'>
        <img alt='moster' src={`https://robohash.org/${prop.monster.id}?set=set2&size=180x180`} />
        <h1>{prop.monster.name}</h1>
        <p>{prop.monster.email}</p>
    </div>
)