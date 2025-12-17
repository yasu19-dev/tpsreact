import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate

const Article = ({ article }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <button onClick={() => dispatch({ type: 'DELETE_ARTICLE', payload: article.id })}>
                Delete
            </button>
            {/* Redirection vers la route update */}
            <button onClick={() => navigate(`/update/${article.id}`)}>
                Update
            </button>
        </div>
    );
};

export default Article;