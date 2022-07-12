// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let x = parseInt(prompt("Elija un numero del 1 al 50, se armara una piramide desde el numero que elija"));

if((x > 0) && (x <= 50)){

for(let i = 1; i <= x; i++){ 

    for(let y = 1; y <= i; y++){ 

       document.write(y); 
    }
    document.write("<br>");
}
} else {
    document.write("Numero incorrecto, elija un numero entre el 1-50")
}
