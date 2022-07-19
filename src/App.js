import logo from './digimon-logo.jpeg';
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

import DigimonList from './DigimonList';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      const getDigiData = async () => {
        try {
          const response = await axios.get(
            `https://digimon-api.herokuapp.com/api/digimon`
          );
          setData(response.data);
          setError(null);
        } catch (err) {
          setError(err.message);
          setData(null);
        } finally {
          setLoading(false);
        }
      };
      getDigiData();
    }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        { data.map ((Digimon, index) => ( 
        <DigimonList 
        key={index}
        name={Digimon.name}
        img={Digimon.img}
        level={Digimon.level}
         /> 
         ))}
    </div>
    </div>

  );
}

export default App;
