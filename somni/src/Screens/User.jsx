import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/User.css'

const User = () => {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const [orders, setOrders] = useState([]);
    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        adress: '',
        location: '',
        city: '',
        postalCode: '',
        quantity: '',
    });

    useEffect(() => {
        // Obtener los datos del usuario desde el backend usando el userId de sessionStorage
        const fetchUserData = async () => {

            if (!userId || !token) {
                // Redirigir a la página de inicio de sesión si no hay userId o token
                // Puedes usar react-router-dom para manejar la navegación
                // Ejemplo: history.push('/login');
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
                    setUserData({
                        name: data.name,
                        lastname: data.lastname,
                        email: data.email,
                        phone: data.phone,
                        adress: data.adress,
                        location: data.location,
                        city: data.city,
                        postalCode: data.postalCode,
                        quantity: data.cart.quantity,
                    });
                } else {
                    // Manejar el caso de error al obtener los datos del usuario
                    console.error('Error al obtener los datos del usuario:', data.message);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        const fetchOrderHistory = async () => {
            const userId = sessionStorage.getItem('userId');

            try {
                const response = await fetch(`http://localhost:3000/orders/order/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                console.log(data);

                if (response.ok) {
                    setOrders(data.orders);
                } else {
                    // Manejar el caso de error al obtener el historial de pedidos
                    console.error('Error al obtener el historial de pedidos:', data.message);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        fetchUserData();
        fetchOrderHistory();
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/home');
        window.location.reload();
    };

    return (
        <div className='user'>
            <h1>Bienvenido {userData.name}</h1>
            <div className='data'>
                <div className='usuario'>
                    <h3>Datos del Usuario</h3>
                    <p><b>Nombre:</b> {userData.name} {userData.lastname}</p>
                    <p><b>Email:</b> {userData.email}</p>
                    <p><b>Telefono:</b> {userData.phone}</p>
                    <p><b>Dirección:</b> {userData.adress}</p>
                    <p><b>Localidad:</b> {userData.location}</p>
                    <p><b>Ciudad:</b> {userData.city}</p>
                    <p><b>Codigo postal:</b> {userData.postalCode}</p>
                    <button>Modificar</button>
                </div>
                <div className='pedidos'>
                    <h3>Historial de pedidos</h3>
                    {orders.length > 0 ? (
                        <ul>
                            {orders.map((order) => (
                                <li key={order._id}>
                                    <div>
                                        <p><b>Fecha:</b> {new Date(order.date).toLocaleDateString()}</p>
                                        <p><b>Precio del pedido:</b> {order.price}€</p>
                                    </div>
                                    <button>Ver</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay historial de pedidos para mostrar.</p>
                    )}
                </div>
            </div>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default User;