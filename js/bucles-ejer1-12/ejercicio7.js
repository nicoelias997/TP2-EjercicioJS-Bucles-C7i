// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
let x = parseInt(prompt("Elija un numero del 1 al 50, se armara una piramide desde el numero que elija hasta el 1"));

if((x > 0) && (x <= 50)){
for(let i = x; i > 0  ; i--){ 
    for(let y = 0; y < i; y++){ 
       document.write(i); 
    }
    document.write("<br>");
}
} else {
    document.write("Numero incorrecto, elija un numero entre el 1-50")
}

