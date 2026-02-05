/**
 * 04 - useEffect Hook
 * 
 * useEffect permite ejecutar efectos secundarios en componentes funcionales.
 * Un "efecto secundario" es cualquier cosa que afecte algo fuera del componente:
 * - Llamadas a APIs
 * - Subscripciones
 * - Timers (setTimeout, setInterval)
 * - Manipulación del DOM
 * - localStorage
 * 
 * SINTAXIS:
 * useEffect(() => {
 *   // Código del efecto
 *   return () => {
 *     // Cleanup (limpieza) - opcional
 *   };
 * }, [dependencias]);
 * 
 * DEPENDENCIAS:
 * - [] vacío: ejecuta solo al montar
 * - [var1, var2]: ejecuta cuando cambian var1 o var2
 * - sin array: ejecuta en cada render (¡evitar!)
 */

import { useState, useEffect } from 'react';

// ============================================
// 1. EFECTO SIN DEPENDENCIAS - Cada render
// ============================================
function EfectoCadaRender() {
  const [contador, setContador] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  
  // ⚠️ Sin array de dependencias = ejecuta en CADA render
  // Generalmente NO es lo que quieres
  useEffect(() => {
    console.log('Efecto ejecutado - render #', renderCount);
    setRenderCount(prev => prev + 1);
  }); // ← Sin dependencias
  
  // Nota: Este ejemplo está comentado porque causaría loop infinito
  // Lo dejamos para ilustrar el concepto
  
  return (
    <div style={estilos.caja}>
      <h3>⚠️ Efecto Sin Dependencias (No recomendado)</h3>
      <p>Contador: {contador}</p>
      <button style={estilos.boton} onClick={() => setContador(c => c + 1)}>
        Incrementar
      </button>
      <p style={estilos.advertencia}>
        Sin array de dependencias, el efecto se ejecuta en CADA render.
        Esto puede causar loops infinitos.
      </p>
    </div>
  );
}


// ============================================
// 2. EFECTO AL MONTAR - Array vacío []
// ============================================
function EfectoAlMontar() {
  const [mensaje, setMensaje] = useState("Cargando...");
  const [hora, setHora] = useState("");
  
  // Con [] vacío = ejecuta SOLO una vez al montar el componente
  useEffect(() => {
    console.log('Componente montado!');
    
    // Simular carga inicial
    setTimeout(() => {
      setMensaje("¡Componente listo!");
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    
    // El return es la función de cleanup (limpieza)
    return () => {
      console.log('Componente desmontado!');
    };
  }, []); // ← Array vacío = solo al montar
  
  return (
    <div style={estilos.caja}>
      <h3>✅ Efecto al Montar (Array Vacío)</h3>
      <p>{mensaje}</p>
      {hora && <p>Montado a las: {hora}</p>}
      <p style={estilos.nota}>
        Con <code>[]</code> vacío, el efecto se ejecuta una sola vez
        cuando el componente se monta.
      </p>
    </div>
  );
}


// ============================================
// 3. EFECTO CON DEPENDENCIAS
// ============================================
function EfectoConDependencias() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  
  // Ejecuta cuando cambia 'busqueda'
  useEffect(() => {
    // Simular búsqueda
    const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Mango", "Naranja"];
    
    if (busqueda.length > 0) {
      const filtradas = frutas.filter(f => 
        f.toLowerCase().includes(busqueda.toLowerCase())
      );
      setResultados(filtradas);
    } else {
      setResultados([]);
    }
    
    console.log(`Buscando: "${busqueda}"`);
  }, [busqueda]); // ← Se ejecuta cuando 'busqueda' cambia
  
  return (
    <div style={estilos.caja}>
      <h3>Efecto con Dependencias</h3>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar fruta..."
        style={estilos.input}
      />
      
      {resultados.length > 0 && (
        <ul>
          {resultados.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>
      )}
      
      <p style={estilos.nota}>
        El efecto se ejecuta cada vez que <code>busqueda</code> cambia.
      </p>
    </div>
  );
}


// ============================================
// 4. EFECTO CON CLEANUP - Timer
// ============================================
function EfectoConCleanup() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  
  useEffect(() => {
    let intervalo = null;
    
    if (activo) {
      // Crear intervalo
      intervalo = setInterval(() => {
        setSegundos(prev => prev + 1);
      }, 1000);
      console.log('Intervalo creado:', intervalo);
    }
    
    // CLEANUP: Se ejecuta antes de re-ejecutar el efecto o al desmontar
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
        console.log('Intervalo limpiado:', intervalo);
      }
    };
  }, [activo]); // Dependencia: activo
  
  return (
    <div style={estilos.caja}>
      <h3>⏱️ Efecto con Cleanup (Timer)</h3>
      <p style={estilos.numero}>{segundos}s</p>
      
      <div style={estilos.botonesContainer}>
        <button
          style={activo ? estilos.botonPeligro : estilos.boton}
          onClick={() => setActivo(!activo)}
        >
          {activo ? "⏸️ Pausar" : "▶️ Iniciar"}
        </button>
        <button
          style={estilos.botonSecundario}
          onClick={() => setSegundos(0)}
        >
          🔄 Reiniciar
        </button>
      </div>
      
      <p style={estilos.nota}>
        El cleanup (<code>return () =&gt; ...</code>) limpia el intervalo 
        para evitar memory leaks.
      </p>
    </div>
  );
}


