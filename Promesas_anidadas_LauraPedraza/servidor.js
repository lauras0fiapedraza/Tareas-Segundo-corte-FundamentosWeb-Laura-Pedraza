function conectar(verificar){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> { 
        if(verificar){ 
            resolve("OK: Servidor conectado");
        }else{
            reject("Error: el sevidor no se conecto");
        }
    }, 1000);      
    });
};

function descargar(conectar){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> { 
        if(conectar){ 
            resolve("Datos descargados");
        }else{
            reject("Error datos");
        }
    }, 2000);      
    });
};

function Pro_datos(descargar){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> { 
        if(descargar){ 
            resolve("Analisis de datos");
        }else{
            reject("Error en analisis");
        }
    }, 3000);      
    });
};

conectar(verificar=true)
    .then((respuesta)=>{
        console.log(respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })

descargar(conectar)
    .then((respuesta)=>{
        console.log(respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })

Pro_datos(descargar)
    .then((respuesta)=>{
        console.log(respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })