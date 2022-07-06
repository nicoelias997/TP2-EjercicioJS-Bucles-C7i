const nota = parseInt(prompt("Escriba su nota en numero entre el 0-10"));
if((nota >= 0) && (nota <=10)){
if((nota <= 2) && (nota >= 0)){
    alert("Muy deficiente");
} else if((nota <= 4) && (nota > 2)){
    alert("Insuficiente");
} else if((nota <= 6) && (nota > 4)){
    alert("Suficiente");
} else if(nota === 7){
    alert("Bien");
} else if((nota <= 9) && (nota > 7)){
    alert("Notable");
} else if(nota === 10){
    alert("Sobresaliente")
} 
} else if((nota < 0) || (nota > 10)){
    alert("Numero erroneo");
} else{
    alert("Introduce un numero valido")
}
