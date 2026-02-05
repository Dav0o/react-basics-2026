/**
 * 01 - COMPONENTES FUNCIONALES Y JSX
 * 
 * Los componentes son la base de React. Son funciones que retornan JSX.
 * JSX es una extensión de JavaScript que permite escribir HTML dentro de JS.
 * 
 * CONCEPTOS CLAVE:
 * - Componente funcional: función que retorna JSX
 * - JSX: sintaxis que combina HTML con JavaScript
 * - Expresiones en JSX: usar {} para insertar JavaScript
 * - Renderizado condicional: if/else, ternario, &&
 * - Fragmentos: <> </> para agrupar sin div extra
 */

// ============================================
// 1. COMPONENTE FUNCIONAL BÁSICO
// ============================================
// Un componente es simplemente una función que retorna JSX
function ComponenteBasico() {
  return <h2>¡Hola! Soy un componente funcional</h2>;
}

// También se puede escribir con arrow function
const ComponenteArrow = () => {
  return <p>Soy un componente con arrow function</p>;
};

// Retorno implícito (sin llaves ni return)
const ComponenteImplicito = () => <p>Retorno implícito sin llaves</p>;


// ============================================
// 2. JSX - EXPRESIONES CON { }
// ============================================
// Dentro de {} puedes poner cualquier expresión JavaScript
const ExpresionesJSX = () => {
  const nombre = "María";
  const edad = 25;
  const fecha = new Date().toLocaleDateString();
  
  return (
    <div style={estilos.caja}>
      <h3>Expresiones en JSX</h3>
      {/* Variables */}
      <p>Nombre: {nombre}</p>
      
      {/* Operaciones matemáticas */}
      <p>Edad en 5 años: {edad + 5}</p>
      
      {/* Llamadas a funciones */}
      <p>Fecha actual: {fecha}</p>
      
      {/* Métodos de string */}
      <p>Nombre en mayúsculas: {nombre.toUpperCase()}</p>
      
      {/* Template literals */}
      <p>{`${nombre} tiene ${edad} años`}</p>
    </div>
  );
};


// ============================================
// 3. RENDERIZADO CONDICIONAL
// ============================================
const RenderizadoCondicional = () => {
  const estaLogueado = true;
  const tieneNotificaciones = true;
  const cantidadNotificaciones = 5;
  const rol = "admin"; // Puede ser: "admin", "user", "guest"
  
  return (
    <div style={estilos.caja}>
      <h3>Renderizado Condicional</h3>
      
      {/* 1. Operador ternario (condición ? verdadero : falso) */}
      <p>
        Estado: {estaLogueado ? "✅ Conectado" : "❌ Desconectado"}
      </p>
      
      {/* 2. Operador && (si es true, muestra lo de la derecha) */}
      {tieneNotificaciones && (
        <p>🔔 Tienes {cantidadNotificaciones} notificaciones</p>
      )}
      
      {/* 3. Ternario con componentes/elementos */}
      {estaLogueado ? (
        <button style={estilos.boton}>Cerrar Sesión</button>
      ) : (
        <button style={estilos.boton}>Iniciar Sesión</button>
      )}
      
      {/* 4. Múltiples condiciones con ternarios anidados */}
      <p>
        Rol: {
          rol === "admin" ? "👑 Administrador" :
          rol === "user" ? "👤 Usuario" :
          "👻 Invitado"
        }
      </p>
    </div>
  );
};


// ============================================
// 4. FRAGMENTOS - <> </> o <Fragment>
// ============================================
// Los fragmentos permiten retornar múltiples elementos sin crear un div extra
const EjemploFragmentos = () => {
  return (
    <>
      <h3>Usando Fragmentos</h3>
      <p>Primer párrafo</p>
      <p>Segundo párrafo</p>
      {/* No hay div contenedor en el DOM, estos elementos son hermanos */}
    </>
  );
};


// ============================================
// 5. ESTILOS EN JSX
// ============================================
const EstilosEnJSX = () => {
  // Estilos inline (objeto JavaScript)
  const estiloInline = {
    backgroundColor: '#e0e0e0',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px'
  };
  
  return (
    <div style={estilos.caja}>
      <h3>Estilos en JSX</h3>
      
      {/* Estilo inline directo */}
      <p style={{ color: 'blue', fontWeight: 'bold' }}>
        Estilo inline directo
      </p>
      
      {/* Estilo con variable */}
      <p style={estiloInline}>
        Estilo desde variable
      </p>
      
      {/* className para CSS externo */}
      <p className="mi-clase-css">
        Usando className (no class)
      </p>
    </div>
  );
};



// ============================================
// ESTILOS PARA LOS EJEMPLOS
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
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  titulo: {
    color: '#333',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
  }
};


// ============================================
// COMPONENTE PRINCIPAL QUE EXPORTAMOS
// ============================================
const ComponentesJSX = () => {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>01 - Componentes y JSX</h1>
      
      <ComponenteBasico />
      <ComponenteArrow />
      <ComponenteImplicito />
      
      <ExpresionesJSX />
      <RenderizadoCondicional />
      <EjemploFragmentos />
      <EstilosEnJSX />
     
    </div>
  );
};

export default ComponentesJSX;
