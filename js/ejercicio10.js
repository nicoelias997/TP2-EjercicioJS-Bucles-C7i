// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Elija el numero de filas"));

let columnas = parseInt(prompt("Elija el numero de columnas"));

let relleno = filas*columnas; //le damos el valor mas alto que tendra la columna

document.write("<table border>");  //creamos la tabla con borde fuera 

for(let i = 0; i < filas; i++){ //le damos valor al numero de filas
    document.write("<tr>");     //creamos las filas

for(let j = 0; j < columnas; j++){ 
    document.write("<td>");     //creamos las columnas

    document.write(relleno);    //como ya tenemos las filas y columnas, las rellenamos

    relleno--;                  //Y que el relleno sea decreciente

    document.write("</td>");    //cerramos las columnas
}
    document.write("</tr>");    //cerramos la fila
}
document.write("</table>");     //cerramos la tabla