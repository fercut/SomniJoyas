import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    // Obtener el carrito del usuario desde el backend
    const fetchCart = async () => {
      
      if (!token) {
        // Redirigir a la página de inicio de sesión si no hay un token
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          // Obtener detalles adicionales para cada artículo en el carrito
          const cartWithDetails = await Promise.all(
            data.cart.map(async (item) => {
              const articleDetails = await fetchArticleDetails(item.itemId);
              return { ...item, ...articleDetails };
            })
          );

          // Actualizar el estado con los artículos del carrito del usuario con detalles
          setCartItems(cartWithDetails);
        } else {
          // Manejar el caso de error al obtener el carrito
          console.error('Error al obtener el carrito:', data.message);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    const fetchArticleDetails = async (articleId) => {
      try {
        const response = await fetch(`http://localhost:3000/articles/${articleId}`);
        const data = await response.json();

        if (response.ok) {
          return { type: data.type, image: data.image }; // Ajusta según la estructura de tu artículo
        } else {
          console.error('Error al obtener detalles del artículo:', data.message);
          return {};
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        return {};
      }
    };

    fetchCart();
  }, [navigate]);

  const handleIncrease = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itemId, action: 'increase' }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Actualizar el estado con los artículos del carrito después de aumentar la cantidad
        setCartItems((prevCart) =>
          prevCart.map((item) =>
            item.itemId === itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        // Manejar el caso de error al aumentar la cantidad
        console.error('Error al aumentar la cantidad:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  const handleDecrease = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itemId, action: 'decrease' }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Actualizar el estado con los artículos del carrito después de disminuir la cantidad
        setCartItems((prevCart) =>
          prevCart.map((item) =>
            item.itemId === itemId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        // Manejar el caso de error al disminuir la cantidad
        console.error('Error al disminuir la cantidad:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itemId, action: 'delete' }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Actualizar el estado con los artículos del carrito después de eliminar un artículo
        setCartItems((prevCart) => prevCart.filter((item) => item.itemId !== itemId));
      } else {
        // Manejar el caso de error al eliminar el artículo
        console.error('Error al eliminar el artículo:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartCard
              key={item.itemId}
              cartItem={item}
              onIncrease={() => handleIncrease(item.itemId)}
              onDecrease={() => handleDecrease(item.itemId)}
              onDelete={() => handleDelete(item.itemId)}
            />
          ))}
        </div>
      ) : (
        <p>No hay artículos en el carrito en este momento.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
