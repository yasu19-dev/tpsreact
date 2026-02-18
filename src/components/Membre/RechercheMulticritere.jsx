// components/Membre/RechercheMulticritere.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function RechercheMulticritere() {
  const { documents, commentaires } = useSelector(state => state.app);
  
  const [theme, setTheme] = useState('');
  const [nomDoc, setNomDoc] = useState('');
  const [nomUserAuteurCommentaire, setNomUserAuteurCommentaire] = useState('');

  // Logique de recherche multicritère [cite: 32]
  const resultats = documents.filter(doc => {
    const matchTheme = doc.nom_theme.toLowerCase().includes(theme.toLowerCase());
    const matchNomDoc = doc.nom_document.toLowerCase().includes(nomDoc.toLowerCase());
    
    // Vérifier si un commentaire sur ce document a été posté par l'utilisateur recherché [cite: 32]
    const commentairesDuDoc = commentaires.filter(c => c.code_document === doc.code_document);
    const matchUser = nomUserAuteurCommentaire === '' || commentairesDuDoc.some(c => c.login.toLowerCase().includes(nomUserAuteurCommentaire.toLowerCase()));

    return matchTheme && matchNomDoc && matchUser;
  });

  return (
    <div>
      <h3>Recherche Multicritère</h3>
      <input type="text" placeholder="Nom du thème" onChange={e => setTheme(e.target.value)} />
      <input type="text" placeholder="Nom du document" onChange={e => setNomDoc(e.target.value)} />
      <input type="text" placeholder="Auteur d'un commentaire" onChange={e => setNomUserAuteurCommentaire(e.target.value)} />

      <ul>
        {resultats.map(doc => (
          <li key={doc.code_document}>{doc.nom_document} ({doc.nom_theme})</li>
        ))}
      </ul>
    </div>
  );
}