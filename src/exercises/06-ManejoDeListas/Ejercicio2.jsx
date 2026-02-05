/**
 * EJERCICIO 2 - filter() y find()
 * 
 * OBJETIVO: Filtrar y buscar elementos en arrays
 * 
 * INSTRUCCIONES:
 * 1. Crea un estado para guardar el filtro de categoría seleccionado
 * 2. Usa filter() para mostrar solo los productos de la categoría seleccionada
 * 3. Crea un input de búsqueda y usa find() o filter() para buscar por nombre
 * 4. Muestra cuántos productos hay en la lista filtrada
 */

import { useState } from 'react';

const Ejercicio2 = () => {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999, categoria: "Tecnología" },
    { id: 2, nombre: "Camisa", precio: 29, categoria: "Ropa" },
    { id: 3, nombre: "Libro React", precio: 45, categoria: "Libros" },
    { id: 4, nombre: "Auriculares", precio: 79, categoria: "Tecnología" },
    { id: 5, nombre: "Zapatillas", precio: 120, categoria: "Ropa" },
    { id: 6, nombre: "Monitor", precio: 299, categoria: "Tecnología" },
  ];
  
  const categorias = ["Todos", "Tecnología", "Ropa", "Libros"];
  
  // TODO: Estado para la categoría seleccionada
  // const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  
  // TODO: Estado para la búsqueda
  // const [busqueda, setBusqueda] = useState("");
  
  // TODO: Filtrar productos por categoría y búsqueda
  // const productosFiltrados = productos
  //   .filter(p => categoriaSeleccionada === "Todos" || p.categoria === categoriaSeleccionada)
  //   .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 2 - filter() y find()</h2>
      
      {/* TODO: Botones de categoría */}
      <div style={estilos.filtros}>
        {categorias.map(cat => (
          <button key={cat} style={estilos.boton}>
            {cat}
          </button>
        ))}
      </div>
      
      {/* TODO: Input de búsqueda */}
      <input 
        type="text"
        placeholder="Buscar producto..."
        style={estilos.input}
      />
      
      {/* TODO: Lista filtrada */}
      <ul style={estilos.lista}>
        <li>Productos filtrados aquí...</li>
      </ul>
      
      {/* TODO: Contador de resultados */}
      <p>Mostrando 0 productos</p>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  filtros: { display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' },
  boton: { padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#e9ecef' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '15px', boxSizing: 'border-box' },
  lista: { listStyle: 'none', padding: 0 },
};

export default Ejercicio2;
