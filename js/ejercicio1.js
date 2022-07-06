const edad = parseInt(prompt("Ingrese su edad"));
if(edad >= 18){
    document.write("Usted ya puede sacar su carnet de conducir")
} else if(edad < 18){
    document.write("Usted debe esperar a tener 18 años para poder sacar su carnet de conducir");
} else {
    document.write("Escribe un numero valido")
}
