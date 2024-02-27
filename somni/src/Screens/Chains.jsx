import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticleList.jsx';
import '../style/App.css';

const Chains = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Hacer la solicitud GET al backend para obtener la lista de artículos
    fetch('http://localhost:3000/articles/chains')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error al obtener los artículos:', error));
  }, []); 

  return (
    <div>
      <div className='list-articles'>
      {articles.length > 0 ? (
          <ArticlesList articles={articles} />
        ) : (
          <p>Web en mantenimiento, disculpe las molestias</p>
        )}
      </div>
    </div>
  );
}

export default Chains;