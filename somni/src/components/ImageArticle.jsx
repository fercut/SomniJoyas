// ImageArticle.jsx
import React, { useEffect } from 'react';
import '../style/ImageArticle.css';

const ImageArticle = ({ type, imageUrl, material, finish, dimensions, details, price, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    // Agregar el event listener cuando el componente se monta
    document.addEventListener('keydown', handleKeyDown);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="image-article-modal">
      <div className="image-container">
        <img src={imageUrl} alt="Article"/>
        <div className='content'>
          <h1>{capitalizeFirstLetter(type)}</h1>
          <p><b>Material:</b> {capitalizeFirstLetter(material)}</p>
          <p><b>Acabado:</b> {capitalizeFirstLetter(finish)}</p>
          <p><b>Dimensiones:</b> {capitalizeFirstLetter(dimensions)}</p>
          <p><b>Detalles:</b> {capitalizeFirstLetter(details)}</p>
          <p><b>Precio:</b> {price}€</p>
          <button className='shop'>Comprar</button>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ImageArticle;
