/*
 * (1) - Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
 * desde el 0 hasta el número que ingresó el usuario.
 */
//let esValida = false;
let respuestaUsuario = "";
const CERO = 0;
const CIEN = 100;

//Solicitamos el numero entre 0 y 100 hasta que sea valido.
do {
    respuestaUsuario = Number(prompt("Ingrese un número entre 1 y 100."));
} while ((respuestaUsuario < CERO) || (respuestaUsuario > CIEN));

console.log("Respuesta del punto #1");
for (i = 0; i <= respuestaUsuario; i++) {
    console.log("==> " + i)
}


/*
 * (2) Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el
 * usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo
 * contrario, se le dejará de hacer la pregunta.
 */


const BLANCO = "blanco";
respuestaUsuario = "";
do {
    respuestaUsuario = prompt("¿De qué color es el caballo blanco de Napoleón?");
    respuestaUsuario = respuestaUsuario.toLowerCase().trim();
} while (respuestaUsuario != BLANCO);


/*
 * (3) Para ésto, la página web le
 * debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego,
 * debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El
 * promedio de notas mostrado debe estar redondeado a un número entero.
 */

let notas = [];
let promedio = 0;


notas.push(parseFloat(prompt("Ingrese la nota de Matemáticas")));
notas.push(parseFloat(prompt("Ingrese la nota de Fisica")));
notas.push(parseFloat(prompt("Ingrese la nota de Ciencias")));

promedio = (notas.reduce((a, b) => a + b)) / notas.length;


alert("El promedio es: " + Math.round((promedio)));



/*
 * (4) Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de
 * manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas
 * por consola, a excepción de la que tenga el nombre de “manzana”.
 */
let frutas = [];
const MAXIMO = 3;

do {
    frutas.push(prompt("Ingrese el nombre de una fruta"));
} while (frutas.length < MAXIMO);

frutas.forEach(function(fruta) { if (fruta != "manzana") console.log("->" + fruta); })


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

alert("Cantidad de vocales: " + numeroVocales);
alert("Cantidad de consonantes: " + numeroConsonantes);