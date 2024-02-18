/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las 
palabras que lo conforma. Puedes usar este array para probar tu función: */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(array) {
  const contador = {}

  array.forEach((palabra) => {
    if (contador[palabra]) {
      contador[palabra]++
    } else {
      contador[palabra] = 1
    }
  })
  return contador
}

const result = repeatCounter(counterWords)
console.log(result)
