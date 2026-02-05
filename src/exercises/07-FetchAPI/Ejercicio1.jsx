/**
 * EJERCICIO 1 - Fetch GET Básico
 * 
 * OBJETIVO: Hacer una petición GET y manejar estados loading/error/data
 * 
 * INSTRUCCIONES:
 * 1. Crea estados para: loading, error, y data (usuarios)
 * 2. Usa fetch para obtener usuarios de la API
 * 3. Implementa el patrón loading/error/data
 * 4. Muestra los usuarios en una lista
 * 
 * API: https://jsonplaceholder.typicode.com/users
 */

import { useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const Ejercicio1 = () => {
  // TODO: Crear estados
  // const [usuarios, setUsuarios] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  // TODO: Función para cargar usuarios
  // const cargarUsuarios = async () => {
  //   setLoading(true);
  //   setError(null);
  //   
  //   try {
  //     const response = await fetch(API_URL);
  //     if (!response.ok) throw new Error('Error al cargar');
  //     const data = await response.json();
  //     setUsuarios(data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 1 - Fetch GET Básico</h2>
      
      <button style={estilos.boton}>
        Cargar Usuarios
      </button>
      
      {/* TODO: Mostrar loading */}
      {/* {loading && <p>Cargando...</p>} */}
      
      {/* TODO: Mostrar error */}
      {/* {error && <p style={estilos.error}>Error: {error}</p>} */}
      
      {/* TODO: Mostrar usuarios */}
      <ul style={estilos.lista}>
        <li>Usuario aquí...</li>
      </ul>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  boton: { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '15px' },
  lista: { listStyle: 'none', padding: 0 },
  item: { backgroundColor: '#f5f5f5', padding: '15px', marginBottom: '10px', borderRadius: '8px' },
  error: { backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', borderRadius: '4px' },
};

export default Ejercicio1;
