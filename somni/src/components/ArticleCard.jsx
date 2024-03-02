import React, { useState } from 'react';
import ImageArticle from './ImageArticle';
import '../style/ArticleCard.css'

const ArticleCard = ({ article, onBuyClick }) => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const isArticleInCart = (articleId) => {
      return cartItems.some((item) => item.itemId === articleId);
    };

    const handleBuyClick = async () => {
      try {
        // Realizar la solicitud al backend para agregar el artículo al carrito
        const userId = sessionStorage.getItem('userId');

        if (!userId) {
          console.error('UserId no encontrado en sessionStorage');
          return;
        }

        // Asegurarse de que article._id tenga un valor
        if (!article._id) {
          console.error('El artículo no tiene un ID definido');
          return;
        }

        if (isArticleInCart(article._id)) {
          console.log('El artículo ya está en el carrito.');
          return;
        }

        const response = await fetch(`http://localhost:3000/users/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            $push: {
                cart: {
                    itemId: article._id,
                    quantity: 1,
                }
            }
        }),
          
        });

        const data = await response.json();

        if (response.ok) {
          // Lógica adicional si es necesario después de agregar al carrito

          // Cerrar el modal si es necesario
          setSelectedArticle(null);

          // Llamar a la función onBuyClick con el id del artículo
          onBuyClick(article._id);
        } else {
          // Manejar el caso de error al agregar al carrito
          console.error('Error al agregar al carrito:', data.error);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
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
