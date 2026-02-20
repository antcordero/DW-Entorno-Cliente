// función asíncrona que devuelva un número después de 1 segundo
function getNumber(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

async function demo() {
    console.log("Obteniendo número...");
    const num = await getNumber();
    console.log("Número obtenido:", num);
}

console.log("Obteniendo número...");
console.log("Número solicitado, esperando respuesta...");
demo();