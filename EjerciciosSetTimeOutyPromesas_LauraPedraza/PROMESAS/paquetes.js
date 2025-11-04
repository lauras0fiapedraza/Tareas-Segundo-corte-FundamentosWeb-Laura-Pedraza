const paquete = Math.random() < 0.5; //probabilidad del 50% que sea entregado 
const entregaPaquetes = new Promise ((resolve, reject)=>{
    if(paquete){
        resolve("Paquete entregado con exito");
    }else{
        reject("Error en la entrega del paquete");
    }
})
entregaPaquetes
    .then((mensaje)=>{
        console.log(mensaje);
    })
    .catch((error)=>{
        console.log(error);
    })