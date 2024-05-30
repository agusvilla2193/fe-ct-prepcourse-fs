function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

    while (numero > 1){

      if(numero % 2 === 0 ){
        numero = numero / 2
      } else return false

  }
    return true


}

module.exports = esPotenciaDeDos;



// Realice un bucle while con la condicion de que si el numero es mayor a uno ingrese e inicie el ciclo
// luego con el if pregunto si el modulo del numero es igual a cero, cuando se cumpla esa condicion ingresara
// y va a dividir el numero entre 2 y almacenara el numero y asi lo hara hasta que ya no lo pueda hacer, y
// si realizo lo antes mencionado retornara true. En caso contrario si no retornara false.