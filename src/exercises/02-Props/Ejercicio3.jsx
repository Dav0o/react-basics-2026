/**
 * EJERCICIO 3 - Props como Funciones (Callbacks)
 * 
 * OBJETIVO: Pasar funciones como props para comunicación hijo → padre
 * 
 * INSTRUCCIONES:
 * 1. Crea un componente "Boton" que reciba:
 *    - texto: el texto del botón
 *    - onClick: función a ejecutar al hacer clic
 *    - color: color de fondo (por defecto "#007bff")
 * 2. Desde el componente principal, pasa diferentes funciones que:
 *    - Muestren un alert con un mensaje
 *    - Impriman algo en consola
 * 3. Crea al menos 3 botones con diferentes acciones
 */

// TODO: Crear el componente Boton que reciba texto, onClick, y color


const Ejercicio3 = () => {
  // TODO: Crear las funciones que pasarás como props
  // Ejemplo: const handleSaludar = () => alert("¡Hola!");
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 3 - Funciones como Props</h2>
      
      <div style={estilos.botones}>
        {/* TODO: Renderiza Boton con texto="Saludar" y función que muestre alert */}
        
        {/* TODO: Renderiza Boton con texto="Despedir" y otra función */}
        
        {/* TODO: Renderiza Boton con texto="Log" y función que use console.log */}
        
      </div>
    </div>
  );
};

const estilos = {
  contenedor: {
    padding: '20px',
  },
  botones: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  }
};

export default Ejercicio3;
