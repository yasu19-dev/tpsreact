import React from 'react';
import { useSelector } from 'react-redux';
import Article from '../components/Article';
import AddArticle from '../components/AddArticle';

const Articles = () => {
    const articles = useSelector(state => state.articles); 

    return (
        <div>
            <AddArticle />
            <hr />
            {articles.map(art => (
                <Article key={art.id} article={art} />
            ))}
        </div>
    );
};
export default Articles;