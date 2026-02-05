/**
 * EJERCICIO 1 - Props Básicas
 * 
 * OBJETIVO: Pasar y recibir props en componentes
 * 
 * INSTRUCCIONES:
 * 1. Crea un componente "TarjetaProducto" que reciba las props:
 *    - nombre (string)
 *    - precio (number)
 *    - disponible (boolean)
 * 2. El componente debe mostrar el nombre, precio formateado ($XX.XX)
 *    y un indicador de disponibilidad (✅ o ❌)
 * 3. Renderiza 3 tarjetas con diferentes productos
 */

// TODO: Crear el componente TarjetaProducto que reciba props
// Tip: Usa destructuring en los parámetros { nombre, precio, disponible }


const Ejercicio1 = () => {
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 1 - Props Básicas</h2>
      
      <div style={estilos.grid}>
        {/* TODO: Renderiza TarjetaProducto con nombre="Laptop", precio=999.99, disponible=true */}
        
        {/* TODO: Renderiza TarjetaProducto con nombre="Mouse", precio=29.50, disponible=true */}
        
        {/* TODO: Renderiza TarjetaProducto con nombre="Teclado", precio=79.00, disponible=false */}
        
      </div>
    </div>
  );
};

const estilos = {
  contenedor: {
    padding: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }
};

export default Ejercicio1;
