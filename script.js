//Declaración de Variables:

// Variables
var numero = 5;
var texto = "Hola, mundo!";
var verdadero = true;
var falso = false;
var nulo = null;
var indefinido = undefined;
var arreglo = [1, "dos", true];

// Tipos de datos
console.log(typeof numero); // "number"
console.log(typeof texto); // "string"
console.log(typeof verdadero); // "boolean"
console.log(typeof nulo); // "object"
console.log(typeof indefinido); // "undefined"
console.log(typeof arreglo); // "object"

//Decisiones en JavaScript:


// Mayor, menor o igual a 10
var numero = 15;

if (numero > 10) {
    console.log("El número es mayor que 10.");
} else if (numero < 10) {
    console.log("El número es menor que 10.");
} else {
    console.log("El número es igual a 10.");
}

// Par o impar
var numeroPar = 8;
if (numeroPar % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

// Vocal o consonante
var letra = "a";
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    console.log("Es una vocal.");
} else {
    console.log("Es una consonante.");
}

// Mayor o menor de edad
var edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad.");
} else {
    console.log("Es menor de edad.");
}

// Día de la semana
var dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de día no válido.");
}

//Funciones:

// Suma de dos números
function suma(a, b) {
    return a + b;
}

// Par o impar
function esPar(numero) {
    return numero % 2 === 0;
}

// Suma de elementos de un array
function sumaArray(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

// Longitud del string más largo
function longitudStringMasLargo(strings) {
    var longitudMaxima = 0;
    for (var i = 0; i < strings.length; i++) {
        var longitudActual = strings[i].length;
        if (longitudActual > longitudMaxima) {
            longitudMaxima = longitudActual;
        }
    }
    return longitudMaxima;
}

// Valores de propiedades de un objeto
function valoresObjeto(objeto) {
    return Object.values(objeto);
}

//Vectores:

// Número más grande en un array
function numeroMasGrande(array) {
    var maximo = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    return maximo;
}

// Ordenar números de menor a mayor
function ordenarNumeros(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
}

// Elementos comunes entre dos arrays
function elementosComunes(array1, array2) {
    return array1.filter(function(valor) {
        return array2.includes(valor);
    });
}

// Convertir strings a mayúsculas en un array
function convertirAMayusculas(array) {
    return array.map(function(elemento) {
        return elemento.toUpperCase();
    });
}

// Suma acumulativa de elementos de un array
function sumaAcumulativa(array) {
    var resultado = [];
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i];
        resultado.push(suma);
    }
    return resultado;
}

//Bucles:

// Bucle for
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Bucle while
var j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Bucle for para imprimir elementos de un array
var numeros = [1, 2, 3, 4, 5];
for (var k = 0; k < numeros.length; k++) {
    console.log(numeros[k]);
}

// Suma de números del 1 al n con función
function sumaHastaN(n) {
    var suma = 0;
    for (var i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

// Suma de elementos de un array con while
function sumaArray(array) {
    var suma = 0;
    var i = 0;
    while (i < array.length) {
        suma += array[i];
        i++;
    }
    return suma;
}