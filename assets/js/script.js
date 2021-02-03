/*
 * (1) - Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
 * desde el 0 hasta el número que ingresó el usuario.
 */
let esValida = false;
let respuestaUsuario = "";
const CERO = 0;
const CIEN = 100;
const BLANCO = "blanco";

//Solicitamos el numero entre 0 y 100 hasta que sea valido.
/* while (!esValida) {
    respuestaUsuario = prompt("Ingrese un número entre 1 y 100.");

    if ((respuestaUsuario > CERO) && (respuestaUsuario < CIEN)) {
        esValida = true;
    }
}

console.log("Respuesta del punto #1");
for (i = 0; i <= respuestaUsuario; i++) {
    console.log("==> " + i)
}
 */

/*
 * (2) Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el
 * usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo
 * contrario, se le dejará de hacer la pregunta.
 */

/* respuestaUsuario = "";
do {
    respuestaUsuario = prompt("¿De qué color es el caballo blanco de Napoleón?");
    respuestaUsuario = respuestaUsuario.toLowerCase().trim();
} while (respuestaUsuario != BLANCO); */


/*
 * (3) Para ésto, la página web le
 * debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego,
 * debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El
 * promedio de notas mostrado debe estar redondeado a un número entero.
 */

/* let notas = [];
let suma = 0;

nota = prompt("Ingrese la nota de Matemáticas");
notas.push(parseFloat(nota));

nota = prompt("Ingrese la nota de Fisica");
notas.push(parseFloat(nota));

nota = prompt("Ingrese la nota de Ciencias");
notas.push(parseFloat(nota));

suma = notas.reduce((a, b) => a + b);



console.table(notas);
console.log("La suma es: " + suma);
console.log("El promedio es: " + parseInt(suma / 3));
alert("El promedio es: " + parseInt(suma / 3));
 */


/*
 * (4) Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de
 * manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas
 * por consola, a excepción de la que tenga el nombre de “manzana”.
 */
/* let frutas = [];

do {
    frutas.push(prompt("Ingrese el nombre de una fruta"));
} while (frutas.length < 3);

frutas.forEach(function(fruta) { if (fruta != "manzana") console.log("->" + fruta); }) */


/*
 * (5) Solicite al usuario escribir su nombre. Luego, debe determinar la cantidad de vocales y
 * consonantes que tiene dicho nombre y mostrarlos por pantalla (utilice alert()).
 */

let nombre = (prompt("Ingrese su mombre")).trim().toLowerCase();
let numeroVocales = nombre.match(/[aeiou]/gi).length;
let numeroConsonantes = nombre.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;

console.log("Nombre : " + nombre);
console.log("Cantidad de vocales: " + numeroVocales);
console.log("Cantidad de consonantes: " + numeroConsonantes);