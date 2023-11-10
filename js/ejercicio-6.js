/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/


let a = prompt("Por favor, ingresa el valor del primer lado del rectángulo");
let b = prompt("Por favor, ingresa el valor del segundo lado del rectángulo");


function calcularPerimetro(a, b) {
    return 2 * (Number(a) + Number(b));
}


document.write("El perímetro del rectángulo es: " + calcularPerimetro(a, b));
