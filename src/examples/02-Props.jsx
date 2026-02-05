/**
 * 02 - PROPS (Propiedades)
 * 
 * Las props son la forma de pasar datos de un componente padre a un hijo.
 * Son de solo lectura (inmutables) y fluyen en una sola dirección (arriba → abajo).
 * 
 * CONCEPTOS CLAVE:
 * - Pasar props: atributos en el componente
 * - Recibir props: parámetro en la función
 * - Destructuring de props
 * - Props por defecto
 * - Children prop
 * - Prop drilling (pasar props a través de varios niveles)
 */

// ============================================
// 1. RECIBIR PROPS - FORMA BÁSICA
// ============================================
// Las props llegan como un objeto al primer parámetro
function SaludoBasico(props) {
  return (
    <div style={estilos.caja}>
      <h3>Props Básicas</h3>
      <p>Hola, {props.nombre}!</p>
      <p>Tienes {props.edad} años</p>
    </div>
  );
}


// ============================================
// 2. DESTRUCTURING DE PROPS (Recomendado)
// ============================================
// Es más limpio extraer las props directamente en los parámetros
function SaludoDestructuring({ nombre, edad, ciudad }) {
  return (
    <div style={estilos.caja}>
      <h3>Props con Destructuring</h3>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Ciudad: {ciudad}</p>
    </div>
  );
}


// ============================================
// 3. PROPS POR DEFECTO
// ============================================
// Valores que se usan si no se pasa la prop
function TarjetaUsuario({ 
  nombre = "Anónimo", 
  rol = "Invitado",
  avatar = "👤"
}) {
  return (
    <div style={estilos.tarjeta}>
      <span style={{ fontSize: '40px' }}>{avatar}</span>
      <h4>{nombre}</h4>
      <p>Rol: {rol}</p>
    </div>
  );
}


// ============================================
// 4. DIFERENTES TIPOS DE PROPS
// ============================================
function TiposDeProps({ 
  texto,           // String
  numero,          // Number
  esActivo,        // Boolean
  colores,         // Array
  usuario,         // Object
  onClick          // Function
}) {
  return (
    <div style={estilos.caja}>
      <h3>Diferentes Tipos de Props</h3>
      
      {/* String */}
      <p>Texto (string): {texto}</p>
      
      {/* Number */}
      <p>Número: {numero} (x2 = {numero * 2})</p>
      
      {/* Boolean */}
      <p>¿Está activo? {esActivo ? "Sí ✅" : "No ❌"}</p>
      
      {/* Array */}
      <p>Colores: {colores.join(", ")}</p>
      
      {/* Object */}
      <p>Usuario: {usuario.nombre} ({usuario.email})</p>
      
      {/* Function */}
      <button style={estilos.boton} onClick={onClick}>
        Ejecutar función
      </button>
    </div>
  );
}


// ============================================
// 5. CHILDREN PROP - Contenido entre etiquetas
// ============================================
// children es una prop especial que contiene lo que está entre las etiquetas
function Contenedor({ titulo, children }) {
  return (
    <div style={estilos.contenedorChildren}>
      <h4 style={estilos.tituloChildren}>{titulo}</h4>
      <div style={estilos.contenidoChildren}>
        {children}
      </div>
    </div>
  );
}

function Boton({ children, color = "#007bff" }) {
  return (
    <button style={{ ...estilos.boton, backgroundColor: color }}>
      {children}
    </button>
  );
}


// ============================================
// 6. SPREAD OPERATOR CON PROPS
// ============================================
function SpreadProps() {
  // Objeto con todas las props
  const datosPersona = {
    nombre: "Carlos",
    edad: 28,
    profesion: "Desarrollador",
    pais: "México"
  };
  
  return (
    <div style={estilos.caja}>
      <h3>Spread Operator con Props</h3>
      {/* Pasar todas las props del objeto */}
      <MostrarPersona {...datosPersona} />
    </div>
  );
}

function MostrarPersona({ nombre, edad, profesion, pais }) {
  return (
    <div>
      <p>👤 {nombre}, {edad} años</p>
      <p>💼 {profesion}</p>
      <p>🌎 {pais}</p>
    </div>
  );
}


