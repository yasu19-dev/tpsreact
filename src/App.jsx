import React, { useState, useEffect } from "react";
import "./App.css"; 
import ComposantUtilisateur from "./components/ComposantUtilisateur";

function App() {
  const [listeUtilisateurs, setListeUtilisateurs] = useState([]);

  // Au chargement de la page, on récupère tous les utilisateurs
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => reponse.json())
      .then((donnees) => {
        setListeUtilisateurs(donnees);
      })
      .catch((erreur) => console.error("Erreur chargement users:", erreur));
  }, []);

  return (
    <div className="App">
      <h1>nombre d'utilisateurs: {listeUtilisateurs.length}</h1>
      
      <div className="conteneur-utilisateurs">
        {/* On boucle sur la liste et on appelle notre composant importé */}
        {listeUtilisateurs.map((utilisateur) => (
          <ComposantUtilisateur key={utilisateur.id} infos={utilisateur} />
        ))}
      </div>
    </div>
  );
}

export default App;