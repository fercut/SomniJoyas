import React, { useState } from 'react';
import ImageArticle from './ImageArticle';
import '../style/ArticleCard.css'

const ArticleCard = ({ article, onBuyClick }) => {
    const [selectedArticle, setSelectedArticle] = useState(null)

    const handleBuyClick = () => {
        // Lógica para comprar el artículo
        onBuyClick(article._id.$oid);
    };

    const handleImageClick = () => {
        setSelectedArticle(article);
    };
    
    const handleCloseModal = () => {
        setSelectedArticle(null);
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
            {selectedArticle  && (<ImageArticle
                type = {article.type}
                imageUrl = {`data:image/jpeg;base64,${article.image}`}
                material = {article.material}
                finish = {article.finish}
                dimensions = {article.dimensions}
                details = {article.details}
                price = {article.price}
                onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ArticleCard;