// ============================================
// 5. EFECTO CON FETCH - Llamada a API
// ============================================
function EfectoConFetch() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Variable para evitar actualizar estado si el componente se desmontó
    let cancelado = false;
    
    const cargarUsuarios = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
        
        if (!response.ok) {
          throw new Error('Error al cargar usuarios');
        }
        
        const data = await response.json();
        
        // Solo actualizar si el componente sigue montado
        if (!cancelado) {
          setUsuarios(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelado) {
          setError(err.message);
        }
      } finally {
        if (!cancelado) {
          setLoading(false);
        }
      }
    };
    
    cargarUsuarios();
    
    // Cleanup: marcar como cancelado si se desmonta
    return () => {
      cancelado = true;
    };
  }, []); // Solo al montar
  
  return (
    <div style={estilos.caja}>
      <h3>🌐 Efecto con Fetch (API)</h3>
      
      {loading && <p>Cargando usuarios...</p>}
      
      {error && <p style={estilos.error}>❌ Error: {error}</p>}
      
      {!loading && !error && (
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>
              <strong>{usuario.name}</strong> - {usuario.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


// ============================================
// 6. MÚLTIPLES EFECTOS
// ============================================
function MultiplesEfectos() {
  const [ancho, setAncho] = useState(window.innerWidth);
  const [titulo, setTitulo] = useState("Mi App");
  
  // Efecto 1: Escuchar resize de la ventana
  useEffect(() => {
    const handleResize = () => setAncho(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Efecto 2: Actualizar título del documento
  useEffect(() => {
    document.title = titulo;
    
    return () => {
      document.title = 'React App'; // Restaurar al desmontar
    };
  }, [titulo]);
  
  return (
    <div style={estilos.caja}>
      <h3>Múltiples useEffect</h3>
      
      <p>Ancho de ventana: {ancho}px</p>
      
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título de la página"
        style={estilos.input}
      />
      
      <p style={estilos.nota}>
        Puedes tener múltiples useEffect para separar lógica diferente.
        Cada uno con sus propias dependencias.
      </p>
    </div>
  );
}


// ============================================
// 7. RESUMEN DE PATRONES
// ============================================
function ResumenPatrones() {
  return (
    <div style={estilos.caja}>
      <h3>📋 Resumen de Patrones useEffect</h3>
      
      <table style={estilos.tabla}>
        <thead>
          <tr>
            <th>Patrón</th>
            <th>Sintaxis</th>
            <th>Cuándo se ejecuta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solo al montar</td>
            <td><code>useEffect(fn, [])</code></td>
            <td>Una vez, al montar</td>
          </tr>
          <tr>
            <td>Con dependencia</td>
            <td><code>useEffect(fn, [var])</code></td>
            <td>Al montar + cuando var cambia</td>
          </tr>
          <tr>
            <td>Múltiples deps</td>
            <td><code>useEffect(fn, [a, b])</code></td>
            <td>Al montar + cuando a o b cambian</td>
          </tr>
          <tr>
            <td>⚠️ Sin array</td>
            <td><code>useEffect(fn)</code></td>
            <td>En cada render (evitar)</td>
          </tr>
        </tbody>
      </table>
      
      <div style={estilos.codigo}>
        <pre>{`// Estructura completa
useEffect(() => {
  // 1. Código del efecto (se ejecuta después del render)
  console.log('Efecto ejecutado');
  
  // 2. Return: función de cleanup (opcional)
  return () => {
    console.log('Limpieza');
  };
}, [dependencias]); // 3. Array de dependencias`}</pre>
      </div>
    </div>
  );
}


// ============================================
// ESTILOS
// ============================================
const estilos = {
  contenedor: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  caja: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid #ddd',
  },
  numero: {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px 0',
    color: '#007bff',
  },
  botonesContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonSecundario: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonPeligro: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '10px',
  },
  nota: {
    backgroundColor: '#d4edda',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '14px',
    marginTop: '10px',
  },
  advertencia: {
    backgroundColor: '#fff3cd',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '14px',
    marginTop: '10px',
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '4px',
  },
  tabla: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '15px',
  },
  codigo: {
    backgroundColor: '#2d2d2d',
    color: '#f8f8f2',
    padding: '15px',
    borderRadius: '4px',
    overflow: 'auto',
  },
  titulo: {
    color: '#333',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
  }
};

// Estilos adicionales para tabla
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  table th, table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  table th {
    background-color: #007bff;
    color: white;
  }
  table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
document.head.appendChild(styleSheet);


// ============================================
// COMPONENTE PRINCIPAL
// ============================================
const UseEffect = () => {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>04 - useEffect Hook</h1>
      
      <EfectoAlMontar />
      <EfectoConDependencias />
      <EfectoConCleanup />
      <EfectoConFetch />
      <MultiplesEfectos />
      <ResumenPatrones />
    </div>
  );
};

export default UseEffect;
