// enum Rol con admin, editor y visitante
enum Rol {
    Admin,
    Editor,
    Visitante
}

// admin -> leer, escribir y eliminar
// editor -> leer y escribir
// visitante -> leer

function permisos(rol: Rol): string {
    switch(rol) {
        case Rol.Admin:
            return "Leer, escribir y eliminar";
        case Rol.Editor:
            return "Leer y escribir";
        case Rol.Visitante:
            return "Leer";
        default:
            return "Rol no válido";
    }
}

console.log(permisos(Rol.Admin)); // Leer, escribir y eliminar
console.log(permisos(Rol.Editor)); // Leer y escribir
console.log(permisos(Rol.Visitante)); // Leers
