import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, addUser } from "./redux/actions";
import ComposantUtilisateur from "./components/ComposantUtilisateur";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  
  // Lecture du state global pour les utilisateurs
  const listeUtilisateurs = useSelector(state => state.userState.users);

  const [nom, setNom] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // --- CREATE ---
  const handleAdd = (e) => {
      e.preventDefault();
      const newUser = {
          name: nom,
          email: `${nom}@test.com`, // email fictif pour l'exemple
          username: nom,
          address: { city: "Paris", street: "Inconnue" }
      };
      dispatch(addUser(newUser));
      setNom("");
  }

  return (
    <div className="App" style={{padding:'20px'}}>
      <h1>POSTS avec Redux + APIs</h1>
      
      {/* Formulaire ajout simple */}
      <form onSubmit={handleAdd} style={{marginBottom:'20px'}}>
          <input 
            value={nom} 
            onChange={e => setNom(e.target.value)} 
            placeholder="Nom du nouvel utilisateur" 
          />
          <button type="submit">Ajouter</button>
      </form>

      <h2>Utilisateurs : {listeUtilisateurs.length}</h2>

      <div className="conteneur-utilisateurs">
        {listeUtilisateurs.map((utilisateur) => (
          <ComposantUtilisateur key={utilisateur.id} infos={utilisateur} />
        ))}
      </div>
    </div>
  );
}

export default App;