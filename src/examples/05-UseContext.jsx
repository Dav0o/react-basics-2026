/**
 * 05 - useContext Hook
 * 
 * useContext permite compartir datos entre componentes sin pasar props manualmente
 * a través de cada nivel (prop drilling).
 * 
 * CONCEPTOS CLAVE:
 * - Context: Contenedor de datos globales
 * - Provider: Componente que provee los datos
 * - Consumer: Componentes que usan los datos (useContext)
 * 
 * CUÁNDO USAR:
 * - Tema (dark/light mode)
 * - Usuario autenticado
 * - Idioma/localización
 * - Configuración global
 */

import { createContext, useContext, useState } from 'react';

// ============================================
// 1. CREAR EL CONTEXTO
// ============================================
// Creamos el contexto con un valor por defecto (opcional)
const TemaContext = createContext({
  tema: 'light',
  toggleTema: () => {}
});

// Contexto para usuario
const UsuarioContext = createContext(null);

// Contexto para carrito de compras
const CarritoContext = createContext({
  items: [],
  agregarItem: () => {},
  eliminarItem: () => {},
  total: 0
});


// ============================================
// 2. PROVIDER - Proveedor del contexto
// ============================================
// El Provider envuelve los componentes que necesitan acceso al contexto

function TemaProvider({ children }) {
  const [tema, setTema] = useState('light');
  
  const toggleTema = () => {
    setTema(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  // El value es lo que estará disponible para los consumidores
  const value = {
    tema,
    toggleTema,
    esOscuro: tema === 'dark'
  };
  
  return (
    <TemaContext.Provider value={value}>
      {children}
    </TemaContext.Provider>
  );
}

function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  
  const login = (nombre) => {
    setUsuario({ nombre, email: `${nombre.toLowerCase()}@email.com` });
  };
  
  const logout = () => {
    setUsuario(null);
  };
  
  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
}

function CarritoProvider({ children }) {
  const [items, setItems] = useState([]);
  
  const agregarItem = (producto) => {
    setItems(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };
  
  const eliminarItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  
  const total = items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  
  return (
    <CarritoContext.Provider value={{ items, agregarItem, eliminarItem, total }}>
      {children}
    </CarritoContext.Provider>
  );
}


// ============================================
// 3. CUSTOM HOOKS - Manera elegante de consumir contexto
// ============================================
// Crear hooks personalizados simplifica el uso del contexto

function useTema() {
  const context = useContext(TemaContext);
  if (context === undefined) {
    throw new Error('useTema debe usarse dentro de TemaProvider');
  }
  return context;
}

function useUsuario() {
  const context = useContext(UsuarioContext);
  return context;
}

function useCarrito() {
  const context = useContext(CarritoContext);
  return context;
}


// ============================================
// 4. COMPONENTES CONSUMIDORES
// ============================================

// Componente que usa el tema
function BotonTema() {
  const { tema, toggleTema, esOscuro } = useTema();
  
  return (
    <button 
      onClick={toggleTema}
      style={{
        ...estilos.boton,
        backgroundColor: esOscuro ? '#333' : '#007bff',
      }}
    >
      {esOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}

function ContenidoTema() {
  const { tema, esOscuro } = useTema();
  
  return (
    <div style={{
      ...estilos.contenidoTema,
      backgroundColor: esOscuro ? '#1a1a1a' : '#ffffff',
      color: esOscuro ? '#ffffff' : '#333333',
    }}>
      <p>Tema actual: {tema}</p>
      <p>Este contenido cambia con el tema</p>
      <BotonTema />
    </div>
  );
}

// Componentes de usuario
function BarraNavegacion() {
  const { usuario, logout } = useUsuario();
  
  return (
    <div style={estilos.navbar}>
      {usuario ? (
        <>
          <span>👤 Hola, {usuario.nombre}</span>
          <button style={estilos.botonSmall} onClick={logout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <span>No has iniciado sesión</span>
      )}
    </div>
  );
}

function FormLogin() {
  const { usuario, login } = useUsuario();
  const [nombre, setNombre] = useState('');
  
  if (usuario) {
    return (
      <div style={estilos.infoUsuario}>
        <h4>Bienvenido!</h4>
        <p>Email: {usuario.email}</p>
      </div>
    );
  }
  
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
        style={estilos.input}
      />
      <button 
        style={estilos.boton}
        onClick={() => nombre && login(nombre)}
      >
        Iniciar Sesión
      </button>
    </div>
  );
}

// Componentes del carrito
function ListaProductos() {
  const { agregarItem } = useCarrito();
  
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999 },
    { id: 2, nombre: "Mouse", precio: 29 },
    { id: 3, nombre: "Teclado", precio: 79 },
    { id: 4, nombre: "Monitor", precio: 299 },
  ];
  
  return (
    <div style={estilos.listaProductos}>
      <h4>Productos Disponibles</h4>
      {productos.map(producto => (
        <div key={producto.id} style={estilos.producto}>
          <span>{producto.nombre} - ${producto.precio}</span>
          <button
            style={estilos.botonSmall}
            onClick={() => agregarItem(producto)}
          >
            Agregar 🛒
          </button>
        </div>
      ))}
    </div>
  );
}

function CarritoCompras() {
  const { items, eliminarItem, total } = useCarrito();
  
  return (
    <div style={estilos.carrito}>
      <h4>🛒 Tu Carrito ({items.length})</h4>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={estilos.carritoItem}>
              <span>{item.nombre} x{item.cantidad}</span>
              <span>${item.precio * item.cantidad}</span>
              <button
                style={estilos.botonEliminar}
                onClick={() => eliminarItem(item.id)}
              >
                ❌
              </button>
            </div>
          ))}
          <div style={estilos.total}>
            <strong>Total: ${total}</strong>
          </div>
        </>
      )}
    </div>
  );
}


