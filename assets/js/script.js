/*(1) - Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
/*desde el 0 hasta el número que ingresó el usuario.
*/
let esValida = false;
let respuestaUsuario = "55";


//Solicitamos el numero entre 0 y 100 hasta que sea valido.
while (!esValida) {
    respuestaUsuario = prompt("Ingrese un número entre 1 y 100.");

    if ((respuestaUsuario > 0) && (respuestaUsuario < 100)) {
        esValida = true;
    }
}

console.log("Respuesta del punto #1");
for (i = 0; i <= respuestaUsuario; i++) {
    console.log("==> " + i)
}


/*
 *(2)
 */

esValida = false;
respuestaUsuario = "";
do {
    respuestaUsuario = prompt("¿De qué color es el caballo blanco de Napoleón?");

    if (respuestaUsuario == "blanco") {
        esValida = true;
    }
} while (esValida == false);