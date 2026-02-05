/**
 * EJERCICIO 2 - useState con Objetos
 * 
 * OBJETIVO: Manejar estado de objetos con inmutabilidad
 * 
 * INSTRUCCIONES:
 * 1. Crea un estado "usuario" como objeto con: nombre, email, edad
 * 2. Crea inputs para modificar cada campo del usuario
 * 3. Usa el spread operator (...) para actualizar el objeto
 * 4. Muestra los datos del usuario en formato JSON
 */

import { useState } from 'react';

const Ejercicio2 = () => {
  // TODO: Crear estado usuario como objeto
  // const [usuario, setUsuario] = useState({
  //   nombre: "",
  //   email: "",
  //   edad: 0
  // });
  
  // TODO: Crear función para actualizar un campo específico
  // const actualizarCampo = (campo, valor) => {
  //   setUsuario({ ...usuario, [campo]: valor });
  // };
  
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 2 - useState con Objetos</h2>
      
      <div style={estilos.formulario}>
        {/* TODO: Input para nombre */}
        <input 
          type="text"
          placeholder="Nombre"
          style={estilos.input}
        />
        
        {/* TODO: Input para email */}
        <input 
          type="email"
          placeholder="Email"
          style={estilos.input}
        />
        
        {/* TODO: Input para edad */}
        <input 
          type="number"
          placeholder="Edad"
          style={estilos.input}
        />
      </div>
      
      <div style={estilos.resultado}>
        <h4>Datos del Usuario:</h4>
        {/* TODO: Mostrar el objeto usuario en formato JSON */}
        <pre>
          {/* JSON.stringify(usuario, null, 2) */}
        </pre>
      </div>
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' },
  input: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px' },
  resultado: { backgroundColor: '#e9ecef', padding: '15px', borderRadius: '8px' },
};

export default Ejercicio2;
