import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticleList.jsx';
import '../style/App.css';

const Chokers = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Hacer la solicitud GET al backend para obtener la lista de artículos
    fetch('http://localhost:3000/articles/choker')
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
          <img src={loadGif} alt="load" width={100}/>
        )}
      </div>
    </div>
  );
}

export default Chokers;