import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByUser, deleteUser, updateUser } from '../redux/actions';

const ComposantUtilisateur = ({ infos }) => {
  const dispatch = useDispatch();
  
  // On récupère les posts spécifiques à cet utilisateur depuis le store
  const posts = useSelector(state => state.postState.postsByUserId[infos.id]);
  
  const [estVisible, setEstVisible] = useState(false);

  const gererAffichagePosts = () => {
    if (!estVisible && !posts) {
      dispatch(getPostsByUser(infos.id));
    }
    setEstVisible(!estVisible);
  };

  // --- DELETE ---
  const gererSuppression = () => {
    if(window.confirm("Supprimer ?")) {
        dispatch(deleteUser(infos.id));
    }
  };

  // --- UPDATE ---
  const gererModification = () => {
      const nouveauNom = prompt("Nouveau nom :", infos.name);
      if(nouveauNom) {
          const updatedInfo = { ...infos, name: nouveauNom };
          dispatch(updateUser(infos.id, updatedInfo));
      }
  }

  return (
    <div className="carte-utilisateur" style={{border:'1px solid #ddd', margin:'10px', padding:'10px'}}>
      <div className="info-ligne"><strong>nom:</strong> {infos.name}</div>
      <div className="info-ligne">email: {infos.email}</div>
      
      <div style={{marginTop:'10px'}}>
        <button onClick={gererAffichagePosts} className="btn-details">
            {estVisible ? "Cacher" : "Détails posts"}
        </button>
        <button onClick={gererModification} style={{background:'orange', margin:'0 5px'}}>Edit</button>
        <button onClick={gererSuppression} style={{background:'red', color:'white'}}>X</button>
      </div>

      {estVisible && (
        <div className="zone-posts">
          {!posts ? <p>Chargement...</p> : (
            <>
              <p>Nombre de posts: {posts.length}</p>
              {posts.map(post => (
                <div key={post.id} style={{background:'#eee', margin:'5px', padding:'5px'}}>
                  <b>{post.title}</b>
                  <p>{post.body}</p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ComposantUtilisateur;