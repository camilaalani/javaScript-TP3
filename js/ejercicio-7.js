/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/


let numero = prompt("Por favor, ingresa un número para ver su tabla de multiplicar");


function mostrarTablaDeMultiplicar(numero) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " * " + i + " = " + numero * i + "\n";
    }
    return resultado;
}


document.write(mostrarTablaDeMultiplicar(numero));
