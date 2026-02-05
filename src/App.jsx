/**
 * App.jsx - Navegación principal de ejemplos de React
 * 
 * Este proyecto contiene ejemplos didácticos de los conceptos
 * fundamentales de React para prepararte para React Native.
 */

import { useState } from 'react';

// Importar todos los ejemplos
import ComponentesJSX from './examples/01-ComponentesJSX';
import Props from './examples/02-Props';
import UseState from './examples/03-UseState';
import UseEffect from './examples/04-UseEffect';
import UseContext from './examples/05-UseContext';
import ManejoDeListas from './examples/06-ManejoDeListas';
import FetchAPI from './examples/07-FetchAPI';


// Definición de los ejemplos disponibles
const ejemplos = [
  { 
    id: 'componentes', 
    titulo: '01 - Componentes y JSX', 
    componente: ComponentesJSX,
    descripcion: 'Componentes funcionales, JSX, expresiones, condicionales'
  },
  { 
    id: 'props', 
    titulo: '02 - Props', 
    componente: Props,
    descripcion: 'Pasar datos entre componentes, destructuring, children'
  },
  { 
    id: 'usestate', 
    titulo: '03 - useState', 
    componente: UseState,
    descripcion: 'Estado local, inmutabilidad, objetos y arrays'
  },
  { 
    id: 'useeffect', 
    titulo: '04 - useEffect', 
    componente: UseEffect,
    descripcion: 'Efectos secundarios, ciclo de vida, cleanup'
  },
  { 
    id: 'usecontext', 
    titulo: '05 - useContext', 
    componente: UseContext,
    descripcion: 'Estado global, Provider, Consumer'
  },
  { 
    id: 'listas', 
    titulo: '06 - Manejo de Listas', 
    componente: ManejoDeListas,
    descripcion: 'map, filter, find, keys, inmutabilidad'
  },
  { 
    id: 'fetch', 
    titulo: '07 - Fetch API', 
    componente: FetchAPI,
    descripcion: 'GET, POST, PUT, DELETE, manejo de errores'
  }
  
];

function App() {
  const [ejemploActual, setEjemploActual] = useState('componentes');
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  // Encontrar el ejemplo actual
  const ejemplo = ejemplos.find(e => e.id === ejemploActual);
  const ComponenteActual = ejemplo?.componente;
  
  // Navegación
  const irAnterior = () => {
    const indexActual = ejemplos.findIndex(e => e.id === ejemploActual);
    if (indexActual > 0) {
      setEjemploActual(ejemplos[indexActual - 1].id);
    }
  };
  
  const irSiguiente = () => {
    const indexActual = ejemplos.findIndex(e => e.id === ejemploActual);
    if (indexActual < ejemplos.length - 1) {
      setEjemploActual(ejemplos[indexActual + 1].id);
    }
  };
  
  const indexActual = ejemplos.findIndex(e => e.id === ejemploActual);
  
  return (
    <div style={estilos.app}>
      {/* Header */}
      <header style={estilos.header}>
        <div style={estilos.headerContent}>
          <h1 style={estilos.logo}>⚛️ React Basics</h1>
          
          {/* Menú hamburguesa para móvil */}
          <button 
            style={estilos.menuBoton}
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Navegación */}
        <nav style={{
          ...estilos.nav,
          display: menuAbierto ? 'flex' : undefined
        }}>
          {ejemplos.map((ej) => (
            <button
              key={ej.id}
              onClick={() => {
                setEjemploActual(ej.id);
                setMenuAbierto(false);
              }}
              style={{
                ...estilos.navBoton,
                backgroundColor: ejemploActual === ej.id ? '#0056b3' : 'transparent',
                color: ejemploActual === ej.id ? 'white' : '#ccc',
              }}
            >
              {ej.titulo.split(' - ')[0]}
            </button>
          ))}
        </nav>
      </header>
      
      {/* Breadcrumb / Info */}
      <div style={estilos.breadcrumb}>
        <span style={estilos.breadcrumbTitulo}>{ejemplo?.titulo}</span>
        <span style={estilos.breadcrumbDesc}>{ejemplo?.descripcion}</span>
      </div>
      
      {/* Contenido principal */}
      <main style={estilos.main}>
        {ComponenteActual && <ComponenteActual />}
      </main>
      
      {/* Footer con navegación */}
      <footer style={estilos.footer}>
        <button
          style={{
            ...estilos.footerBoton,
            opacity: indexActual === 0 ? 0.5 : 1,
          }}
          onClick={irAnterior}
          disabled={indexActual === 0}
        >
          ← Anterior
        </button>
        
        <span style={estilos.footerInfo}>
          {indexActual + 1} / {ejemplos.length}
        </span>
        
        <button
          style={{
            ...estilos.footerBoton,
            opacity: indexActual === ejemplos.length - 1 ? 0.5 : 1,
          }}
          onClick={irSiguiente}
          disabled={indexActual === ejemplos.length - 1}
        >
          Siguiente →
        </button>
      </footer>
    </div>
  );
}

// ============================================
// ESTILOS
// ============================================
const estilos = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#1a1a2e',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    color: '#61dafb',
    margin: 0,
    fontSize: '1.5rem',
  },
  menuBoton: {
    display: 'none',
    backgroundColor: 'transparent',
    border: '1px solid #61dafb',
    color: '#61dafb',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  nav: {
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '10px',
    maxWidth: '1200px',
    margin: '10px auto 0',
  },
  navBoton: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'all 0.2s ease',
  },
  breadcrumb: {
    backgroundColor: '#16213e',
    padding: '15px 20px',
    textAlign: 'center',
  },
  breadcrumbTitulo: {
    color: '#61dafb',
    fontWeight: 'bold',
    display: 'block',
    fontSize: '1.2rem',
  },
  breadcrumbDesc: {
    color: '#aaa',
    fontSize: '0.9rem',
    marginTop: '5px',
    display: 'block',
  },
  main: {
    flex: 1,
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  },
  footer: {
    backgroundColor: '#1a1a2e',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    bottom: 0,
  },
  footerBoton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'opacity 0.2s',
  },
  footerInfo: {
    color: '#aaa',
    fontSize: '14px',
  },
};

// CSS global para responsive
const globalStyles = document.createElement('style');
globalStyles.textContent = `
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  }
  
  @media (max-width: 768px) {
    header nav {
      display: none !important;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background-color: #1a1a2e;
      padding: 10px;
      border-top: 1px solid #333;
    }
    
    header nav[style*="flex"] {
      display: flex !important;
    }
    
    header button[style*="display: none"] {
      display: block !important;
    }
  }
`;
document.head.appendChild(globalStyles);

export default App;
