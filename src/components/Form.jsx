import React, { useState } from 'react';

function Form({ verificationConnexion }) {
  const [identifiant, setIdentifiant] = useState('');
  const [mdp, setMdp] = useState('');
  const [erreurIdentifiant, setErreurIdentifiant] = useState(false);
  const [erreurMdp, setErreurMdp] = useState(false);

  const valider = () => {
    setErreurIdentifiant(false);
    setErreurMdp(false);

    if (identifiant !== 'Yasmine') {
      setErreurIdentifiant(true);
      return;
    }

    if (mdp !== '1234yas') {
      setErreurMdp(true);
      return;
    }

    verificationConnexion(identifiant);
  };

  return (
    <div className="conteneur">
      <h1>Connexion</h1>
      
      <div className="groupe-formulaire">
        <label>L'identifiant</label>
        <input type="text" value={identifiant} onChange={(e) => setIdentifiant(e.target.value)}/>
        {erreurIdentifiant && (
          <div className="msg-erreur">Votre identifiant est incorrect.</div>
        )}
      </div>

      <div className="groupe-formulaire">
        <label>Mot de passe</label>
        <input type="password" value={mdp} onChange={(e) => setMdp(e.target.value)}/>
        {erreurMdp && (
          <div className="msg-erreur">Votre mot de passe est incorrect.</div>
        )}
      </div>

      <button type="button" onClick={valider}>Se connecter</button>
    </div>
  );
}

export default Form;