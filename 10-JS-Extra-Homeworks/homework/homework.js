// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = Object.keys(objeto).map(function(key) {
    return [key,objeto[key]]
  });
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  objeto = {};
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) in objeto) {
      objeto[string.charAt(i)] += 1 
    } else {
      objeto[string.charAt(i)] = 1
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringMay = "";
  var stringMin = "";
  for(var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      stringMay += s[i]
    } else {
      stringMin += s[i]
    };
  };
  return stringMay + stringMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(" ");
  nuevoArray = array.map(function(x) {
    return x.split("").reverse().join("");
  })
  return nuevoArray.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroStr = numero.toString().split("");
  if (numeroStr / 2 === 0) {
    for (var i = 0; i < numeroStr.length / 2; i++) {
      if (numeroStr[i] === numeroStr[numeroStr.length - i - 1]) {
        resultado = "Es capicua";
      } else {
        resultado = "No es capicua";
        break;
      }
    }
  } else {
    for (var i = 0; i < Math.trunc(numeroStr.length / 2); i++) {
      if (numeroStr[i] === numeroStr[numeroStr.length - i - 1]) {
        resultado = "Es capicua";
      } else {
        resultado = "No es capicua";
        break;
      }
    }
  }
  return resultado;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaArray = cadena.split("");
  var nuevoArray = []
  for(var i = 0; i < cadenaArray.length; i++){
    if (cadenaArray[i] != "a" && cadenaArray[i] != "b" && cadenaArray[i] != "c") {
      nuevoArray.push(cadenaArray[i]);
    }
  }
  return nuevoArray.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var estado = true;  
  while (estado) {
    estado = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        var aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        estado = true;
      }
    }  
  }
  return arr;   
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
 /*  var arreglo1Str = arreglo1.toString().split(",");
  var arreglo2Str = arreglo2.toString().split(","); */
  var nuevoArreglo = arreglo1.filter(function(i) {
    return arreglo2.includes(i);
  })  
  return nuevoArreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

