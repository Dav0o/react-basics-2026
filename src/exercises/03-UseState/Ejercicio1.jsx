/**
 * EJERCICIO 1 - useState Básico
 * 
 * OBJETIVO: Usar useState para manejar estado simple
 * 
 * INSTRUCCIONES:
 * 1. Crea un estado "contador" que inicie en 0
 * 2. Crea botones para incrementar, decrementar y reiniciar
 * 3. Crea un estado "nombre" para un input de texto
 * 4. Muestra el nombre en tiempo real mientras el usuario escribe
 */

import { useState } from 'react';

const Ejercicio1 = () => {
  // TODO: Crear estado para el contador
  // const [contador, setContador] = useState(0);
  
  // TODO: Crear estado para el nombre
  // const [nombre, setNombre] = useState("");
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 1 - useState Básico</h2>
      
      {/* Sección del contador */}
      <div style={estilos.seccion}>
        <h3>Contador</h3>
        {/* TODO: Mostrar el valor del contador */}
        <p style={estilos.numero}>0</p>
        
        <div style={estilos.botones}>
          {/* TODO: Botón decrementar */}
          <button style={estilos.boton}>- Restar</button>
          
          {/* TODO: Botón incrementar */}
          <button style={estilos.boton}>+ Sumar</button>
          
          {/* TODO: Botón reiniciar */}
          <button style={estilos.botonSecundario}>Reiniciar</button>
        </div>
      </div>
      
      {/* Sección del nombre */}
      <div style={estilos.seccion}>
        <h3>Tu Nombre</h3>
        {/* TODO: Input controlado con value y onChange */}
        <input 
          type="text"
          placeholder="Escribe tu nombre"
          style={estilos.input}
        />
        
        {/* TODO: Mostrar el nombre en tiempo real */}
        <p>Hola, !</p>
      </div>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  seccion: { backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '15px' },
  numero: { fontSize: '48px', textAlign: 'center', color: '#007bff' },
  botones: { display: 'flex', gap: '10px', justifyContent: 'center' },
  boton: { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  botonSecundario: { backgroundColor: '#6c757d', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  input: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', marginBottom: '10px' },
};

export default Ejercicio1;
