import React, { useState, useEffect } from 'react';
import MemeList from './components/Memes';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [memesPerPage] = useState(5); // 5 images par page comme demandé

  // 1. Consommation de l'API
  useEffect(() => {
    const fetchMemes = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        // L'API renvoie les données dans data.data.memes
        if (data.success) {
          setMemes(data.data.memes);
        }
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
      }
      setLoading(false);
    };

    fetchMemes();
  }, []);

  // 2. Logique de Pagination
  const indexOfLastMeme = currentPage * memesPerPage;
  const indexOfFirstMeme = indexOfLastMeme - memesPerPage;
  const currentMemes = memes.slice(indexOfFirstMeme, indexOfLastMeme);

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="title">Nombre des images: {memes.length}</h1>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          {/* Composant 1 : Affiche la liste */}
          <MemeList memes={currentMemes} />
          
          {/* Composant 2 : Affiche la pagination */}
          <Pagination 
            memesPerPage={memesPerPage} 
            totalMemes={memes.length} 
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;