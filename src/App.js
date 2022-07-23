import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './digimon-logo.jpeg';
import './App.css';
import DigimonContainer from './components/DigimonContainer.jsx';
import DigimonCard from './components/DigimonCard.jsx';

function App() {
  const [currentData, setData] = useState([]);

  useEffect(() => {
    const getDigimonData = async () => {
      try {
        const response = await axios.get(`https://digimon-api.herokuapp.com/api/digimon`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDigimonData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Digimon Logo" />
      </header>
      <div className="App-body">
        <DigimonContainer>
          {currentData.map((digimon, index) => {
            return <DigimonCard key={index} {...digimon} />;
          })}
        </DigimonContainer>
      </div>
    </div>
  );
}

export default App;
