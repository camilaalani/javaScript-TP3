/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

/*let frecuencia = [];


for (let i = 2; i <= 12; i++) {
  frecuencia[i] = 0;
}

for (let j = 0; j < 50; j++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    frecuencia[suma]++;
  }

document.write("La frecuencia de cada suma es:");
for (let k = 2; k <= 12; k++) {
  document.write(k + ": " + frecuencia[k]);
}
*/



let resultados = new Array(13);
for (let i = 0; i < 13; i++) {
    resultados[i] = 0;
}


for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    resultados[suma]++;
}


document.write("<table>");
for (let i = 2; i <= 12; i++) {
    document.write("<tr><td>" + i + "</td><td>" + resultados[i] + "</td></tr>");
}
document.write("</table>");

