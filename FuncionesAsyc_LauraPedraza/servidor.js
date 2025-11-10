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

async function ejecutar(){
    try{
        const conexion = await conectar(true);
        console.log(conexion);

        const descarga = await descargar(true);
        console.log(descarga);

        const analisis = await Pro_datos(true);
        console.log(analisis);

        console.log("Todos los procesos se completaron exitosamente. ")
    } catch(error){
        console.error("Se produjo un error: ", error)
    }finally{
        console.log("la operación ha terminado");
    }
}
ejecutar();