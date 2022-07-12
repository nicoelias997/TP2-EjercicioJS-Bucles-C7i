// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let resultado;
let letras = ["T","R","W","A","G","M","Y","F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do{
    let dni = parseInt(prompt("Ingrese su numero de dni para saber que letra se le asignara"));

    if((dni >= 0) && (dni <= 99999999)){
    resultado = letras[dni%23];
    document.write("Al numero de dni ingresado: " + dni + " le corresponde la letra: " + resultado + "." + "<br>");
  
    } else if((dni > 99999999) || (dni < 0)){
        alert("Ingresa un numero entre 0 y 99999999")
    } else {
        alert("No se aceptan letras, solo numeros!")
    }
    }  while(confirm("¿Desea saber acerca de otros dni?"));

      //Comento lo que hice antes, donde no queria poner las 23 condiciones
     // if(resto === 0){
    // letra = "T";
    // document.write(letra);
    // continue;
    // } else if(resto === 1){
    // letra = "R";
    // document.write(letra);
    // continue;
    // } 