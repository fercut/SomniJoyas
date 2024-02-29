import React, { useState } from 'react';

const CartCard = ({ cartItem, onIncrease, onDecrease, onDelete }) => {
  const { itemId, quantity } = cartItem;
    console.log(cartItem)
  const handleIncreaseClick = () => {
    onIncrease(itemId);
  };

  const handleDecreaseClick = () => {
    onDecrease(itemId);
  };

  const handleDeleteClick = () => {
    onDelete(itemId);
  };

  return (
    <div className="cart-card">
      <img
        src={`data:image/jpeg;base64,${cartItem.image}`}
        alt={cartItem.type}
        className="cart-image"
        width={'100px'}
      />
      <div className="cart-details">
        <p><b>Artículo:</b> {cartItem.type}</p>
        <p><b>Cantidad:</b> {quantity}</p>
      </div>
      <div className="cart-buttons">
        <button onClick={handleIncreaseClick}>+</button>
        <button onClick={handleDecreaseClick}>-</button>
        <button onClick={handleDeleteClick}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartCard;
