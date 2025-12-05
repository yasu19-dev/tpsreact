import React from 'react';

const MemeList = ({ memes }) => {
  if (memes.length === 0) {
    return <h2>Aucun mème trouvé.</h2>;
  }

  return (
    <div className="meme-grid">
      {memes.map((meme) => (
        <div key={meme.id} className="meme-card">
          <div className="image-container">
            <img src={meme.url} alt={meme.name} />
          </div>
          <div className="meme-info">
            <p><strong>id:</strong> {meme.id}</p>
            <p><strong>nom:</strong> {meme.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeList;