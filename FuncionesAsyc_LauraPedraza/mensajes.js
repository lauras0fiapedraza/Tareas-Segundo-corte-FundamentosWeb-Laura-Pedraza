

function mensaje(enviar) { 
    return new Promise((resolve, reject) => {
        console.log("Inicio");

        setTimeout(() => { 
            if (enviar) {
                resolve("Mensaje enviado correctamente");
            } else {
                reject("No se pudo enviar el mensaje");
            }
            
        }, 3000);
        console.log("Fin");
    });
}
async function msg(){
    try{
        const envio = await mensaje(true);
        console.log(envio);
        console.log("Proceso exitoso")
    }catch(error){
        console.log("Algo salio mal", error);
    }finally{
        console.log("la operación ha terminado");
    }
}
msg();


