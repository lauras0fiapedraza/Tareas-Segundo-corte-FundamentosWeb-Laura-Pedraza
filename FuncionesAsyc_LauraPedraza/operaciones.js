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

async function resultados(){
    try{
        const resultado = await operacion_promesa(2,2);
        console.log(resultado);
        console.log("Todo salio exitoso")   
    }catch(error){
        console.log("Algo tuvo error",error);
    }finally{
        console.log("la operación ha terminado");
    }
}
resultados();