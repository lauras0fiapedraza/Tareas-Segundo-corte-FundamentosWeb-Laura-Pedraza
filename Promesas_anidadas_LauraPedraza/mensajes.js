console.log("Inicio");

const mensajes = new Promise((resolve , reject)=>{
setTimeout(()=>{ 
    const mensaje=true;
    if(mensaje){
        resolve("mensaje enviado");
    }else{
        reject("no se pudo enviar el mensaje");
    }
}, 3000)
})

console.log("Fin")

mensajes 
    .then(res =>{
        console.log(res);
    })
    .catch(error =>{
        console.log(error);
    })

/*salen los dos mensajes primero porque la promesa se ejecuta despues de 3 segundos
a diferencia de los console.log que se ejecutan automaticamente apenas se llama la función
se aplica la asincronia ya que no es necesario esperar a la segunda tarea para ejecutar lo siguiente*/