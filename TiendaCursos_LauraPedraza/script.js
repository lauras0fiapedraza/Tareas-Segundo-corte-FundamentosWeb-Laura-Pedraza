function mostrar(boton){
    //profe soy muy crack encontre una forma de funcion en internet 
    let curso = boton.parentElement.querySelector(".curso-s").value;
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    
    document.querySelector(".registro").style.display="block";
    document.getElementById("nombre-curso").innerText ="CURSO: "+ curso;
    document.getElementById("nombre-r").innerText ="NOMBRE: "+ nombre;
    document.getElementById("correo-r").innerText ="CORREO: " + correo;
}