import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const saveArticle = (e) => {
        e.preventDefault();
        const newArticle = { id: Math.random(), title, body };
        dispatch({ type: 'ADD_ARTICLE', payload: newArticle }); 
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={saveArticle}>
            <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" value={body} onChange={(e) => setBody(e.target.value)} />
            <button type="submit">Add article</button>
        </form>
    );
};
export default AddArticle;