import React, { useState } from 'react';

const ComposantUtilisateur = ({ infos }) => {
  const [posts, setPosts] = useState([]); 
  const [estVisible, setEstVisible] = useState(false); 

  
  const gererAffichagePosts = () => {
    
    if (!estVisible && posts.length === 0) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${infos.id}`)
        .then((rep) => rep.json())
        .then((resultat) => setPosts(resultat))
        .catch(err => console.error("Erreur posts", err));
    }
    
   
    setEstVisible(!estVisible);
  };

  return (
    <div className="carte-utilisateur">
      <div className="info-ligne">
        <strong>nom:</strong> {infos.name} {infos.username}
      </div>
      <div className="info-ligne">
        email: {infos.email}
      </div>
      <div className="info-ligne">
        ville: {infos.address.city} rue: {infos.address.street}
      </div>

      <button className="btn-details" onClick={gererAffichagePosts}>
        details posts
      </button>

      
      {estVisible && (
        <div className="zone-posts">
          <p className="compteur-posts">nombre des posts: {posts.length}</p>
          
          {posts.map((post) => (
            <div key={post.id} className="carte-post">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComposantUtilisateur;