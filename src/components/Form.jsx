import React, { useState } from 'react';

function Form({ validerInscription }) {
  const [identifiant, setIdentifiant] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [dateNaiss, setDateNaiss] = useState('');
  const [ville, setVille] = useState('Tanger');
  const [genre, setGenre] = useState('');
  const [loisirs, setLoisirs] = useState([]);
  const [photo, setPhoto] = useState('');

  const gererLoisirs = (e) => {
    const valeur = e.target.value;
    if (e.target.checked) {
      setLoisirs([...loisirs, valeur]);
    } else {
      setLoisirs(loisirs.filter((item) => item !== valeur));
    }
  };

  const envoyerDonnees = () => {
    const donnees = {
      nom: identifiant,
      date: dateNaiss,
      ville: ville,
      genre: genre,
      listeLoisirs: loisirs,
      photo: photo
    };
    validerInscription(donnees);
  };

  return (
    <div className="conteneur">
      <h1>Inscription</h1>
      
      <div className="ligne-formulaire">
        <label>L'identifiant</label>
        <input 
          type="text" 
          value={identifiant} 
          onChange={(e) => setIdentifiant(e.target.value)} 
        />
      </div>

      <div className="ligne-formulaire">
        <label>Mot de passe</label>
        <input 
          type="password" 
          value={motDePasse} 
          onChange={(e) => setMotDePasse(e.target.value)} 
        />
      </div>

      <div className="ligne-formulaire">
        <label>Date de naissance</label>
        <input 
          type="date" 
          value={dateNaiss} 
          onChange={(e) => setDateNaiss(e.target.value)} 
        />
      </div>

      <div className="ligne-formulaire">
        <label>Ville</label>
        <select value={ville} onChange={(e) => setVille(e.target.value)}>
          <option value="Tanger">Tanger</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Rabat">Rabat</option>
        </select>
      </div>

      <div className="ligne-formulaire">
        <label>Genre</label>
        <div className="groupe-options">
          <input 
            type="radio" 
            name="genre" 
            value="Homme" 
            onChange={(e) => setGenre(e.target.value)} 
          /> Homme
          <input 
            type="radio" 
            name="genre" 
            value="Femme" 
            onChange={(e) => setGenre(e.target.value)} 
          /> Femme
        </div>
      </div>

      <div className="ligne-formulaire">
        <label>Loisirs</label>
        <div className="groupe-options">
          <input type="checkbox" value="Sport" onChange={gererLoisirs} /> Sport
          <input type="checkbox" value="Lecture" onChange={gererLoisirs} /> Lecture
          <input type="checkbox" value="Musique" onChange={gererLoisirs} /> Musique
        </div>
      </div>

      <div className="ligne-formulaire">
        <label>Photo</label>
        <input 
          type="file" 
          onChange={(e) => setPhoto(e.target.files[0]?.name)} 
        />
      </div>

      <button type="button" onClick={envoyerDonnees}>S'inscrire</button>
    </div>
  );
}

export default Form;