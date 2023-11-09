/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/


function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada sólo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada sólo por minúsculas.";
    } else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
}


document.write(analizarCadena("Hola Mundo") + "<br>");
document.write(analizarCadena("¿que tal?") + "<br>");
document.write(analizarCadena("HABIA UNA VEZ") + "<br>");
