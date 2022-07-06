// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let total = 0;

do{
    let numeros = parseInt(prompt("Elija un numero para luego sumarlos"));
    
    if(isNaN(numeros) == false){
    total = total + numeros;
} else {
    alert("Error. Escribe un numero");
}

} while(confirm("¿Deseas seguir sumando numeros?"));

document.write(total);
