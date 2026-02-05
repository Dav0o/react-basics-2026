/**
 * 06 - MANEJO DE LISTAS EN REACT
 * 
 * Trabajar con listas (arrays) es fundamental en React.
 * Se usan métodos de array que NO mutan el original (inmutabilidad).
 * 
 * MÉTODOS CLAVE:
 * - map(): Transformar elementos y renderizar listas
 * - filter(): Filtrar elementos
 * - find(): Buscar un elemento
 * - reduce(): Acumular valores
 * - spread operator (...): Copiar y combinar arrays
 * 
 * IMPORTANTE: Keys en listas
 * - Cada elemento debe tener una key única
 * - Ayuda a React a identificar qué cambió
 * - Nunca usar el índice como key si la lista puede cambiar
 */

import { useState } from 'react';

// ============================================
// 1. MAP() - Renderizar listas
// ============================================
function EjemploMap() {
  const frutas = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas", "🍓 Fresa"];
  
  const numeros = [1, 2, 3, 4, 5];
  
  const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Carlos", edad: 30 },
    { id: 3, nombre: "María", edad: 28 },
  ];
  
  return (
    <div style={estilos.caja}>
      <h3>map() - Renderizar Listas</h3>
      
      {/* Lista simple */}
      <h4>Lista de frutas:</h4>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
      
      {/* Transformar datos */}
      <h4>Números al cuadrado:</h4>
      <p>
        {numeros.map(n => n * n).join(", ")}
      </p>
      
      {/* Lista de objetos */}
      <h4>Usuarios (con key correcta):</h4>
      <ul>
        {usuarios.map(usuario => (
          // ✅ Usar ID único como key, no el índice
          <li key={usuario.id}>
            <strong>{usuario.nombre}</strong> - {usuario.edad} años
          </li>
        ))}
      </ul>
      
      <div style={estilos.codigo}>
        <pre>{`// Sintaxis de map()
{array.map((elemento, index) => (
  <Componente key={elemento.id}>
    {elemento.valor}
  </Componente>
))}`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 2. KEYS - Importancia de las claves únicas
// ============================================
function EjemploKeys() {
  const [items, setItems] = useState([
    { id: "a1", texto: "Primer item" },
    { id: "b2", texto: "Segundo item" },
    { id: "c3", texto: "Tercer item" },
  ]);
  
  const agregarAlInicio = () => {
    const nuevo = { 
      id: `${Date.now()}`, 
      texto: `Nuevo item ${items.length + 1}` 
    };
    setItems([nuevo, ...items]); // Agregar al inicio
  };
  
  return (
    <div style={estilos.caja}>
      <h3>🔑 Importancia de las Keys</h3>
      
      <button style={estilos.boton} onClick={agregarAlInicio}>
        Agregar al inicio
      </button>
      
      <ul>
        {items.map(item => (
          <li key={item.id} style={estilos.itemLista}>
            <span>Key: {item.id}</span> - {item.texto}
          </li>
        ))}
      </ul>
      
      <div style={estilos.nota}>
        <p><strong>❌ NO usar índice como key si:</strong></p>
        <ul>
          <li>La lista puede reordenarse</li>
          <li>Se pueden agregar/eliminar elementos</li>
          <li>Los elementos tienen estado propio</li>
        </ul>
        <p><strong>✅ SÍ usar índice cuando:</strong></p>
        <ul>
          <li>La lista es estática y nunca cambia</li>
          <li>Los elementos no tienen ID único</li>
        </ul>
      </div>
    </div>
  );
}


// ============================================
// 3. FILTER() - Filtrar elementos
// ============================================
function EjemploFilter() {
  const [filtro, setFiltro] = useState("todos");
  
  const tareas = [
    { id: 1, texto: "Comprar leche", completada: true, categoria: "compras" },
    { id: 2, texto: "Estudiar React", completada: false, categoria: "estudio" },
    { id: 3, texto: "Hacer ejercicio", completada: true, categoria: "salud" },
    { id: 4, texto: "Leer un libro", completada: false, categoria: "estudio" },
    { id: 5, texto: "Comprar pan", completada: false, categoria: "compras" },
  ];
  
  // Filtrar según el estado seleccionado
  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === "todos") return true;
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "pendientes") return !tarea.completada;
    return tarea.categoria === filtro;
  });
  
  return (
    <div style={estilos.caja}>
      <h3>filter() - Filtrar Elementos</h3>
      
      <div style={estilos.filtros}>
        {["todos", "completadas", "pendientes", "compras", "estudio", "salud"].map(f => (
          <button
            key={f}
            style={{
              ...estilos.botonFiltro,
              backgroundColor: filtro === f ? '#007bff' : '#e9ecef',
              color: filtro === f ? 'white' : '#333',
            }}
            onClick={() => setFiltro(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      
      <ul>
        {tareasFiltradas.map(tarea => (
          <li key={tarea.id} style={estilos.itemLista}>
            <span style={{ 
              textDecoration: tarea.completada ? 'line-through' : 'none',
              color: tarea.completada ? '#888' : '#333'
            }}>
              {tarea.completada ? '✅' : '⬜'} {tarea.texto}
            </span>
            <span style={estilos.badge}>{tarea.categoria}</span>
          </li>
        ))}
      </ul>
      
      <p>Mostrando {tareasFiltradas.length} de {tareas.length} tareas</p>
      
      <div style={estilos.codigo}>
        <pre>{`// filter() retorna un NUEVO array
const completadas = tareas.filter(t => t.completada);
const porCategoria = tareas.filter(t => t.categoria === "estudio");`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 4. FIND() - Buscar un elemento
// ============================================
function EjemploFind() {
  const [idBuscado, setIdBuscado] = useState("");
  
  const productos = [
    { id: "P001", nombre: "Laptop", precio: 999, stock: 5 },
    { id: "P002", nombre: "Mouse", precio: 29, stock: 50 },
    { id: "P003", nombre: "Teclado", precio: 79, stock: 30 },
    { id: "P004", nombre: "Monitor", precio: 299, stock: 15 },
    { id: "P005", nombre: "Webcam", precio: 89, stock: 20 },
  ];
  
  // find() retorna el PRIMER elemento que cumple la condición, o undefined
  const productoEncontrado = productos.find(p => p.id === idBuscado.toUpperCase());
  
  // findIndex() retorna el índice del elemento, o -1 si no existe
  const indice = productos.findIndex(p => p.id === idBuscado.toUpperCase());
  
  return (
    <div style={estilos.caja}>
      <h3>find() - Buscar un Elemento</h3>
      
      <p>IDs disponibles: {productos.map(p => p.id).join(", ")}</p>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          value={idBuscado}
          onChange={(e) => setIdBuscado(e.target.value)}
          placeholder="Buscar por ID (ej: P001)"
          style={estilos.input}
        />
      </div>
      
      {idBuscado && (
        <div style={productoEncontrado ? estilos.encontrado : estilos.noEncontrado}>
          {productoEncontrado ? (
            <>
              <h4>✅ Producto Encontrado (índice: {indice})</h4>
              <p><strong>{productoEncontrado.nombre}</strong></p>
              <p>Precio: ${productoEncontrado.precio}</p>
              <p>Stock: {productoEncontrado.stock} unidades</p>
            </>
          ) : (
            <p>❌ No se encontró producto con ID: {idBuscado}</p>
          )}
        </div>
      )}
      
      <div style={estilos.codigo}>
        <pre>{`// find() vs filter()
const uno = productos.find(p => p.id === "P001");    // Un objeto o undefined
const varios = productos.filter(p => p.precio > 50); // Array (puede estar vacío)

// findIndex() retorna el índice
const indice = productos.findIndex(p => p.id === "P001"); // 0, 1, 2... o -1`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 5. INMUTABILIDAD - Spread Operator
// ============================================
function EjemploInmutabilidad() {
  const [lista, setLista] = useState(["Item 1", "Item 2", "Item 3"]);
  const [nuevoItem, setNuevoItem] = useState("");
  
  // ✅ CORRECTO: Crear nuevo array
  const agregarAlFinal = () => {
    if (!nuevoItem.trim()) return;
    setLista([...lista, nuevoItem]); // Spread + nuevo
    setNuevoItem("");
  };
  
  const agregarAlInicio = () => {
    if (!nuevoItem.trim()) return;
    setLista([nuevoItem, ...lista]); // Nuevo + spread
    setNuevoItem("");
  };
  
  const eliminarUltimo = () => {
    setLista(lista.slice(0, -1)); // slice() no muta
  };
  
  const eliminarPrimero = () => {
    setLista(lista.slice(1)); // slice() no muta
  };
  
  const duplicarTodo = () => {
    setLista([...lista, ...lista]); // Combinar arrays
  };
  
  const limpiar = () => {
    setLista([]); // Nuevo array vacío
  };
  
  return (
    <div style={estilos.caja}>
      <h3>📋 Inmutabilidad con Spread Operator</h3>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          value={nuevoItem}
          onChange={(e) => setNuevoItem(e.target.value)}
          placeholder="Nuevo item..."
          style={{ ...estilos.input, flex: 1 }}
        />
      </div>
      
      <div style={estilos.botonesContainer}>
        <button style={estilos.boton} onClick={agregarAlInicio}>+ Inicio</button>
        <button style={estilos.boton} onClick={agregarAlFinal}>+ Final</button>
        <button style={estilos.botonSecundario} onClick={eliminarPrimero}>- Primero</button>
        <button style={estilos.botonSecundario} onClick={eliminarUltimo}>- Último</button>
        <button style={estilos.botonInfo} onClick={duplicarTodo}>Duplicar</button>
        <button style={estilos.botonPeligro} onClick={limpiar}>Limpiar</button>
      </div>
      
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <div style={estilos.advertencia}>
        <h4>❌ Métodos que MUTAN (NO usar directamente):</h4>
        <code>push(), pop(), shift(), unshift(), splice(), sort(), reverse()</code>
        
        <h4>✅ Métodos que NO mutan (seguros de usar):</h4>
        <code>map(), filter(), slice(), concat(), spread (...)</code>
      </div>
      
      <div style={estilos.codigo}>
        <pre>{`// ❌ INCORRECTO - Muta el array original
lista.push("nuevo");        // NO hacer esto
setLista(lista);            // React no detecta el cambio

// ✅ CORRECTO - Crea nuevo array
setLista([...lista, "nuevo"]);           // Agregar
setLista(lista.filter(x => x !== item)); // Eliminar
setLista(lista.map(x => x === old ? new : x)); // Actualizar`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 6. EJEMPLO COMPLETO - CRUD de lista
// ============================================
function CrudLista() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Ana García", telefono: "555-0001" },
    { id: 2, nombre: "Carlos López", telefono: "555-0002" },
    { id: 3, nombre: "María Rodríguez", telefono: "555-0003" },
  ]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoTelefono, setNuevoTelefono] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [editando, setEditando] = useState(null);
  
  // CREATE - Agregar
  const agregarContacto = () => {
    if (!nuevoNombre.trim() || !nuevoTelefono.trim()) return;
    
    const nuevo = {
      id: Date.now(),
      nombre: nuevoNombre,
      telefono: nuevoTelefono
    };
    
    setContactos([...contactos, nuevo]);
    setNuevoNombre("");
    setNuevoTelefono("");
  };
  
  // UPDATE - Actualizar
  const actualizarContacto = (id, nuevosDatos) => {
    setContactos(contactos.map(contacto =>
      contacto.id === id
        ? { ...contacto, ...nuevosDatos }
        : contacto
    ));
    setEditando(null);
  };
  
  // DELETE - Eliminar
  const eliminarContacto = (id) => {
    setContactos(contactos.filter(c => c.id !== id));
  };
  
  // READ con filtro
  const contactosFiltrados = contactos.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.telefono.includes(busqueda)
  );
  
  return (
    <div style={estilos.caja}>
      <h3>📱 CRUD Completo - Lista de Contactos</h3>
      
      {/* Buscar */}
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="🔍 Buscar contacto..."
        style={{ ...estilos.input, marginBottom: '15px' }}
      />
      
      {/* Agregar */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Nombre"
          style={estilos.input}
        />
        <input
          type="text"
          value={nuevoTelefono}
          onChange={(e) => setNuevoTelefono(e.target.value)}
          placeholder="Teléfono"
          style={estilos.input}
        />
        <button style={estilos.boton} onClick={agregarContacto}>
          Agregar
        </button>
      </div>
      
      {/* Lista */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contactosFiltrados.map(contacto => (
          <li key={contacto.id} style={estilos.contactoItem}>
            {editando === contacto.id ? (
              // Modo edición
              <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                <input
                  type="text"
                  defaultValue={contacto.nombre}
                  id={`nombre-${contacto.id}`}
                  style={estilos.input}
                />
                <input
                  type="text"
                  defaultValue={contacto.telefono}
                  id={`tel-${contacto.id}`}
                  style={estilos.input}
                />
                <button
                  style={estilos.boton}
                  onClick={() => {
                    const nombre = document.getElementById(`nombre-${contacto.id}`).value;
                    const telefono = document.getElementById(`tel-${contacto.id}`).value;
                    actualizarContacto(contacto.id, { nombre, telefono });
                  }}
                >
                  ✓
                </button>
                <button
                  style={estilos.botonSecundario}
                  onClick={() => setEditando(null)}
                >
                  ✕
                </button>
              </div>
            ) : (
              // Modo visualización
              <>
                <div>
                  <strong>{contacto.nombre}</strong>
                  <br />
                  <small>{contacto.telefono}</small>
                </div>
                <div>
                  <button
                    style={estilos.botonSmall}
                    onClick={() => setEditando(contacto.id)}
                  >
                    ✏️
                  </button>
                  <button
                    style={estilos.botonEliminar}
                    onClick={() => eliminarContacto(contacto.id)}
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      
      <p>
        Mostrando {contactosFiltrados.length} de {contactos.length} contactos
      </p>
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
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonSecundario: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonInfo: {
    backgroundColor: '#17a2b8',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonPeligro: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonSmall: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '5px',
  },
  botonEliminar: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '5px',
  },
  botonFiltro: {
    padding: '8px 12px',
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
  },
  filtros: {
    display: 'flex',
    gap: '5px',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  botonesContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  itemLista: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
    marginBottom: '5px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  contactoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: 'white',
    marginBottom: '8px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  badge: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '11px',
  },
  nota: {
    backgroundColor: '#d4edda',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '15px',
  },
  advertencia: {
    backgroundColor: '#fff3cd',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '15px',
  },
  encontrado: {
    backgroundColor: '#d4edda',
    padding: '15px',
    borderRadius: '4px',
  },
  noEncontrado: {
    backgroundColor: '#f8d7da',
    padding: '15px',
    borderRadius: '4px',
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
const ManejoDeListas = () => {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>06 - Manejo de Listas</h1>
      
      <EjemploMap />
      <EjemploKeys />
      <EjemploFilter />
      <EjemploFind />
      <EjemploInmutabilidad />
      <CrudLista />
    </div>
  );
};

export default ManejoDeListas;
