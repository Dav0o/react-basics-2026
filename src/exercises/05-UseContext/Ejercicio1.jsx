/**
 * EJERCICIO 1 - useContext Básico
 * 
 * OBJETIVO: Crear y consumir un contexto simple
 * 
 * INSTRUCCIONES:
 * 1. Crea un contexto para el idioma de la aplicación (IdiomaContext)
 * 2. Crea un Provider que maneje el estado del idioma ("es" o "en")
 * 3. Crea componentes que consuman el contexto y muestren texto según el idioma
 * 4. Agrega un botón para cambiar el idioma
 */

import { createContext, useContext, useState } from 'react';

// TODO: Crear el contexto
// const IdiomaContext = createContext();

// TODO: Crear el Provider
// function IdiomaProvider({ children }) {
//   const [idioma, setIdioma] = useState("es");
//   
//   const toggleIdioma = () => {
//     setIdioma(prev => prev === "es" ? "en" : "es");
//   };
//   
//   return (
//     <IdiomaContext.Provider value={{ idioma, toggleIdioma }}>
//       {children}
//     </IdiomaContext.Provider>
//   );
// }

// TODO: Crear componente que consuma el contexto
// function Saludo() {
//   const { idioma } = useContext(IdiomaContext);
//   return <h3>{idioma === "es" ? "¡Hola!" : "Hello!"}</h3>;
// }

// TODO: Crear botón que cambie el idioma
// function BotonIdioma() {
//   const { idioma, toggleIdioma } = useContext(IdiomaContext);
//   return (
//     <button onClick={toggleIdioma}>
//       {idioma === "es" ? "🇬🇧 English" : "🇪🇸 Español"}
//     </button>
//   );
// }

const Ejercicio1 = () => {
  return (
    <div style={estilos.contenedor}>
      <h2>Ejercicio 1 - useContext Básico</h2>
      
      {/* TODO: Envolver con el Provider */}
      <div style={estilos.caja}>
        {/* TODO: Renderizar Saludo */}
        <p>Saludo aquí</p>
        
        {/* TODO: Renderizar BotonIdioma */}
        <button style={estilos.boton}>Cambiar Idioma</button>
      </div>
      
    </div>
  );
};

const estilos = {
  contenedor: { padding: '20px' },
  caja: { backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', textAlign: 'center' },
  boton: { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' },
};

export default Ejercicio1;
