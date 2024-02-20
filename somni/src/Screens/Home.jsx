import { useState } from 'react';

const Home = () => {
  const [productoData, setProductoData] = useState({
    tipo: '',
    material: '',
    acabado: '',
    dimensiones: '',
    detalles: '',
    unidades: 0,
    precio: 0,
    imagenes: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductoData({ ...productoData, [name]: value });
  };

  const handleImagenesChange = (event) => {
    const files = event.target.files;
    setProductoData({ ...productoData, imagenes: files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Llamamos a la función que se pasa como prop para agregar el producto
    onAgregarProducto(productoData);

    // Limpiamos los campos después de agregar el producto
    setProductoData({
      tipo: '',
      material: '',
      acabado: '',
      dimensiones: '',
      detalles: '',
      unidades: 0,
      precio: 0,
      imagenes: []
    });
  };

  return (
    <div>
      <h2>Añadir Joya</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tipo">Tipo:</label>
        <select id="tipo" name="tipo" onChange={handleInputChange} value={productoData.tipo} required>
          <option value="">Selecciona un tipo</option>
          <option value="Anillo">Anillo</option>
          <option value="Pendientes">Pendientes</option>
          <option value="Pulsera">Pulsera</option>
          <option value="Cadena">Cadena</option>
          <option value="Colgante">Colgante</option>
          <option value="Gargantilla">Gargantilla</option>
        </select>
        <br /><br />

        <label htmlFor="material">Material:</label>
        <select id="material" name="material" onChange={handleInputChange} value={productoData.material} required>
          <option value="">Selecciona un material</option>
          <option value="Plata de Ley">Plata de Ley</option>
          <option value="Oro 18K">Oro 18K</option>
          <option value="Acero">Acero</option>
        </select>
        <br /><br />

        <label htmlFor="acabado">Acabado:</label>
        <select id="acabado" name="acabado" onChange={handleInputChange} value={productoData.acabado} required>
          <option value="">Selecciona un acabado</option>
          <option value="Dorado">Dorado</option>
          <option value="Plateado">Plateado</option>
          <option value="Rosado">Rosado</option>
        </select>
        <br /><br />

        <label htmlFor="dimensiones">Dimensiones:</label>
        <input type="text" id="dimensiones" name="dimensiones" onChange={handleInputChange} value={productoData.dimensiones} required />
        <br /><br />

        <label htmlFor="detalles">Detalles:</label>
        <input type="text" id="detalles" name="detalles" onChange={handleInputChange} value={productoData.detalles} required />
        <br /><br />

        <label htmlFor="unidades">Unidades:</label>
        <input type="number" id="unidades" name="unidades" min="1" onChange={handleInputChange} value={productoData.unidades} required />
        <br /><br />

        <label htmlFor="precio">Precio:</label>
        <input type="number" id="precio" name="precio" min="0" step="0.01" onChange={handleInputChange} value={productoData.precio} required />
        <br /><br />

        <label htmlFor="imagenes">Imágenes:</label>
        <input type="file" id="imagenes" name="imagenes" accept="image/*" multiple onChange={handleImagenesChange} />
        <br /><br />

        <button type="submit">Añadir Joya</button>
      </form>
    </div>
  );
};

export default Home;