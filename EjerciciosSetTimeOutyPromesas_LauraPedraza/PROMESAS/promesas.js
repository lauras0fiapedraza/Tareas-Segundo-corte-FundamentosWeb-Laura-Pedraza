
const miPromesa = new Promise((resolve, reject) => {
    let exito = false;

    if (exito) {
        resolve("la operacion fue exitosa");
    } else {
        reject("hubo un error en la operacion");
    }
});

miPromesa
    .then((resultado) => {
        console.log("exito:", resultado);
    })
    .catch((error) => {
        console.log("error:", error);
    });