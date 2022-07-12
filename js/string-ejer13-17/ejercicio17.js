// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese un texto");

for(let i = 0; i < texto.length; i++){
    let primeraLetra = texto[i];
    if(texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u"){
        document.write(primeraLetra + ": esta es la primera vocal, y esta en la posicion : " + i + " del array");
        break;
    }
}