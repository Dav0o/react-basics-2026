/**
 * 07 - FETCH API
 * 
 * Fetch es la API nativa de JavaScript para hacer peticiones HTTP.
 * Es promise-based, lo que permite usar async/await.
 * 
 * CONCEPTOS CLAVE:
 * - GET: Obtener datos
 * - POST: Enviar datos
 * - PUT/PATCH: Actualizar datos
 * - DELETE: Eliminar datos
 * - Headers: Configuración de la petición
 * - Manejo de errores con try/catch
 * - Estados: loading, error, data
 */

import { useState, useEffect } from 'react';

// API de prueba gratuita
const API_BASE = 'https://jsonplaceholder.typicode.com';


// ============================================
// 1. GET BÁSICO - Obtener datos
// ============================================
function EjemploGetBasico() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const cargarPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // fetch retorna una Promise
      const response = await fetch(`${API_BASE}/posts?_limit=5`);
      
      // Verificar si la respuesta fue exitosa (status 200-299)
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      // Convertir respuesta a JSON (también es una Promise)
      const data = await response.json();
      
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={estilos.caja}>
      <h3>📥 GET Básico - Obtener Posts</h3>
      
      <button 
        style={estilos.boton} 
        onClick={cargarPosts}
        disabled={loading}
      >
        {loading ? "Cargando..." : "Cargar Posts"}
      </button>
      
      {error && <p style={estilos.error}>❌ {error}</p>}
      
      {posts.length > 0 && (
        <ul style={estilos.lista}>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
      
      <div style={estilos.codigo}>
        <pre>{`// GET básico con fetch
const response = await fetch(url);
const data = await response.json();`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 2. GET CON useEffect - Carga automática
// ============================================
function EjemploGetUseEffect() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Función async dentro del useEffect
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(`${API_BASE}/users?_limit=5`);
        
        if (!response.ok) {
          throw new Error('Error al cargar usuarios');
        }
        
        const data = await response.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsuarios();
  }, []); // Array vacío = solo al montar
  
  if (loading) return <div style={estilos.caja}>Cargando usuarios...</div>;
  if (error) return <div style={estilos.caja}><p style={estilos.error}>❌ {error}</p></div>;
  
  return (
    <div style={estilos.caja}>
      <h3>👥 GET con useEffect - Carga Automática</h3>
      
      <div style={estilos.gridUsuarios}>
        {usuarios.map(usuario => (
          <div key={usuario.id} style={estilos.tarjetaUsuario}>
            <h4>{usuario.name}</h4>
            <p>📧 {usuario.email}</p>
            <p>🏢 {usuario.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// ============================================
// 3. POST - Enviar datos
// ============================================
function EjemploPost() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  
  const enviarPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultado(null);
    
    try {
      const response = await fetch(`${API_BASE}/posts`, {
        method: 'POST', // Especificar método
        headers: {
          'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify({ // Convertir objeto a JSON string
          title: titulo,
          body: contenido,
          userId: 1
        })
      });
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      setResultado(data);
      setTitulo("");
      setContenido("");
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={estilos.caja}>
      <h3>📤 POST - Crear Nuevo Post</h3>
      
      <form onSubmit={enviarPost}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título del post"
          style={estilos.input}
          required
        />
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Contenido del post"
          style={{ ...estilos.input, minHeight: '80px', resize: 'vertical' }}
          required
        />
        <button 
          type="submit" 
          style={estilos.boton}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Crear Post"}
        </button>
      </form>
      
      {error && <p style={estilos.error}>❌ {error}</p>}
      
      {resultado && (
        <div style={estilos.exito}>
          <h4>✅ Post creado exitosamente!</h4>
          <p><strong>ID:</strong> {resultado.id}</p>
          <p><strong>Título:</strong> {resultado.title}</p>
        </div>
      )}
      
      <div style={estilos.codigo}>
        <pre>{`// POST con fetch
const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datos)
});`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 4. PUT y DELETE - Actualizar y Eliminar
// ============================================
function EjemploPutDelete() {
  const [postId, setPostId] = useState("1");
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // PUT - Actualizar completo
  const actualizarPost = async () => {
    if (!nuevoTitulo.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: postId,
          title: nuevoTitulo,
          body: 'Contenido actualizado',
          userId: 1
        })
      });
      
      const data = await response.json();
      setResultado({ tipo: 'PUT', data });
    } catch (err) {
      setResultado({ tipo: 'ERROR', mensaje: err.message });
    } finally {
      setLoading(false);
    }
  };
  
  // DELETE - Eliminar
  const eliminarPost = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/posts/${postId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setResultado({ tipo: 'DELETE', mensaje: `Post ${postId} eliminado` });
      }
    } catch (err) {
      setResultado({ tipo: 'ERROR', mensaje: err.message });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={estilos.caja}>
      <h3>✏️ PUT y DELETE</h3>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          placeholder="ID del post"
          style={{ ...estilos.input, width: '100px' }}
          min="1"
          max="100"
        />
        <input
          type="text"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
          placeholder="Nuevo título"
          style={{ ...estilos.input, flex: 1 }}
        />
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          style={estilos.boton} 
          onClick={actualizarPost}
          disabled={loading}
        >
          PUT - Actualizar
        </button>
        <button 
          style={estilos.botonPeligro} 
          onClick={eliminarPost}
          disabled={loading}
        >
          DELETE - Eliminar
        </button>
      </div>
      
      {resultado && (
        <div style={resultado.tipo === 'ERROR' ? estilos.error : estilos.exito}>
          <p><strong>{resultado.tipo}:</strong></p>
          <pre>{JSON.stringify(resultado.data || resultado.mensaje, null, 2)}</pre>
        </div>
      )}
      
      <div style={estilos.codigo}>
        <pre>{`// PUT - Actualizar
await fetch(\`/posts/\${id}\`, { method: 'PUT', body: ... });

// DELETE - Eliminar
await fetch(\`/posts/\${id}\`, { method: 'DELETE' });`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 5. MANEJO DE ERRORES COMPLETO
// ============================================
function EjemploManejoErrores() {
  const [url, setUrl] = useState(`${API_BASE}/posts/1`);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const hacerPeticion = async () => {
    setLoading(true);
    setResultado(null);
    
    try {
      // 1. Error de red (servidor caído, sin internet)
      const response = await fetch(url);
      
      // 2. Verificar código de estado HTTP
      if (!response.ok) {
        // Diferentes tipos de errores HTTP
        switch (response.status) {
          case 400:
            throw new Error('Petición incorrecta (400)');
          case 401:
            throw new Error('No autorizado (401)');
          case 403:
            throw new Error('Prohibido (403)');
          case 404:
            throw new Error('Recurso no encontrado (404)');
          case 500:
            throw new Error('Error del servidor (500)');
          default:
            throw new Error(`Error HTTP: ${response.status}`);
        }
      }
      
      // 3. Error al parsear JSON
      const data = await response.json();
      
      setResultado({ tipo: 'EXITO', data, status: response.status });
      
    } catch (err) {
      // Diferenciar tipos de error
      if (err.name === 'TypeError') {
        // Error de red
        setResultado({ tipo: 'ERROR_RED', mensaje: 'Error de conexión. Verifica tu internet.' });
      } else {
        // Error HTTP u otro
        setResultado({ tipo: 'ERROR', mensaje: err.message });
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={estilos.caja}>
      <h3>⚠️ Manejo de Errores</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <p>Prueba diferentes URLs:</p>
        <div style={estilos.urlButtons}>
          <button 
            style={estilos.botonSmall}
            onClick={() => setUrl(`${API_BASE}/posts/1`)}
          >
            ✅ Válida
          </button>
          <button 
            style={estilos.botonSmall}
            onClick={() => setUrl(`${API_BASE}/posts/99999`)}
          >
            ❌ 404
          </button>
          <button 
            style={estilos.botonSmall}
            onClick={() => setUrl('https://invalid-url-test.com/api')}
          >
            ❌ Red
          </button>
        </div>
      </div>
      
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={estilos.input}
      />
      
      <button 
        style={estilos.boton} 
        onClick={hacerPeticion}
        disabled={loading}
      >
        {loading ? "Cargando..." : "Hacer Petición"}
      </button>
      
      {resultado && (
        <div style={resultado.tipo === 'EXITO' ? estilos.exito : estilos.error}>
          <p><strong>Resultado: {resultado.tipo}</strong></p>
          {resultado.status && <p>Status: {resultado.status}</p>}
          <pre>{JSON.stringify(resultado.data || resultado.mensaje, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


// ============================================
// 6. PATRÓN LOADING/ERROR/DATA
// ============================================
function PatronLoadingErrorData() {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null
  });
  
  const cargarDatos = async () => {
    // Iniciar carga
    setState({ loading: true, error: null, data: null });
    
    try {
      const response = await fetch(`${API_BASE}/posts?_limit=3`);
      
      if (!response.ok) throw new Error('Error al cargar');
      
      const data = await response.json();
      
      // Éxito
      setState({ loading: false, error: null, data });
      
    } catch (err) {
      // Error
      setState({ loading: false, error: err.message, data: null });
    }
  };
  
  const { loading, error, data } = state;
  
  return (
    <div style={estilos.caja}>
      <h3>🔄 Patrón Loading / Error / Data</h3>
      
      <button style={estilos.boton} onClick={cargarDatos}>
        Cargar Datos
      </button>
      
      {/* Estado: Loading */}
      {loading && (
        <div style={estilos.loading}>
          <span className="spinner">⏳</span> Cargando...
        </div>
      )}
      
      {/* Estado: Error */}
      {error && (
        <div style={estilos.error}>
          ❌ Error: {error}
          <button 
            style={{ ...estilos.botonSmall, marginLeft: '10px' }}
            onClick={cargarDatos}
          >
            Reintentar
          </button>
        </div>
      )}
      
      {/* Estado: Data */}
      {data && (
        <div style={estilos.exito}>
          ✅ {data.length} posts cargados
          <ul>
            {data.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div style={estilos.codigo}>
        <pre>{`// Patrón común para fetch
const [state, setState] = useState({
  loading: false,
  error: null,
  data: null
});

// Renderizado condicional
{loading && <Spinner />}
{error && <Error mensaje={error} />}
{data && <Lista datos={data} />}`}</pre>
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
  boton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  botonPeligro: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonSmall: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '10px',
  },
  lista: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '10px',
  },
  gridUsuarios: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
  },
  tarjetaUsuario: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '10px',
  },
  exito: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '10px',
  },
  loading: {
    backgroundColor: '#fff3cd',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '10px',
    textAlign: 'center',
  },
  urlButtons: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  codigo: {
    backgroundColor: '#2d2d2d',
    color: '#f8f8f2',
    padding: '15px',
    borderRadius: '4px',
    overflow: 'auto',
    marginTop: '15px',
    fontSize: '13px',
  },
  titulo: {
    color: '#333',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
  }
};


// ============================================
// COMPONENTE PRINCIPAL
// ============================================
const FetchAPI = () => {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>07 - Fetch API</h1>
      
      <EjemploGetBasico />
      <EjemploGetUseEffect />
      <EjemploPost />
      <EjemploPutDelete />
      <EjemploManejoErrores />
      <PatronLoadingErrorData />
    </div>
  );
};

export default FetchAPI;
