import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el carrito del usuario desde el backend
    const fetchCart = async () => {
      const token = sessionStorage.getItem('token');

      if (!token) {
        // Redirigir a la página de inicio de sesión si no hay un token
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/cart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          // Actualizar el estado con los artículos del carrito
          setCartItems(data.cart);
        } else {
          // Manejar el caso de error al obtener el carrito
          console.error('Error al obtener el carrito:', data.message);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchCart();
  }, [navigate]);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.itemId}>
              <p>Artículo ID: {item.itemId}</p>
              <p>Cantidad: {item.quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay artículos en el carrito en este momento.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
