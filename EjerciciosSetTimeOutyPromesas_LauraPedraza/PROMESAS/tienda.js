const stock = 2;
const prendaDisp = new Promise ((resolve, reject)=>{
    if(stock > 5){
        resolve("Prenda disponible");
    }else if(stock >0 && stock <=5){
        resolve("Prenda casi agotada");
    }else{
        reject("Prenda no disponible");
    }
})
prendaDisp
    .then((mensaje)=>{
        console.log(mensaje);
    })
    .catch((error)=>{
        console.log(error);
    })