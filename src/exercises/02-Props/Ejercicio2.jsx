/**
 * EJERCICIO 2 - Props con Children y Valores por Defecto
 * 
 * OBJETIVO: Usar children prop y valores por defecto
 * 
 * INSTRUCCIONES:
 * 1. Crea un componente "Alerta" que reciba:
 *    - tipo: "info" | "exito" | "error" (por defecto "info")
 *    - children: el contenido de la alerta
 * 2. El componente debe cambiar su color de fondo según el tipo:
 *    - info: azul claro (#cce5ff)
 *    - exito: verde claro (#d4edda)
 *    - error: rojo claro (#f8d7da)
 * 3. Renderiza 3 alertas de diferentes tipos
 */

// TODO: Crear el componente Alerta
// Tip: Usa valores por defecto: { tipo = "info", children }


const Ejercicio2 = () => {
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 2 - Children y Valores por Defecto</h2>
      
      {/* TODO: Alerta de tipo "info" con mensaje informativo */}
      
      {/* TODO: Alerta de tipo "exito" con mensaje de éxito */}
      
      {/* TODO: Alerta de tipo "error" con mensaje de error */}
      
      {/* TODO: Alerta sin tipo (debe usar el valor por defecto) */}
      
    </div>
  );
};

const estilos = {
  contenedor: {
    padding: '20px',
  }
};

export default Ejercicio2;
