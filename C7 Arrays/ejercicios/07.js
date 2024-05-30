function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  array.sort((a, b) => {
    // Convierte ambos elementos a cadenas para asegurarse de que la comparación sea consistente
    let stringA = String(a);
    let stringB = String(b);
    // Usa localeCompare() para comparar las cadenas
    return stringA.localeCompare(stringB, undefined, { sensitivity: 'base' });
  });
  return array; // Retorna el array ordenado



}

module.exports = ordenarArray;


/* Se llama con el parámetro sensitivity: 'base', lo que hace que la comparación sea sensible a las
diferencias de mayúsculas y minúsculas, pero no a otras diferencias como acentos.
Esto debería manejar cualquier tipo de dato de manera más adecuada. */