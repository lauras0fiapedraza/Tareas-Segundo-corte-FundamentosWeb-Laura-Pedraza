
console.log("Pago online iniciado...");

setTimeout(() => {
    
    console.log(" Filtro 1 aprovado");

    setTimeout(() => {
        console.log(" Filtro 2 aprovado");

        setTimeout(() => {
            console.log("Proceso finalizado ✅");
        }, 2000);

    }, 1000);

}, 1000);
