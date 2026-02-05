/**
 * 03 - useState Hook
 * 
 * useState es el hook más fundamental de React.
 * Permite añadir estado a componentes funcionales.
 * Cuando el estado cambia, el componente se re-renderiza.
 * 
 * SINTAXIS:
 * const [valor, setValor] = useState(valorInicial);
 * 
 * CONCEPTOS CLAVE:
 * - Estado local del componente
 * - Función setter para actualizar estado
 * - Estado inmutable (siempre crear nuevo valor)
 * - Re-renderizado cuando cambia el estado
 */

import { useState } from 'react';

// ============================================
// 1. CONTADOR BÁSICO - El ejemplo más simple
// ============================================
function ContadorBasico() {
  // useState retorna un array con [valor, funcionParaCambiarlo]
  const [contador, setContador] = useState(0);
  
  return (
    <div style={estilos.caja}>
      <h3>Contador Básico</h3>
      <p style={estilos.numero}>{contador}</p>
      <div style={estilos.botonesContainer}>
        <button 
          style={estilos.boton}
          onClick={() => setContador(contador - 1)}
        >
          - Restar
        </button>
        <button 
          style={estilos.boton}
          onClick={() => setContador(contador + 1)}
        >
          + Sumar
        </button>
        <button 
          style={estilos.botonSecundario}
          onClick={() => setContador(0)}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}


// ============================================
// 2. ESTADO CON DIFERENTES TIPOS DE DATOS
// ============================================
function EstadosDiferentes() {
  // Estado con string
  const [nombre, setNombre] = useState("");
  
  // Estado con boolean
  const [estaActivo, setEstaActivo] = useState(false);
  
  // Estado con número
  const [edad, setEdad] = useState(18);
  
  return (
    <div style={estilos.caja}>
      <h3>Diferentes Tipos de Estado</h3>
      
      {/* String */}
      <div style={estilos.grupo}>
        <label>Nombre: </label>
        <input 
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
          style={estilos.input}
        />
        <p>Hola, {nombre || "desconocido"}!</p>
      </div>
      
      {/* Boolean */}
      <div style={estilos.grupo}>
        <label>
          <input 
            type="checkbox"
            checked={estaActivo}
            onChange={(e) => setEstaActivo(e.target.checked)}
          />
          {" "}Usuario activo
        </label>
        <p>Estado: {estaActivo ? "✅ Activo" : "❌ Inactivo"}</p>
      </div>
      
      {/* Número */}
      <div style={estilos.grupo}>
        <label>Edad: </label>
        <input 
          type="range"
          min="0"
          max="100"
          value={edad}
          onChange={(e) => setEdad(Number(e.target.value))}
        />
        <span> {edad} años</span>
      </div>
    </div>
  );
}


// ============================================
// 3. ESTADO CON OBJETOS
// ============================================
function EstadoObjeto() {
  // Estado inicial como objeto
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    edad: 0
  });
  
  // IMPORTANTE: Siempre crear un NUEVO objeto, nunca mutar directamente
  const actualizarCampo = (campo, valor) => {
    setUsuario({
      ...usuario,        // Copiar todas las propiedades existentes
      [campo]: valor     // Sobrescribir solo el campo que cambió
    });
  };
  
  return (
    <div style={estilos.caja}>
      <h3>Estado con Objetos</h3>
      <p style={estilos.nota}>
        ⚠️ Importante: Siempre usar spread operator (...) para crear un nuevo objeto
      </p>
      
      <div style={estilos.formulario}>
        <input 
          type="text"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={(e) => actualizarCampo('nombre', e.target.value)}
          style={estilos.input}
        />
        <input 
          type="email"
          placeholder="Email"
          value={usuario.email}
          onChange={(e) => actualizarCampo('email', e.target.value)}
          style={estilos.input}
        />
        <input 
          type="number"
          placeholder="Edad"
          value={usuario.edad}
          onChange={(e) => actualizarCampo('edad', Number(e.target.value))}
          style={estilos.input}
        />
      </div>
      
      <div style={estilos.resultado}>
        <h4>Resultado:</h4>
        <pre>{JSON.stringify(usuario, null, 2)}</pre>
      </div>
    </div>
  );
}


