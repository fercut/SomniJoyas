import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticleList.jsx';
import Search from '../components/Search';
import loadGif from '../assets/load.webp';
import '../style/App.css';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error al obtener los artículos:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    console.log('Realizar búsqueda con término:', searchTerm);
    fetch(`http://localhost:3000/articles/search/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error('Error al realizar la búsqueda:', error));
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <h2>ULTIMAS NOVEDADES</h2>
      <div className='list-articles'>
        {searchResults.length > 0 ? (
          <ArticlesList articles={searchResults} />
        ) : (
          articles.length > 0 ? (
            <ArticlesList articles={articles} />
          ) : (
            <img src={loadGif} alt="load" width={100}/>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
