// Entidad (interface) Cliente
interface Cliente {
  id: string;        // p.ej. UUID
  nombre: string;
  dni: string;
  email: string;
  telefono?: string; // opcional
}
// Posibles estados de la cuenta (funciona de enum)
type EstadoCuenta = "ACTIVA" | "BLOQUEADA" | "CERRADA";

// Entidad CuentaBancaria
class CuentaBancaria {
  private iban: string;
  private _saldo: number;
  private idCliente: string;
  estado: EstadoCuenta;

  constructor(iban: string, saldo: number, idCliente: string) {
    this.iban = iban;
    this._saldo = saldo;
    this.idCliente = idCliente;
    this.estado = "ACTIVA";
  }

  get saldo(): number {
    return this._saldo;
  }

  ingresar(cantidad: number): void {
    if (this.estado !== "ACTIVA") return;
    if (cantidad <= 0) return;
    this._saldo += cantidad;
  }

  retirar(cantidad: number): void {
    if (this.estado !== "ACTIVA") return;
    if (cantidad <= 0) return;
    if (cantidad > this._saldo) return;
    this._saldo -= cantidad;
  }
}

// Ejemplo de uso
const cliente = crearCliente("Ana López", "12345678A", "ana@example.com");

const cuenta = new CuentaBancaria("ES76 1234 5678 0000 0001", 1000, cliente.id);

console.log("CuentaBancaria", cuenta);
console.log("Saldo Inicial:", cuenta.saldo);

cuenta.ingresar(500);
console.log("Saldo +500€:", cuenta.saldo);

cuenta.retirar(200);
console.log("Saldo -200€:", cuenta.saldo);

console.log("Saldo final:", cuenta.saldo);
