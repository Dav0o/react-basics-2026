/**
 * EJERCICIO 2 - Fetch POST
 * 
 * OBJETIVO: Enviar datos a una API usando POST
 * 
 * INSTRUCCIONES:
 * 1. Crea un formulario con campos: título y contenido
 * 2. Al enviar, haz una petición POST con los datos
 * 3. Muestra el resultado de la petición
 * 4. Maneja los estados loading y error
 * 
 * API: https://jsonplaceholder.typicode.com/posts (POST)
 */

import { useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Ejercicio2 = () => {
  // TODO: Estados para el formulario
  // const [titulo, setTitulo] = useState("");
  // const [contenido, setContenido] = useState("");
  
  // TODO: Estados para la petición
  // const [loading, setLoading] = useState(false);
  // const [resultado, setResultado] = useState(null);
  // const [error, setError] = useState(null);
  
  // TODO: Función para enviar POST
  // const enviarPost = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   
  //   try {
  //     const response = await fetch(API_URL, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ title: titulo, body: contenido, userId: 1 })
  //     });
  //     const data = await response.json();
  //     setResultado(data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 2 - Fetch POST</h2>
      
      <form style={estilos.formulario}>
        {/* TODO: Input título */}
        <input 
          type="text"
          placeholder="Título"
          style={estilos.input}
        />
        
        {/* TODO: Textarea contenido */}
        <textarea 
          placeholder="Contenido"
          style={{ ...estilos.input, minHeight: '100px' }}
        />
        
        {/* TODO: Botón submit */}
        <button type="submit" style={estilos.boton}>
          Crear Post
        </button>
      </form>
      
      {/* TODO: Mostrar resultado */}
      {/* {resultado && <pre>{JSON.stringify(resultado, null, 2)}</pre>} */}
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px' },
  boton: { backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
};

export default Ejercicio2;
