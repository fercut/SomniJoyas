import React, { useState } from 'react';
import '../style/form.css'

const Signin = ({onRegistro}) => {
  const [clienteData, setClienteData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    calle: '',
    localidad: '',
    ciudad: '',
    codigoPostal: '',
    id: '', // Se generará automáticamente en el backend
    contraseña: '',
    verificarContraseña: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClienteData({ ...clienteData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (clienteData.contraseña !== clienteData.verificarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Llamamos a la función que se pasa como prop para registrar al cliente
    onRegistro(clienteData);

    // Limpiamos los campos después de registrar al cliente
    setClienteData({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      direccion: '',
      localidad: '',
      ciudad: '',
      codigoPostal: '',
      id: '', // Se generará automáticamente en el backend
      contraseña: '',
      verificarContraseña: ''
    });
  };

  return (
    <div className='container'>

      <h2>Registrate como cliente</h2>

      <form onSubmit={handleSubmit}>

        <div className='field'>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" onChange={handleInputChange} value={clienteData.nombre} required />
        </div>
        
        <div className='field'>
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" onChange={handleInputChange} value={clienteData.apellidos} required />
        </div>
        
        <div className='field'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleInputChange} value={clienteData.email} required />
        </div>

        <div className='field'>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" onChange={handleInputChange} value={clienteData.telefono} required />
        </div>

        <div className='field'>
          <label htmlFor="direccion">Direccion:</label>
          <input type="text" id="direccion" name="direccion" onChange={handleInputChange} value={clienteData.calle} required />
        </div>

        <div className='field'>
          <label htmlFor="localidad">Localidad:</label>
          <input type="text" id="localidad" name="localidad" onChange={handleInputChange} value={clienteData.localidad} required />
        </div>

        <div className='field'>
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" id="ciudad" name="ciudad" onChange={handleInputChange} value={clienteData.ciudad} required />
        </div>

        <div className='field'>
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input type="text" id="codigoPostal" name="codigoPostal" onChange={handleInputChange} value={clienteData.codigoPostal} required />
        </div>

        <div className='field'>
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" onChange={handleInputChange} value={clienteData.contraseña} required />
        </div>

        <div className='field'>
          <label htmlFor="verificarContraseña">Verificar Contraseña:</label>
          <input type="password" id="verificarContraseña" name="verificarContraseña" onChange={handleInputChange} value={clienteData.verificarContraseña} required />
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Signin;