import React from 'react';
import './digimon-list.css';
export default function DigimonList({ img, name, level }) {
  return (
    <div className='Digimon-container'>
        
       <div className='digimon-card'>
       <img alt={name} src={img} />
       <h1>{name}</h1>
       <span>{level}</span>
       </div>
    </div>

  )
}
