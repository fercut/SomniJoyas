import React, { useState, useEffect } from 'react';

const User = () => {
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
            const token = sessionStorage.getItem('token');
            const userId = sessionStorage.getItem('userId');

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
                const response = await fetch(`http://localhost:3000/orders/${userId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

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
    }, []); // La dependencia vacía significa que este efecto se ejecuta solo una vez al montar el componente

    return (
        <div className='user'>
            <div>
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
            <div>
                <h3>Historial de pedidos</h3>
                {orders.length > 0 ? (
                    <ul>
                        {orders.map((order) => (
                            <li key={order._id}>
                                <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
                                <p>Precio Total: {order.price}€</p>
                                {/* Puedes mostrar más detalles según tus necesidades */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay historial de pedidos para mostrar.</p>
                )}
            </div>
        </div>
    );
};

export default User;