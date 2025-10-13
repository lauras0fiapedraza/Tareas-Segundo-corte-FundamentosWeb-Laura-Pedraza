function mostrar(){
    let nombre = document.getElementById("nombre").value;
    let notafinal = parseFloat(document.getElementById("nota").value);
    let resultado;

    let estadoElemento = document.getElementById("aprobado"); 
    //llamar en una variable el elemendo para cambiar el color
    estadoElemento.style.color = ""; // Restablecer el color predeterminado

    if(notafinal > 0 && notafinal <= 5.0)
    {    
        if (notafinal >= 3.0)
        {
        resultado = "Aprobado";
        estadoElemento.style.color = "green";
            if (notafinal >= 4.5)
            { 
                resultado = "Felicitaciones, "+nombre + " aprobaste con excelencia";    
            }
        } 
        else
        {
            resultado = "Reprobado";
            estadoElemento.style.color = "red";
        }
        document.getElementById("nombre-r").innerText = "Estudiante: " + nombre;
        document.getElementById("nota-r").innerText = "Nota final: " + notafinal;
        estadoElemento.innerText = "Estado: " + resultado;
    }   
    //para que quede en blanco luego de mostrar la nota
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";  
}