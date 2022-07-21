import React from 'react'
import './digimon-container.css';
import { DigimonCard } from './DigimonCard'

export default function DigimonContainer ({ digimondata }) {
    
    return (
      
    <div className='digimon-container'> 
      { digimondata.map((digimon, index) => {
        return ( 
        <DigimonCard 
        key={index}
        name={digimon.name}
        img={digimon.img}
        level={digimon.level}
        />
       )})}
       </div>
      
        
  )
}
