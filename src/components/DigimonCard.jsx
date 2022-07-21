import React from 'react';
import './digimon-card.css';
export const DigimonCard = ({ name, img, level }) => {
       return (
       <div className='digimon-card'>
       <img alt={name} src={img} />
       <h1>{name}</h1>
       <span>{level}</span>
       </div>
       )
}
