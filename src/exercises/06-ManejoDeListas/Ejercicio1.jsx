/**
 * EJERCICIO 1 - map() y keys
 * 
 * OBJETIVO: Renderizar listas correctamente con map() y keys
 * 
 * INSTRUCCIONES:
 * 1. Usa map() para renderizar la lista de productos
 * 2. Asegúrate de usar la key correcta (id del producto)
 * 3. Muestra nombre, precio y categoría de cada producto
 * 4. Calcula y muestra el precio total de todos los productos
 */

const Ejercicio1 = () => {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999, categoria: "Tecnología" },
    { id: 2, nombre: "Camisa", precio: 29, categoria: "Ropa" },
    { id: 3, nombre: "Libro React", precio: 45, categoria: "Libros" },
    { id: 4, nombre: "Auriculares", precio: 79, categoria: "Tecnología" },
    { id: 5, nombre: "Zapatillas", precio: 120, categoria: "Ropa" },
  ];
  
  // TODO: Calcular el total de precios usando reduce()
  // const total = productos.reduce((sum, p) => sum + p.precio, 0);
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 1 - map() y keys</h2>
      
      <ul style={estilos.lista}>
        {/* TODO: Usar map() para renderizar cada producto */}
        {/* Recuerda usar key={producto.id} */}
        <li>Producto aquí...</li>
      </ul>
      
      {/* TODO: Mostrar el total */}
      <p style={estilos.total}>Total: $0</p>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  lista: { listStyle: 'none', padding: 0 },
  item: { backgroundColor: '#f5f5f5', padding: '15px', marginBottom: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  total: { fontSize: '20px', fontWeight: 'bold', textAlign: 'right', marginTop: '15px' },
};

export default Ejercicio1;
