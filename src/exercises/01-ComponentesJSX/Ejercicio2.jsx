/**
 * EJERCICIO 2 - Expresiones JSX y Renderizado Condicional
 * 
 * OBJETIVO: Usar expresiones JavaScript dentro de JSX y renderizado condicional
 * 
 * INSTRUCCIONES:
 * 1. Usa la variable "usuario" para mostrar su nombre y edad
 * 2. Calcula y muestra el año de nacimiento del usuario
 * 3. Muestra "Mayor de edad" o "Menor de edad" según la edad (usar ternario)
 * 4. Si el usuario tiene email, muéstralo. Si no, muestra "Sin email" (usar &&)
 * 5. Muestra la lista de hobbies separados por coma
 */

const Ejercicio2 = () => {
  const usuario = {
    nombre: "Carlos",
    edad: 25,
    email: "carlos@email.com", // Prueba cambiando a null
    hobbies: ["Programar", "Leer", "Videojuegos"]
  };
  
  const añoActual = new Date().getFullYear();
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 2 - Expresiones y Condicionales</h2>
      
      {/* TODO: Mostrar "Nombre: Carlos" usando la variable */}
      <p>Nombre: </p>
      
      {/* TODO: Mostrar "Edad: 25 años" */}
      <p>Edad: </p>
      
      {/* TODO: Calcular y mostrar "Año de nacimiento: XXXX" */}
      <p>Año de nacimiento: </p>
      
      {/* TODO: Mostrar "Mayor de edad" o "Menor de edad" con ternario */}
      <p>Estado: </p>
      
      {/* TODO: Mostrar email si existe, sino "Sin email" */}
      <p>Email: </p>
      
      {/* TODO: Mostrar hobbies separados por coma usando .join() */}
      <p>Hobbies: </p>
      
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

export default Ejercicio2;
