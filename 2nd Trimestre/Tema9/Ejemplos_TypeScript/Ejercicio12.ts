// Entidad (interface) Cliente
interface Cliente {
  id: string;        // p.ej. UUID
  nombre: string;
  dni: string;
  email: string;
  telefono?: string; // opcional
}

// Función que crea un cliente a partir de datos --> funciona como un constructor
function crearCliente(
  nombre: string,
  dni: string,
  email: string,
  telefono?: string
): Cliente {
  const id = crypto.randomUUID();
  return {
    id,
    nombre,
    dni,
    email,
    telefono,
  };
}

// Ejemplo de uso
const c1 = crearCliente("Ana López", "12345678A", "ana@example.com");
console.log(c1);
