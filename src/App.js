import logo from './digimon-logo.jpeg';
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
      .then((response) => response.json())
      .then((actualData) => { setData(actualData); setLoading(false); })
      .catch((error) => { setError(error); setLoading(false); });
      
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      
    </div>
  );
}

export default App;
