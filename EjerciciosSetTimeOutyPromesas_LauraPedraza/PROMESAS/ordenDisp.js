const comidaDisponible = false;
const ordenComida = new Promise((resolve, reject)=>{
    if(comidaDisponible){
        resolve("Tu comida está en camino");
    }else{
        reject("Lo siento, no hay comida disponible");
    }
})
ordenComida
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(error)
    })