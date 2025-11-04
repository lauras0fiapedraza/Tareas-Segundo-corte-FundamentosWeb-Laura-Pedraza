const librosPorAutor = {
    "Charles Dickens": ["Oliver Twist","Historia de dos ciudades","Grandes esperanzas"],
    "Pablo Neruda": ["Veinte poemas de amor y una canción desesperada","Cien sonetos de amor","Residencia en la tierra"],
    "Julio Cortázar": ["Rayuela","Bestiario","Final del juego"],
    "Gabriel García Márquez": ["Cien años de soledad","El amor en los tiempos del cólera","Crónica de una muerte anunciada"]
};
function buscarLibros(autor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (librosPorAutor[autor]) {
                resolve(librosPorAutor[autor]);
            } else {
                reject("Autor no encontrado");
            }
        }, 1000);
    });
};
buscarLibros("Alejandra Pizarnik") 
//cambiar nombre por uno que exista en el diccionario para ver resultado exitoso
    .then(libros => {
        console.log("Libros encontrados:", libros);
    })
    .catch(error => {
        console.log(error);
    });