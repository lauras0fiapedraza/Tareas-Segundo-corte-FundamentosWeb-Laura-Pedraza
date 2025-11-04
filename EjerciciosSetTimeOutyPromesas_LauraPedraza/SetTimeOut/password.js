let user = "Amin";
let contraseña ="1234";
if(user === "Admin" && contraseña === "1234"){
    setTimeout(() => {
        console.log("validando credenciales...");
                setTimeout(() => {
            console.log("Acceso concedido");
        }, 3000);
    }, 2000);

}else{
    console.log("Acceso denegado");
}