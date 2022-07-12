// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nombre1 = prompt("Escriba su nombre");
let edad1 = parseInt(prompt("Escriba su edad"));
let nombre2 = prompt("Escriba su nombre");
let edad2 = parseInt(prompt("Escriba su edad"));
let nombre3 = prompt("Escriba su nombre");
let edad3 = parseInt(prompt("Escriba su edad"));

if(Math.max(edad1,edad2,edad3) == edad1){
    document.write("El/La mayor es " + nombre1 + "<br>");
}
if(Math.max(edad1,edad2,edad3) == edad2){
    document.write("El/La mayor es " + nombre2 + "<br>");
}
if(Math.max(edad1,edad2,edad3) == edad3){
    document.write("El/La mayor es " + nombre3 + "<br>");
}