// ============================================
// 4. ESTADO CON ARRAYS
// ============================================
function EstadoArray() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender React", completada: true },
    { id: 2, texto: "Practicar useState", completada: false },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  
  // Agregar elemento (crear nuevo array con spread)
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    
    const nueva = {
      id: Date.now(), // ID único simple
      texto: nuevaTarea,
      completada: false
    };
    
    setTareas([...tareas, nueva]); // Spread + nuevo elemento
    setNuevaTarea(""); // Limpiar input
  };
  
  // Eliminar elemento (filter crea nuevo array)
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };
  
  // Actualizar elemento (map crea nuevo array)
  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id 
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ));
  };
  
  return (
    <div style={estilos.caja}>
      <h3>Estado con Arrays</h3>
      <p style={estilos.nota}>
        ⚠️ Nunca usar push, splice, etc. Siempre crear un nuevo array.
      </p>
      
      {/* Agregar tarea */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input 
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea..."
          style={{ ...estilos.input, flex: 1 }}
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
        />
        <button style={estilos.boton} onClick={agregarTarea}>
          Agregar
        </button>
      </div>
      
      {/* Lista de tareas */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map(tarea => (
          <li key={tarea.id} style={estilos.tareaItem}>
            <span 
              onClick={() => toggleCompletada(tarea.id)}
              style={{ 
                cursor: 'pointer',
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? '#888' : '#333',
                flex: 1
              }}
            >
              {tarea.completada ? '✅' : '⬜'} {tarea.texto}
            </span>
            <button 
              onClick={() => eliminarTarea(tarea.id)}
              style={estilos.botonEliminar}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      
      <p>Total: {tareas.length} | Completadas: {tareas.filter(t => t.completada).length}</p>
    </div>
  );
}


// ============================================
// 5. ACTUALIZACIÓN FUNCIONAL (prevState)
// ============================================
function ActualizacionFuncional() {
  const [contador, setContador] = useState(0);
  
  // ❌ PROBLEMA: Múltiples llamadas con el mismo valor
  const incrementarMal = () => {
    // Estas tres llamadas usan el mismo valor de 'contador'
    // porque React agrupa las actualizaciones
    setContador(contador + 1);
    setContador(contador + 1);
    setContador(contador + 1);
    // Resultado: solo incrementa 1
  };
  
  // ✅ SOLUCIÓN: Usar función que recibe el valor anterior
  const incrementarBien = () => {
    // Cada llamada recibe el valor más reciente
    setContador(prev => prev + 1);
    setContador(prev => prev + 1);
    setContador(prev => prev + 1);
    // Resultado: incrementa 3
  };
  
  return (
    <div style={estilos.caja}>
      <h3>Actualización Funcional</h3>
      <p style={estilos.numero}>{contador}</p>
      
      <div style={estilos.botonesContainer}>
        <button style={estilos.botonError} onClick={incrementarMal}>
          ❌ +3 (Mal)
        </button>
        <button style={estilos.boton} onClick={incrementarBien}>
          ✅ +3 (Bien)
        </button>
        <button 
          style={estilos.botonSecundario} 
          onClick={() => setContador(0)}
        >
          Reiniciar
        </button>
      </div>
      
      <p style={estilos.nota}>
        Usa <code>setEstado(prev =&gt; ...)</code> cuando el nuevo valor 
        depende del anterior.
      </p>
    </div>
  );
}


// ============================================
// 6. MÚLTIPLES ESTADOS vs ESTADO AGRUPADO
// ============================================
function MultiplesEstados() {
  // Opción 1: Estados separados (más simple para estados independientes)
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [subscrito, setSubscrito] = useState(false);
  
  return (
    <div style={estilos.caja}>
      <h3>Múltiples Estados Separados</h3>
      <p style={estilos.nota}>
        ✅ Recomendado cuando los estados son independientes
      </p>
      <input 
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        style={estilos.input}
      />
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={estilos.input}
      />
      <label>
        <input 
          type="checkbox"
          checked={subscrito}
          onChange={(e) => setSubscrito(e.target.checked)}
        />
        {" "}Subscribirse al newsletter
      </label>
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
    flexWrap: 'wrap',
  },
  boton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  botonSecundario: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonError: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  botonEliminar: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  grupo: {
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '4px',
  },
  formulario: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  resultado: {
    backgroundColor: '#e9ecef',
    padding: '10px',
    borderRadius: '4px',
    marginTop: '10px',
  },
  tareaItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
    marginBottom: '5px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  nota: {
    backgroundColor: '#fff3cd',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '14px',
    marginBottom: '10px',
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
const UseState = () => {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>03 - useState Hook</h1>
      
      <ContadorBasico />
      <EstadosDiferentes />
      <EstadoObjeto />
      <EstadoArray />
      <ActualizacionFuncional />
      <MultiplesEstados />
    </div>
  );
};

export default UseState;
