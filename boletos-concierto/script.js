function compra(){
let nombre = document.getElementById("nombre-compra").value;
let ubicacion = document.getElementById("ubicacion-compra").value;
let cantBoletos = parseInt(document.getElementById("boletos-compra").value);

let precioVip = 50000;
let precioGen = 30000;
let precioEst = 20000;
let descuento = 0;
let total = 0;

if(ubicacion == "VIP"){
    total = cantBoletos*precioVip;
    if(cantBoletos >= 10){
        descuento = 10;
        total = (total * descuento)/100
    }
    else if(cantBoletos >= 5 && cantBoletos < 10){
        descuento = 5;
        total = (total * descuento)/100
    }
    else if(cantBoletos >= 3 && cantBoletos < 5){
        descuento = 3
        total = (total * descuento)/100
    }
}

if(ubicacion == "General"){
    total = cantBoletos*precioGen;
    if(cantBoletos >= 10){
        descuento = 10;
        total = (total * descuento)/100
    }
    else if(cantBoletos >= 5 && cantBoletos < 10){
        descuento = 5
        total = (total * descuento)/100
    }
    else if(cantBoletos >= 3 && cantBoletos < 5){
        descuento = 3
        total = (total * descuento)/100
    }
}


if(ubicacion == "Estudiante"){
    total = cantBoletos*precioEst;
    if(cantBoletos >= 10){
        descuento = 10;
        total = (total * descuento)/100
    }
    else if(cantBoletos >= 5 && cantBoletos < 10){
        descuento = 5
        total = (total * descuento)/100
    }
    else if(cantBoletos >= 3 && cantBoletos < 5){
        descuento = 3
        total = (total * descuento)/100
    }
}

document.getElementById("nombre-factura").innerText = nombre;
document.getElementById("boletos-factura").innerText = cantBoletos;
document.getElementById("descuento-factura").innerText = descuento ;
document.getElementById("total-factura").innerText = total;

}



