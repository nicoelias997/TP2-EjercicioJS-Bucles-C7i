// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let letra;
let resultado = ["T","R","W","A","G","M","Y","F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
do{
    let dni = parseInt(prompt("Ingrese su numero de dni"));

    if((dni >= 0) && (dni <= 99999999)){

    for(let i = 0; i < resultado.length; i++){
    
    let resto = dni % 23;

    if(resto === 0){
    letra = "T";
    document.write(letra);
    continue;
    } else if(resto === 1){
    letra = "R";
    document.write(letra);
    continue;
    } 
    

    }   
    } else if((dni > 99999999) || (dni < 0)){
        alert("Ingresa un numero entre 0 y 99999999")
    } else {
        alert("No se aceptan letras, solo numeros!")
    }

} while(confirm("¿Desea saber a que letra pertenece su dni?"));
