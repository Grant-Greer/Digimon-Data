import logo from './digimon-logo.jpeg';
import './App.css';
import DigimonContainer from './components/DigimonContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Digimon Logo" />
      </header>
      <div className="App-body">
         
        <DigimonContainer/> 

    </div>
    </div>

  );
}

export default App;
