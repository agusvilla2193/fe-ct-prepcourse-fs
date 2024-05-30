function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:



   const indiceAleatorio = Math.floor(Math.random() * array.length);
   // Devuelve el elemento en el índice aleatorio
   return array[indiceAleatorio];





}

module.exports = obtenerElementoAleatorio;


/* En esta función, Math.random() genera un número decimal aleatorio entre 0(inclusive) y 1(exclusivo).
Multiplicando este valor por la longitud del array, obtenemos un índice aleatorio dentro del rango de los 
índices del array. Luego, simplemente retornamos el elemento en ese índice.
De esta manera, la función elementoAleatorio() devolverá un elemento aleatorio cada vez que se llame
con un array dado. */