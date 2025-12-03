import React, { useState } from "react";

const JeuDe = ({ valeurCache }) => {
  // Déclaration des états avec useState
  const [face, setFace] = useState(null);
  const [compteur, setCompteur] = useState(0);
  const [fin, setFin] = useState(false);

  // Fonction pour lancer le dé
  const jouer = () => {
    const valeur = Math.floor(Math.random() * 6) + 1;
    setFace(valeur);
    setCompteur((prevCompteur) => prevCompteur + 1);
    setFin(valeur === valeurCache);
  };

  // Fonction pour réinitialiser le jeu
  const initialiser = () => {
    setFace(null);
    setCompteur(0);
    setFin(false);
  };

  // Fonction de contrôle (Jouer ou Initialiser)
  const jouerOuInitialiser = () => {
    if (fin) {
      initialiser();
    } else {
      jouer();
    }
  };

  // Tableau des images
  const facesImages = [
    "face1.PNG",
    "face2.PNG",
    "face3.PNG",
    "face4.PNG",
    "face5.PNG",
    "face6.PNG",
    "face_vide.PNG",
  ];

  return (
    <div>
      <img src="Dé.PNG" alt="Dé" />
      <h1>Jeu de Dé...</h1>
      <h2>
        face:{" "}
        {face !== null ? (
          <img src={facesImages[face - 1]} alt={`Face ${face}`} />
        ) : (
          "..."
        )}
      </h2>
      <h2>nombre d'essais: {compteur}</h2>

      {fin && (
        <p
          style={{
            color: "green",
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "Arial",
          }}
        >
          Bravo, vous avez trouvé la face cachée !
        </p>
      )}

      <button onClick={jouerOuInitialiser}>
        {fin ? "Initialiser" : "Jouer"}
      </button>
    </div>
  );
};

export default JeuDe;