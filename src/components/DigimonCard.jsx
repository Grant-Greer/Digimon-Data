import React from 'react';
import './styles/digimon-card.css';

export default function DigimonCard({ name, img, level }) {
  return (
    <div className="digimon-card">
      <img alt={name} src={img} />
      <h1>{name}</h1>
      <span>{level}</span>
    </div>
  );
}
