/**
 * EJERCICIO 2 - useContext con Tema
 * 
 * OBJETIVO: Crear un sistema de tema claro/oscuro con Context
 * 
 * INSTRUCCIONES:
 * 1. Crea un contexto para el tema (TemaContext)
 * 2. El Provider debe manejar si es tema "light" o "dark"
 * 3. Crea un objeto de estilos que cambie según el tema
 * 4. Crea componentes que usen los estilos del tema
 * 5. Agrega un botón para alternar entre temas
 */

import { createContext, useContext, useState } from 'react';

// TODO: Crear el TemaContext

// TODO: Crear el TemaProvider con estado y estilos para cada tema
// const temas = {
//   light: { bg: '#ffffff', text: '#333333', card: '#f5f5f5' },
//   dark: { bg: '#1a1a2e', text: '#ffffff', card: '#16213e' }
// };

// TODO: Crear componentes que usen el tema

const Ejercicio2 = () => {
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 2 - useContext con Tema</h2>
      
      {/* TODO: Envolver con TemaProvider */}
      <div style={estilos.caja}>
        <p>Esta caja debería cambiar de color con el tema</p>
        <button style={estilos.boton}>🌙 / ☀️ Cambiar Tema</button>
      </div>
      
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  caja: { padding: '30px', borderRadius: '8px', textAlign: 'center' },
  boton: { padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '15px' },
};

export default Ejercicio2;
