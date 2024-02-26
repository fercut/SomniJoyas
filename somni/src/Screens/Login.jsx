import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Alert from '../components/Alert'; 

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Si la tecla presionada es "Enter", realiza el inicio de sesión
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenar el token en sessionStorage
        sessionStorage.setItem('token', data.token);

        // Actualizar el estado loggedIn
        setLoggedIn(true);

        // Ejecutar la función onLogin con el token
        onLogin(data.token);
      } else {
        // Manejar el caso de credenciales incorrectas
        const { message } = data
        setError(message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  if (loggedIn) {
    // Redirigir a la ruta "/home" si el usuario está autenticado
    return <Navigate to="/home" />;
  }

  return (
    <div className='login'>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        style={{ fontWeight: 'bold' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        type="password"
        placeholder="Contraseña"
        style={{ fontWeight: 'bold' }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      {error && <Alert title="Error" content={error} onClose={() => setError(undefined)}/>}
    </div>
  );
};

export default Login;
