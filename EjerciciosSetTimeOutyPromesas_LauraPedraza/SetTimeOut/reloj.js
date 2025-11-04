let segundos = 5;

function cuentaRegresiva() {
    console.log(segundos);
    segundos--;

    if (segundos >= 0) {
        setTimeout(cuentaRegresiva, 1000);
    } else {
        console.log("Tiempo acabado");
    }
}

cuentaRegresiva();

