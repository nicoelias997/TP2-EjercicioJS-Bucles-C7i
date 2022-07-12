let texto = prompt("Escriba un texto");
let cuenta = 0;
for(let i = 0; i < texto.length; i++){
    texto = texto.toLowerCase();
    if(texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u"){
        cuenta++;
    }
}
document.write(cuenta);