// ============================================
// 7. COMPOSICIÓN - Componentes dentro de componentes
// ============================================
function Tarjeta({ titulo, children }) {
  return (
    <div style={estilos.tarjeta}>
      <h4>{titulo}</h4>
      {children}
    </div>
  );
}

function ListaItem({ texto, completado = false }) {
  return (
    <li style={{ 
      textDecoration: completado ? 'line-through' : 'none',
      color: completado ? '#888' : '#333'
    }}>
      {completado ? '✅' : '⬜'} {texto}
    </li>
  );
}

function EjemploComposicion() {
  return (
    <div style={estilos.caja}>
      <h3>Composición de Componentes</h3>
      <Tarjeta titulo="Lista de Tareas">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <ListaItem texto="Aprender React" completado={true} />
          <ListaItem texto="Practicar Props" completado={true} />
          <ListaItem texto="Entender useState" completado={false} />
          <ListaItem texto="Dominar useEffect" completado={false} />
        </ul>
      </Tarjeta>
    </div>
  );
}


// ============================================
// 8. PASAR FUNCIONES COMO PROPS (Callbacks)
// ============================================
function BotonAccion({ texto, onAccion, color }) {
  return (
    <button 
      style={{ ...estilos.boton, backgroundColor: color }}
      onClick={onAccion}
    >
      {texto}
    </button>
  );
}

function EjemploCallbacks() {
  const handleSaludar = () => alert("¡Hola!");
  const handleDespedir = () => alert("¡Adiós!");
  const handleContar = () => alert("1, 2, 3...");
  
  return (
    <div style={estilos.caja}>
      <h3>Funciones como Props (Callbacks)</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <BotonAccion 
          texto="Saludar" 
          onAccion={handleSaludar}
          color="#28a745" 
        />
        <BotonAccion 
          texto="Despedir" 
          onAccion={handleDespedir}
          color="#dc3545" 
        />
        <BotonAccion 
          texto="Contar" 
          onAccion={handleContar}
          color="#6c757d" 
        />
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
  tarjeta: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
    marginBottom: '10px',
  },
  boton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  contenedorChildren: {
    border: '2px dashed #007bff',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  tituloChildren: {
    backgroundColor: '#007bff',
    color: 'white',
    margin: 0,
    padding: '10px',
  },
  contenidoChildren: {
    padding: '15px',
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
const Props = () => {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>02 - Props (Propiedades)</h1>
      
      {/* 1. Props básicas */}
      <SaludoBasico nombre="Juan" edad={30} />
      
      {/* 2. Props con destructuring */}
      <SaludoDestructuring 
        nombre="Ana" 
        edad={25} 
        ciudad="Madrid" 
      />
      
      {/* 3. Props por defecto */}
      <div style={estilos.caja}>
        <h3>Props por Defecto</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {/* Con todas las props */}
          <TarjetaUsuario 
            nombre="Pedro" 
            rol="Admin" 
            avatar="👨‍💻" 
          />
          {/* Sin props (usa valores por defecto) */}
          <TarjetaUsuario />
          {/* Solo algunas props */}
          <TarjetaUsuario nombre="Lucía" avatar="👩‍🎨" />
        </div>
      </div>
      
      {/* 4. Diferentes tipos de props */}
      <TiposDeProps 
        texto="Hola Mundo"
        numero={10}
        esActivo={true}
        colores={["rojo", "verde", "azul"]}
        usuario={{ nombre: "Luis", email: "luis@email.com" }}
        onClick={() => alert("¡Función ejecutada!")}
      />
      
      {/* 5. Children prop */}
      <div style={estilos.caja}>
        <h3>Children Prop</h3>
        <Contenedor titulo="Mi Contenedor">
          <p>Este contenido es pasado como children</p>
          <Boton color="#28a745">Botón Verde</Boton>
          <Boton color="#dc3545">Botón Rojo</Boton>
        </Contenedor>
      </div>
      
      {/* 6. Spread props */}
      <SpreadProps />
      
      {/* 7. Composición */}
      <EjemploComposicion />
      
      {/* 8. Callbacks */}
      <EjemploCallbacks />
    </div>
  );
};

export default Props;
