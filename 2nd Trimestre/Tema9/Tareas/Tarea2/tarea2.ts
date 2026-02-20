// 1) interfaz pedido

interface Pedido {
  id: number
  cliente: string
  importe: number
  pagado: boolean
}

function totalFacturado(pedidos: Pedido[]): number {
  return pedidos.reduce((acumulado, pedido) => acumulado + pedido.importe, 0)
}

function totalPendiente(pedidos: Pedido[]): number {
  return pedidos
    .filter(p => !p.pagado)
    .reduce((acumulado, p) => acumulado + p.importe, 0)
}

function pedidosPagadosDeCliente(pedidos: Pedido[], nombreCliente: string): Pedido[] {
  return pedidos.filter(pedido => pedido.cliente === nombreCliente && pedido.pagado)
}



// 2) funciones texto

function repetirTexto(texto: string, veces: number = 2): string {
  return Array.from({ length: veces }).map(() => texto).join("")
}

function capitalizar(texto: string): string {
  if (!texto) return texto
  const [primera, ...resto] = texto
  return primera.toUpperCase() + resto.join("")
}



// 3) interfaz persona

interface Persona {
  nombre: string
  edad: number
  saludar(): string
}

class Estudiante implements Persona {
  constructor(
    public nombre: string,
    public edad: number,
    public curso: string
  ) {}

  saludar(): string {
    return `Hola, soy ${this.nombre} y estudio ${this.curso}`
  }
}



// 4) interfaz figura

interface Figura {
  area(): number
  perimetro(): number
}

class Rectangulo implements Figura {
  constructor(
    public ancho: number,
    public alto: number
  ) {}

  area(): number {
    return this.ancho * this.alto
  }

  perimetro(): number {
    return 2 * (this.ancho + this.alto)
  }
}

class Cuadrado implements Figura {
  constructor(public lado: number) {}

  area(): number {
    return this.lado ** 2
  }

  perimetro(): number {
    return 4 * this.lado
  }
}



// 5) empleados

abstract class Empleado {
  constructor(
    public nombre: string,
    public salarioBase: number
  ) {}

  abstract calcularSalario(): number
}

interface IConBonos {
  calcularBonos(): number
}

class EmpleadoFijo extends Empleado implements IConBonos {
  constructor(
    nombre: string,
    salarioBase: number,
    private bono: number
  ) {
    super(nombre, salarioBase)
  }

  calcularBonos(): number {
    return this.bono
  }

  calcularSalario(): number {
    return this.salarioBase + this.calcularBonos()
  }
}

class EmpleadoPorHoras extends Empleado implements IConBonos {
  constructor(
    nombre: string,
    salarioBase: number,
    public horas: number,
    public tarifaHora: number
  ) {
    super(nombre, salarioBase)
  }

  calcularBonos(): number {
    return this.horas > 160 ? 200 : 0
  }

  calcularSalario(): number {
    return this.horas * this.tarifaHora + this.calcularBonos()
  }
}



// 6) dispositivos

interface ConWifi {
  conectarWifi(): string
}

interface ConBluetooth {
  conectarBluetooth(): string
}

interface ConAlmacenamiento {
  capacidad: number
  mostrarCapacidad(): string
}

class Smartphone implements ConWifi, ConBluetooth, ConAlmacenamiento {
  constructor(public capacidad: number) {}

  conectarWifi(): string {
    return "Conectado a WiFi"
  }

  conectarBluetooth(): string {
    return "Conectado por Bluetooth"
  }

  mostrarCapacidad(): string {
    return `Tiene ${this.capacidad}GB`
  }
}

class SmartWatch implements ConBluetooth, ConAlmacenamiento {
  constructor(public capacidad: number) {}

  conectarBluetooth(): string {
    return "Reloj conectado por Bluetooth"
  }

  mostrarCapacidad(): string {
    return `Capacidad ${this.capacidad}GB`
  }
}
