/**
 * EJERCICIO 3 - Inmutabilidad y CRUD
 * 
 * OBJETIVO: Implementar operaciones CRUD manteniendo inmutabilidad
 * 
 * INSTRUCCIONES:
 * 1. Implementa agregar un nuevo item usando spread operator
 * 2. Implementa eliminar un item usando filter()
 * 3. Implementa editar un item usando map()
 * 4. Implementa marcar como completado usando map()
 */

import { useState } from 'react';

const Ejercicio3 = () => {
  // TODO: Estado para la lista de tareas
  // const [tareas, setTareas] = useState([
  //   { id: 1, texto: "Aprender React", completada: false },
  //   { id: 2, texto: "Practicar ejercicios", completada: false },
  // ]);
  
  // TODO: Estado para el input de nueva tarea
  // const [nuevaTarea, setNuevaTarea] = useState("");
  
  // TODO: Función para agregar tarea (usar spread)
  // const agregarTarea = () => {
  //   if (!nuevaTarea.trim()) return;
  //   setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
  //   setNuevaTarea("");
  // };
  
  // TODO: Función para eliminar tarea (usar filter)
  // const eliminarTarea = (id) => {
  //   setTareas(tareas.filter(t => t.id !== id));
  // };
  
  // TODO: Función para toggle completada (usar map)
  // const toggleCompletada = (id) => {
  //   setTareas(tareas.map(t => 
  //     t.id === id ? { ...t, completada: !t.completada } : t
  //   ));
  // };
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 3 - CRUD con Inmutabilidad</h2>
      
      {/* TODO: Input y botón para agregar */}
      <div style={estilos.inputContainer}>
        <input 
          type="text"
          placeholder="Nueva tarea..."
          style={estilos.input}
        />
        <button style={estilos.boton}>Agregar</button>
      </div>
      
      {/* TODO: Lista de tareas */}
      <ul style={estilos.lista}>
        <li style={estilos.item}>
          <span>Tarea de ejemplo</span>
          <div>
            <button>✅</button>
            <button>🗑️</button>
          </div>
        </li>
      </ul>
      
      {/* TODO: Estadísticas */}
      <p>Completadas: 0 / 0</p>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  inputContainer: { display: 'flex', gap: '10px', marginBottom: '15px' },
  input: { flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px' },
  boton: { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  lista: { listStyle: 'none', padding: 0 },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f5f5f5', marginBottom: '5px', borderRadius: '4px' },
};

export default Ejercicio3;
