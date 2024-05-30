function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

    var i = 0;

  do{
      num = num + 5;
      i++;

    }while(i < 8);
    
    return num;

}

module.exports = doWhile;


// Creamos una variable iteradora y la inicializamos en cero en este caso, luego escribimos el ciclo dowhile
// dentro ponemos el argumento "num" y le asignamos la suma de la consigna que sera "num" mas 5, en la linea
// siguiente hacemos que la variable iteradora incremente. Ponemos la condicion que nos dice en la consigna
// que tiene que repetirse la cuenta al menos 8 veces, eso serian 8 vueltas. Y por ultimo, retornamos "num".