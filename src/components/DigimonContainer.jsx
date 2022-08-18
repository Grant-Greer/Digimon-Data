import React from 'react';
import PropTypes from 'prop-types';
import './styles/digimon-container.css';

export default function DigimonContainer({ children }) {
  return <div className="digimon-container">{children}</div>;
}

DigimonContainer.propTypes = {
  children: PropTypes.node.isRequired
};
