/**
 * EJERCICIO 3 - useEffect con Cleanup
 * 
 * OBJETIVO: Usar la función de limpieza de useEffect
 * 
 * INSTRUCCIONES:
 * 1. Crea un cronómetro que cuente segundos
 * 2. Usa setInterval dentro de useEffect para incrementar el contador
 * 3. Implementa la función de cleanup para limpiar el intervalo
 * 4. Agrega un botón para pausar/reanudar el cronómetro
 */

import { useState, useEffect } from 'react';

const Ejercicio3 = () => {
  // TODO: Estado para los segundos
  // const [segundos, setSegundos] = useState(0);
  
  // TODO: Estado para saber si está corriendo
  // const [corriendo, setCorriendo] = useState(false);
  
  // TODO: useEffect con setInterval y cleanup
  // useEffect(() => {
  //   let intervalo;
  //   
  //   if (corriendo) {
  //     intervalo = setInterval(() => {
  //       setSegundos(prev => prev + 1);
  //     }, 1000);
  //   }
  //   
  //   // Cleanup: limpiar el intervalo
  //   return () => {
  //     if (intervalo) clearInterval(intervalo);
  //   };
  // }, [corriendo]);
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 3 - useEffect con Cleanup (Cronómetro)</h2>
      
      {/* TODO: Mostrar los segundos */}
      <p style={estilos.tiempo}>0s</p>
      
      <div style={estilos.botones}>
        {/* TODO: Botón Iniciar/Pausar */}
        <button style={estilos.boton}>
          Iniciar
        </button>
        
        {/* TODO: Botón Reiniciar */}
        <button style={estilos.botonSecundario}>
          Reiniciar
        </button>
      </div>
      
      <p style={estilos.nota}>
        El cleanup es importante para evitar memory leaks.
        Sin él, el intervalo seguiría corriendo aunque el componente se desmonte.
      </p>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px', textAlign: 'center' },
  tiempo: { fontSize: '72px', fontWeight: 'bold', color: '#007bff', margin: '20px 0' },
  botones: { display: 'flex', gap: '10px', justifyContent: 'center' },
  boton: { backgroundColor: '#28a745', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
  botonSecundario: { backgroundColor: '#6c757d', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
  nota: { backgroundColor: '#d4edda', padding: '15px', borderRadius: '4px', marginTop: '20px', textAlign: 'left' },
};

export default Ejercicio3;
