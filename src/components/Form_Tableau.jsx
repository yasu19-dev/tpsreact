import React, { useState } from 'react';

export default function Form_Tableau({ verificationConnexion }) {
  const [pseudo, setPseudo] = useState('');
  const [mdp, setMdp] = useState('');
  const [erreurPseudo, setErreurPseudo] = useState(false);
  const [erreurMdp, setErreurMdp] = useState(false);

  const utilisateurs = [
    { nom: 'user1', code: '1234' },
    { nom: 'admin', code: 'admin' },
    { nom: 'yasmine', code: '0000' }
  ];

  const valider = () => {
    setErreurPseudo(false);
    setErreurMdp(false);

    const utilisateurTrouve = utilisateurs.find(u => u.nom === pseudo);

    if (!utilisateurTrouve) {
      setErreurPseudo(true);
      return;
    }

    if (utilisateurTrouve.code !== mdp) {
      setErreurMdp(true);
      return;
    }

    verificationConnexion(pseudo);
  };

  return (
    <div className="conteneur">
      <h1>Connexion</h1>
      
      <div className="groupe-formulaire">
        <label>L'identifiant</label>
        <input 
          type="text" 
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        {erreurPseudo && (
          <div className="msg-erreur">Votre identifiant est incorrect.</div>
        )}
      </div>

      <div className="groupe-formulaire">
        <label>Mot de passe</label>
        <input 
          type="password" 
          value={mdp}
          onChange={(e) => setMdp(e.target.value)}
        />
        {erreurMdp && (
          <div className="msg-erreur">Votre mot de passe est incorrect.</div>
        )}
      </div>

      <button type="button" onClick={valider}>Se connecter</button>
    </div>
  );
}

