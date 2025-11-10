function sesion(user , password){
    return new Promise((resolve, reject) => {
    if(user === "Adrian" && password == "1234"){
    setTimeout(() => {
        console.log("validando credenciales...");
                setTimeout(() => {
            resolve("Acceso concedido");
        }, 2000);
    }, 1000);

    }else{
    reject("Acceso denegado");
    }        
    });

}
async function loggear(){
    try{
        const log = await sesion("Adrian","1234");
        console.log(log);
    
        console.log("todo salio exitoso");
    }catch(error){
        console.log("Ups! algo salio mal", error);
    }finally{
        console.log("la operación ha terminado");
    }
}
loggear();