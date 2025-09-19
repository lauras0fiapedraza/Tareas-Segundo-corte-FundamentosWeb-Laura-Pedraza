//funcion para mostrar saludo personalizado
function saludar(){
let nombre = document.getElementById("Nombre").value;
alert("hola "+nombre);
}
//funcion para realizar suma, resta, multiplicacion y division
function suma(){
let num1 =document.getElementById("num-1").value;
let num2=document.getElementById("num-2").value;
//convertir los datos ingresados en el input a enteros para realizar operaciones
let resultadoSum = parseInt(num1) + parseInt(num2);
document.getElementById("s").innerText=resultadoSum;

}
function resta(){
let num1=document.getElementById("num-1").value;   
let num2=document.getElementById("num-2").value;
let resultadoRes = parseInt(num1) - parseInt(num2);
document.getElementById("r").innerText=resultadoRes;
}

function multiplicacion(){
let num1=document.getElementById("num-1").value; 
let num2=document.getElementById("num-2").value;   
let resultadoMul = parseInt(num1) * parseInt(num2);
document.getElementById("m").innerText=resultadoMul;
}

function division(){
let num1=document.getElementById("num-1").value; 
let num2=document.getElementById("num-2").value;  
let resultadoDiv = parseInt(num1) / parseInt(num2);
document.getElementById("d").innerText=resultadoDiv;
}
