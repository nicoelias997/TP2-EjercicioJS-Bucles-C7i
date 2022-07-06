// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let cadenaTexto = "";
do{
    let texto = prompt("Introduce un texto");
    if(cadenaTexto == ""){
    cadenaTexto = cadenaTexto + texto;
    } else {
    cadenaTexto = cadenaTexto + "-" + texto;
}
} while(confirm("¿Quieres continuar escribiendo?"));

document.write(cadenaTexto);