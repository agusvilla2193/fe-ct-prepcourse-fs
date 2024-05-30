//El for el Bucle For es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos que queremos ejecutar.
//Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis.
//for (var i=50; i <= 1000; i = i+10 ){
//    console.log(i)
//}


//El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución.
//Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado. 
// var i = 1
// while ( i < 101 ){

//     console.log(i)

//     i++
// }




function esIgualYNegativo(a, b) {


    if (a === b && a + b < 0) return true
    else return false


}

console.log(esIgualYNegativo)