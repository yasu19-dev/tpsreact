import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const UpdateArticle = () => {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Trouver l'article correspondant dans le store
    const article = useSelector(state => 
        state.articles.find(art => art.id === parseFloat(id))
    );

    const [title, setTitle] = useState(article ? article.title : '');
    const [body, setBody] = useState(article ? article.body : '');

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch({
            type: 'UPDATE_ARTICLE',
            payload: { id: parseFloat(id), title, body }
        });
        navigate('/'); // Retour à la liste après modification
    };

    if (!article) return <p>Article non trouvé</p>;

    return (
        <div>
            <h2>Modifier l'article</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Enregistrer les modifications</button>
            </form>
        </div>
    );
};

export default UpdateArticle;