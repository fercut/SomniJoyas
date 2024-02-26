// ImageArticle.jsx
import React, { useEffect } from 'react';
import '../style/ImageArticle.css';

const ImageArticle = ({ imageUrl, onClose }) => {
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

  return (
    <div className="image-article-modal">
      <div className="image-container">
        <img src={imageUrl} alt="Article" />
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ImageArticle;
