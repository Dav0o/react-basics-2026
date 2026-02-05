/**
 * EJERCICIO 1 - useEffect al Montar
 * 
 * OBJETIVO: Usar useEffect con array de dependencias vacío
 * 
 * INSTRUCCIONES:
 * 1. Usa useEffect para mostrar un mensaje en consola cuando el componente se monta
 * 2. Usa useEffect para actualizar el título del documento (document.title)
 * 3. Crea un estado "cargado" que cambie a true después de 2 segundos
 * 4. Muestra "Cargando..." mientras cargado es false
 */

import { useState, useEffect } from 'react';

const Ejercicio1 = () => {
  // TODO: Crear estado "cargado" inicializado en false
  
  // TODO: useEffect que muestre en consola "Componente montado"
  // useEffect(() => {
  //   console.log("Componente montado");
  // }, []);
  
  // TODO: useEffect que cambie el título del documento
  // useEffect(() => {
  //   document.title = "Ejercicio useEffect";
  // }, []);
  
  // TODO: useEffect que cambie "cargado" a true después de 2 segundos
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCargado(true);
  //   }, 2000);
  // }, []);
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 1 - useEffect al Montar</h2>
      
      {/* TODO: Mostrar "Cargando..." o "¡Contenido cargado!" según el estado */}
      <p>Cargando...</p>
      
      <p style={estilos.nota}>
        Abre la consola para ver el mensaje de montaje.
        El título de la página debería cambiar.
      </p>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  nota: { backgroundColor: '#fff3cd', padding: '10px', borderRadius: '4px', marginTop: '15px' },
};

export default Ejercicio1;
