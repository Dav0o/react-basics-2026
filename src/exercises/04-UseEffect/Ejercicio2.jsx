/**
 * EJERCICIO 2 - useEffect con Dependencias
 * 
 * OBJETIVO: Usar useEffect que reaccione a cambios en el estado
 * 
 * INSTRUCCIONES:
 * 1. Crea un estado "contador" con useState
 * 2. Usa useEffect para actualizar el título del documento con el valor del contador
 *    (ej: "Contador: 5")
 * 3. Usa useEffect para mostrar en consola cada vez que el contador cambia
 * 4. Agrega otro estado "nombre" y un useEffect separado que reaccione a él
 */

import { useState, useEffect } from 'react';

const Ejercicio2 = () => {
  // TODO: Crear estado contador
  
  // TODO: Crear estado nombre
  
  // TODO: useEffect que actualice document.title cuando cambie contador
  // useEffect(() => {
  //   document.title = `Contador: ${contador}`;
  // }, [contador]);
  
  // TODO: useEffect que haga console.log cuando cambie contador
  
  // TODO: useEffect que haga console.log cuando cambie nombre
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 2 - useEffect con Dependencias</h2>
      
      <div style={estilos.seccion}>
        <h3>Contador</h3>
        {/* TODO: Mostrar contador y botones */}
        <p style={estilos.numero}>0</p>
        <button style={estilos.boton}>Incrementar</button>
      </div>
      
      <div style={estilos.seccion}>
        <h3>Nombre</h3>
        {/* TODO: Input para el nombre */}
        <input 
          type="text"
          placeholder="Escribe un nombre"
          style={estilos.input}
        />
      </div>
      
      <p style={estilos.nota}>
        Revisa la consola y el título de la página al interactuar.
      </p>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  seccion: { backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '15px' },
  numero: { fontSize: '36px', textAlign: 'center', color: '#007bff' },
  boton: { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  input: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', boxSizing: 'border-box' },
  nota: { backgroundColor: '#fff3cd', padding: '10px', borderRadius: '4px' },
};

export default Ejercicio2;
