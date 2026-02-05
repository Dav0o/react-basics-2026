/**
 * EJERCICIO 1 - Componentes y JSX
 * 
 * OBJETIVO: Crear componentes funcionales básicos con JSX
 * 
 * INSTRUCCIONES:
 * 1. Crea un componente llamado "Saludo" que muestre "¡Hola Mundo!"
 * 2. Crea un componente llamado "MiNombre" que muestre tu nombre
 * 3. Crea un componente llamado "FechaActual" que muestre la fecha de hoy
 *    (usa new Date().toLocaleDateString())
 * 4. Renderiza los tres componentes en el componente principal
 */

// TODO: Crear el componente Saludo


// TODO: Crear el componente MiNombre


// TODO: Crear el componente FechaActual


// Componente principal - Renderiza aquí los componentes creados
const Ejercicio1 = () => {
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 1 - Componentes Básicos</h2>
      
      {/* TODO: Renderizar el componente Saludo */}
      
      {/* TODO: Renderizar el componente MiNombre */}
      
      {/* TODO: Renderizar el componente FechaActual */}
      
    </div>
  );
};

const estilos = {
  contenedor: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  }
};

export default Ejercicio1;
