const prediccion = 'sol';
const pronostico = new Promise((resolve, reject)=>{
    if(prediccion =='sol'){
        resolve("El dia de hoy estara soleado")
    }else{
        reject("El dia de hoy habra lluvia")
    }
})
pronostico
    .then((respuesta)=>{
        console.log(respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })