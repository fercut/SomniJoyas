import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticleList.jsx';
import Search from '../components/Search';
import loadGif from '../assets/load.webp';
import '../style/App.css';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  useEffect(() => {
    fetch('https://somniapi.onrender.com/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error al obtener los artículos:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    setIsSearchEmpty(searchTerm === '');

    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      // Realiza la búsqueda solo si la barra de búsqueda no está vacía
      fetch(`https://somniapi.onrender.com/articles/search/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
        .catch((error) => console.error('Error al realizar la búsqueda:', error));
    }
  };

  return (
    <div className='home'>
      <div className="search-container">
        <Search onSearch={handleSearch} />
      </div>
      <h2>ULTIMAS NOVEDADES</h2>
      <div className='list-articles'>
        {isSearchEmpty ? (
          articles.length > 0 ? (
            <ArticlesList articles={articles} />
          ) : (
            <img src={loadGif} alt="load" width={100} />
          )
        ) : (
          <ArticlesList articles={searchResults} />
        )}
      </div>
    </div>
  );
};

export default Home;
