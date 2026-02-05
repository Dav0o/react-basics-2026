/**
 * EJERCICIO 3 - Fetch con useEffect (Carga automática)
 * 
 * OBJETIVO: Cargar datos automáticamente al montar el componente
 * 
 * INSTRUCCIONES:
 * 1. Usa useEffect para cargar posts al montar
 * 2. Implementa un límite de posts a mostrar
 * 3. Agrega un botón para recargar los datos
 * 4. Muestra un indicador de última actualización
 * 
 * API: https://jsonplaceholder.typicode.com/posts?_limit=5
 */

import { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Ejercicio3 = () => {
  // TODO: Estados
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [ultimaActualizacion, setUltimaActualizacion] = useState(null);
  
  // TODO: Función para cargar posts
  // const cargarPosts = async () => { ... };
  
  // TODO: useEffect para cargar al montar
  // useEffect(() => {
  //   cargarPosts();
  // }, []);
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 3 - Fetch con useEffect</h2>
      
      <div style={estilos.header}>
        <button style={estilos.boton}>🔄 Recargar</button>
        {/* TODO: Mostrar última actualización */}
        <span>Última actualización: --:--:--</span>
      </div>
      
      {/* TODO: Mostrar loading, error o posts */}
      <div style={estilos.lista}>
        <p>Posts aquí...</p>
      </div>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' },
  boton: { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  lista: { display: 'flex', flexDirection: 'column', gap: '10px' },
};

export default Ejercicio3;
