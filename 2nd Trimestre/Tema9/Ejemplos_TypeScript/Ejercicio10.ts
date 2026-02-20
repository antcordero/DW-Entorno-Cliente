// función asíncrona que devuelva un objeto {ok: boolean; tiempo: number} después de 500ms
async function getEstado(): Promise<{ok: boolean; tiempo: number}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ok: true, tiempo: 500});
        }, 500);
    });
}

getEstado().then((estado) => {
    console.log("Estado obtenido:", estado);
}).catch((error) => {
    console.error("Error obteniendo estado:", error);
});