import React, { useState } from 'react';
import ImageArticle from './ImageArticle';
import '../style/ArticleCard.css'

const ArticleCard = ({ article, onBuyClick }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleBuyClick = () => {
        // Lógica para comprar el artículo
        onBuyClick(article._id.$oid);
    };

    const handleImageClick = () => {
      setModalOpen(true);
    };
  
    const capitalizeFirstLetter = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div className="card">
            <h3>{capitalizeFirstLetter(article.type)}</h3>
            <img
                src={`data:image/jpeg;base64,${article.image}`}
                alt={article.type}
                className="article-image"
                width={'200px'}
                onClick={handleImageClick}
            />
            <div className="details">
                <p><b>Material:</b> {capitalizeFirstLetter(article.material)}</p>
                <p><b>Acabado:</b> {capitalizeFirstLetter(article.finish)}</p>
                <p><b>Dimensiones:</b> {capitalizeFirstLetter(article.dimensions)}</p>
                <p><b>Detalles:</b> {capitalizeFirstLetter(article.details)}</p>
                <p><b>Precio:</b> {article.price}€</p>
            </div>
            <button onClick={handleBuyClick}>Comprar</button>
            {isModalOpen && (<ImageArticle
                imageUrl={`data:image/jpeg;base64,${article.image}`}
                onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
};

export default ArticleCard;
