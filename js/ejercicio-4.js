/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/


function esParOImpar(numero) {
    if (numero % 2 == 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}


document.write(esParOImpar(7) + "<br>");
document.write(esParOImpar(6) + "<br>");
document.write(esParOImpar(5) + "<br>");
document.write(esParOImpar(10) + "<br>");
document.write(esParOImpar(9) + "<br>");
document.write(esParOImpar(8) + "<br>");
document.write(esParOImpar(3) + "<br>");
document.write(esParOImpar(2) + "<br>");
document.write(esParOImpar(1) + "<br>");
document.write(esParOImpar(4) + "<br>");