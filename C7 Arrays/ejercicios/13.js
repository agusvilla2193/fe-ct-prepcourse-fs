function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

    var acumulador = [];

    for (var i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
        acumulador.push(array[i])
      }
    }
    return acumulador;


}

module.exports = filtrarNumerosPares;
