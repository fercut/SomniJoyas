import React, { useState } from 'react';
import '../style/CartCard.css'

const CartCard = ({ cartItem, onIncrease, onDecrease, onDelete }) => {
  const { itemId, quantity, image, type, details } = cartItem;
  
  const handleIncreaseClick = () => {
    onIncrease(itemId);
  };

  const handleDecreaseClick = () => {
    onDecrease(itemId);
  };

  const handleDeleteClick = () => {
    onDelete(itemId);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };


  return (
    <div className="cart-card">
      <img
        src={`data:image/jpeg;base64,${image}`}
        alt={type}
        className="cart-image"
        width={'100px'}
      />
      <div className="cart-details">
        <p><b>Artículo:</b> {capitalizeFirstLetter(type)}</p>
        <p><b>Detalle:</b> {details}</p>
      </div>
      <div className="cart-buttons">
        <button onClick={handleIncreaseClick}>+</button>
        <p className='quantity'>{quantity}</p>
        <button onClick={handleDecreaseClick}>-</button>
        <button onClick={handleDeleteClick}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartCard;