// ============================================
// 5. SIN CONTEXT vs CON CONTEXT (Comparación)
// ============================================
function ComparacionPropDrilling() {
  return (
    <div style={estilos.caja}>
      <h3>❌ Sin Context (Prop Drilling)</h3>
      <div style={estilos.codigo}>
        <pre>{`// Pasar props a través de múltiples niveles
<App>
  <Header usuario={usuario} />       {/* pasa a Header */}
    <Navbar usuario={usuario} />     {/* pasa a Navbar */}
      <UserInfo usuario={usuario} /> {/* finalmente lo usa */}
</App>

// Problema: Header y Navbar no necesitan 'usuario',
// solo lo pasan hacia abajo.`}</pre>
      </div>
      
      <h3>✅ Con Context</h3>
      <div style={estilos.codigo}>
        <pre>{`// El contexto evita pasar props manualmente
<UsuarioProvider>     {/* Provee el usuario */}
  <App>
    <Header />        {/* No necesita props */}
      <Navbar />      {/* No necesita props */}
        <UserInfo />  {/* Usa useContext para obtener usuario */}
  </App>
</UsuarioProvider>

// UserInfo.jsx
function UserInfo() {
  const { usuario } = useUsuario(); // Accede directamente
  return <span>{usuario.nombre}</span>;
}`}</pre>
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
  },
  botonSmall: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  botonEliminar: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    flex: 1,
  },
  contenidoTema: {
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  navbar: {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  infoUsuario: {
    backgroundColor: '#d4edda',
    padding: '15px',
    borderRadius: '4px',
  },
  listaProductos: {
    flex: 1,
  },
  producto: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
    marginBottom: '5px',
    borderRadius: '4px',
  },
  carrito: {
    backgroundColor: '#e9ecef',
    padding: '15px',
    borderRadius: '8px',
    minWidth: '200px',
  },
  carritoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: 'white',
    marginBottom: '5px',
    borderRadius: '4px',
    gap: '10px',
  },
  total: {
    textAlign: 'right',
    padding: '10px',
    borderTop: '2px solid #333',
    marginTop: '10px',
  },
  codigo: {
    backgroundColor: '#2d2d2d',
    color: '#f8f8f2',
    padding: '15px',
    borderRadius: '4px',
    overflow: 'auto',
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
const UseContext = () => {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>05 - useContext Hook</h1>
      
      {/* Ejemplo 1: Tema */}
      <div style={estilos.caja}>
        <h3>🎨 Ejemplo: Tema (Dark/Light Mode)</h3>
        <TemaProvider>
          <ContenidoTema />
        </TemaProvider>
      </div>
      
      {/* Ejemplo 2: Usuario */}
      <div style={estilos.caja}>
        <h3>👤 Ejemplo: Autenticación de Usuario</h3>
        <UsuarioProvider>
          <BarraNavegacion />
          <FormLogin />
        </UsuarioProvider>
      </div>
      
      {/* Ejemplo 3: Carrito de compras */}
      <div style={estilos.caja}>
        <h3>🛒 Ejemplo: Carrito de Compras</h3>
        <CarritoProvider>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ListaProductos />
            <CarritoCompras />
          </div>
        </CarritoProvider>
      </div>
      
      {/* Comparación */}
      <ComparacionPropDrilling />
    </div>
  );
};

export default UseContext;
