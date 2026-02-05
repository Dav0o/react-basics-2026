/**
 * EJERCICIO 3 - useState con Arrays
 * 
 * OBJETIVO: Manejar estado de arrays con inmutabilidad
 * 
 * INSTRUCCIONES:
 * 1. Crea un estado "items" como array vacío
 * 2. Crea un input y botón para agregar nuevos items
 * 3. Implementa la función para agregar items (con spread operator)
 * 4. Implementa la función para eliminar items (con filter)
 * 5. Muestra la lista de items con un botón de eliminar en cada uno
 */

import { useState } from 'react';

const Ejercicio3 = () => {
  // TODO: Estado para la lista de items
  // const [items, setItems] = useState([]);
  
  // TODO: Estado para el input del nuevo item
  // const [nuevoItem, setNuevoItem] = useState("");
  
  // TODO: Función para agregar item
  // const agregarItem = () => {
  //   if (nuevoItem.trim() === "") return;
  //   setItems([...items, { id: Date.now(), texto: nuevoItem }]);
  //   setNuevoItem("");
  // };
  
  // TODO: Función para eliminar item
  // const eliminarItem = (id) => {
  //   setItems(items.filter(item => item.id !== id));
  // };
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 3 - useState con Arrays</h2>
      
      <div style={estilos.inputContainer}>
        {/* TODO: Input para nuevo item */}
        <input 
          type="text"
          placeholder="Nuevo item..."
          style={estilos.input}
        />
        
        {/* TODO: Botón para agregar */}
        <button style={estilos.boton}>Agregar</button>
      </div>
      
      <ul style={estilos.lista}>
        {/* TODO: Mapear y mostrar los items */}
        {/* {items.map(item => (
          <li key={item.id}>
            {item.texto}
            <button onClick={() => eliminarItem(item.id)}>🗑️</button>
          </li>
        ))} */}
      </ul>
      
      {/* TODO: Mostrar total de items */}
      <p>Total: 0 items</p>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  inputContainer: { display: 'flex', gap: '10px', marginBottom: '15px' },
  input: { flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px' },
  boton: { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  lista: { listStyle: 'none', padding: 0 },
};

export default Ejercicio3;
