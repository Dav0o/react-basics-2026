/**
 * EJERCICIO 3 - Estilos en JSX
 * 
 * OBJETIVO: Aplicar estilos inline en JSX
 * 
 * INSTRUCCIONES:
 * 1. Crea una tarjeta con estilos inline que tenga:
 *    - Fondo blanco
 *    - Padding de 20px
 *    - Borde redondeado de 10px
 *    - Sombra (boxShadow)
 * 2. Dentro de la tarjeta, crea:
 *    - Un título (h3) de color azul (#007bff)
 *    - Un párrafo con texto gris (#666)
 *    - Un botón con fondo verde (#28a745), texto blanco, sin borde
 * 3. El botón debe cambiar de color según la variable "activo"
 *    (verde si activo, gris si no)
 */

const Ejercicio3 = () => {
  const activo = true; // Prueba cambiando a false
  
  // TODO: Crear objeto de estilos para la tarjeta
  const estiloTarjeta = {
    // ...completa los estilos
  };
  
  // TODO: Crear objeto de estilos para el título
  const estiloTitulo = {
    // ...completa los estilos
  };
  
  // TODO: Crear objeto de estilos para el botón (dinámico según 'activo')
  const estiloBoton = {
    // ...completa los estilos
  };
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 3 - Estilos en JSX</h2>
      
      {/* TODO: Crear la tarjeta con los estilos aplicados */}
      <div>
        <h3>Título de la Tarjeta</h3>
        <p>Esta es una descripción de la tarjeta con estilos aplicados.</p>
        <button>
          {activo ? "Activo" : "Inactivo"}
        </button>
      </div>
      
    </div>
  );
};

const estilos = {
  contenedor: {
    padding: '20px',
  }
};

export default Ejercicio3;
