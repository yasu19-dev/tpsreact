import './App.css';
import Voiture from './Voiture'; // 1. On importe ton fichier

function App() {
  return (
    <div className="App">
      {/* 2. On affiche le composant ici */}
      <Voiture />
    </div>
  );
}

export default App;