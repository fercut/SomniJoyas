import React from 'react';
import ArticleCard from './ArticleCard.jsx'; 

const ArticlesList = ({ articles }) => {
  const handleBuyClick = (articleId) => {
    // Lógica para comprar el artículo con el ID articleId
    console.log(`Artículo comprado con ID: ${articleId}`);
  };

  return (
    <div className="articles-list">
      {articles.map((article) => (
        <ArticleCard key={article._id.$oid} article={article} onBuyClick={handleBuyClick} />
      ))}
    </div>
  );
};

export default ArticlesList;
