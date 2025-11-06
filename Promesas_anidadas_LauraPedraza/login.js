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

sesion("Adrian", "1234")
    .then((respuesta)=>{
        console.log(respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })

