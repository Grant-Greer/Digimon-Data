import React from 'react';
import PropTypes from 'prop-types';
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

DigimonCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
};
