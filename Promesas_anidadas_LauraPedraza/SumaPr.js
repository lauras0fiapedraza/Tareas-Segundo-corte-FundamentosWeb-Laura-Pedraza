
function operacion_promesa (num1,num2){
return new Promise((resolve , reject) =>{
const res = num1+num2;
if(res > 0){
    resolve("la suma es positiva " + res);
}else if (res<0){
    resolve("la suma es negativa " + res);
}else{
    reject("El resultado no es negativo ni positivo");
}
});
}



operacion_promesa(2,-2)
    .then((resultado) => {
        console.log("exito!! ", resultado);
    })
    .catch((error) => {
        console.log("error! ", error);
    });
    
operacion_promesa(2,2)
    .then((resultado) => {
        console.log("exito!! ", resultado);
    })
    .catch((error) => {
        console.log("error! ", error);
    });

operacion_promesa(-2,-2)
    .then((resultado) => {
        console.log("exito!! ", resultado);
    })
    .catch((error) => {
        console.log("error! ", error);
    });