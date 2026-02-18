// components/Moderateur/GestionCommentaires.jsx
import { useSelector, useDispatch } from 'react-redux';
import { changerEtatCommentaire } from '../../store/appSlice';

export default function GestionCommentaires() {
  const commentaires = useSelector(state => state.app.commentaires);
  const dispatch = useDispatch();

  // Filtrer les actifs et trier par date décroissante [cite: 19]
  const commentairesActifs = [...commentaires]
    .filter(c => c.etat_commentaire === 1)
    .sort((a, b) => new Date(b.date_commentaire) - new Date(a.date_commentaire));

  // Filtrer les bloqués [cite: 21]
  const commentairesBloques = commentaires.filter(c => c.etat_commentaire === 2);

  return (
    <div>
      <h3>Commentaires à modérer</h3>
      {commentairesActifs.map(c => (
        <div key={c.code_commentaire}>
          <p>{c.date_commentaire} - {c.texte_commentaire}</p>
          {/* Le blocage affecte la valeur 2 [cite: 20] */}
          <button onClick={() => dispatch(changerEtatCommentaire({ id: c.code_commentaire, nouvelEtat: 2 }))}>
            Bloquer
          </button>
        </div>
      ))}

      <h3>Commentaires Bloqués</h3>
      {commentairesBloques.map(c => (
        <div key={c.code_commentaire}>
          <p>{c.texte_commentaire}</p>
          {/* Possibilité de débloquer [cite: 21] */}
          <button onClick={() => dispatch(changerEtatCommentaire({ id: c.code_commentaire, nouvelEtat: 1 }))}>
            Débloquer
          </button>
        </div>
      ))}
    </div>
  );
}